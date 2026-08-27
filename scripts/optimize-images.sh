#!/bin/bash
# Convert HEIC/JPG/PNG images to WebP and resize to fit within MAX_SIZE on the longest side.
# Existing WebP images are resized in-place if needed. Originals are deleted after conversion.
# Requires: cwebp (brew install webp), ImageMagick (brew install imagemagick)
# Usage: ./scripts/optimize-images.sh [directory]
#        ./scripts/optimize-images.sh                   # defaults to assets/images

MAX_SIZE=1200
DIR="${1:-assets/images}"

echo "Optimizing images in '$DIR' (max ${MAX_SIZE}px on longest side)..."
echo ""

converted=0
resized=0
skipped=0

while IFS= read -r -d '' img; do
    ext="${img##*.}"
    ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

    width=$(sips -g pixelWidth "$img" 2>/dev/null | awk '/pixelWidth/ {print $2}')
    height=$(sips -g pixelHeight "$img" 2>/dev/null | awk '/pixelHeight/ {print $2}')

    if [ -z "$width" ] || [ -z "$height" ]; then
        echo "  SKIP (unreadable): $img"
        continue
    fi

    if [ "$ext_lower" = "webp" ]; then
        # Existing WebP: resize in-place if needed
        if [ "$width" -le "$MAX_SIZE" ] && [ "$height" -le "$MAX_SIZE" ]; then
            skipped=$((skipped + 1))
            continue
        fi
        if [ "$width" -ge "$height" ]; then
            scale_w=$MAX_SIZE
            scale_h=$(( height * MAX_SIZE / width ))
        else
            scale_h=$MAX_SIZE
            scale_w=$(( width * MAX_SIZE / height ))
        fi
        tmp="${img}.tmp.webp"
        before=$(stat -f%z "$img")
        cwebp -q 82 -resize "$scale_w" "$scale_h" "$img" -o "$tmp" -quiet 2>/dev/null && mv "$tmp" "$img"
        after=$(stat -f%z "$img")
        echo "  RESIZED: $(basename "$img")  ${width}x${height} → max ${MAX_SIZE}px  ($(( before / 1024 ))KB → $(( after / 1024 ))KB)"
        resized=$((resized + 1))
    else
        # HEIC/JPG/PNG: convert to WebP (with resize if needed), then delete original
        webp_out="${img%.*}.webp"
        before=$(stat -f%z "$img")

        if [ "$ext_lower" = "heic" ]; then
            # sips reliably converts HEIC → JPEG on macOS; then cwebp handles the rest
            tmp_jpg="${img%.*}_tmp.jpg"
            sips -s format jpeg "$img" --out "$tmp_jpg" >/dev/null 2>&1
            if [ -f "$tmp_jpg" ]; then
                if [ "$width" -gt "$MAX_SIZE" ] || [ "$height" -gt "$MAX_SIZE" ]; then
                    if [ "$width" -ge "$height" ]; then
                        scale_w=$MAX_SIZE; scale_h=$(( height * MAX_SIZE / width ))
                    else
                        scale_h=$MAX_SIZE; scale_w=$(( width * MAX_SIZE / height ))
                    fi
                    cwebp -q 82 -resize "$scale_w" "$scale_h" "$tmp_jpg" -o "$webp_out" -quiet 2>/dev/null
                else
                    cwebp -q 82 "$tmp_jpg" -o "$webp_out" -quiet 2>/dev/null
                fi
                rm "$tmp_jpg"
            fi
        else
            # JPG/PNG: use cwebp for better compression control
            if [ "$width" -gt "$MAX_SIZE" ] || [ "$height" -gt "$MAX_SIZE" ]; then
                if [ "$width" -ge "$height" ]; then
                    scale_w=$MAX_SIZE
                    scale_h=$(( height * MAX_SIZE / width ))
                else
                    scale_h=$MAX_SIZE
                    scale_w=$(( width * MAX_SIZE / height ))
                fi
                cwebp -q 82 -resize "$scale_w" "$scale_h" "$img" -o "$webp_out" -quiet 2>/dev/null
            else
                cwebp -q 82 "$img" -o "$webp_out" -quiet 2>/dev/null
            fi
        fi

        if [ -f "$webp_out" ]; then
            after=$(stat -f%z "$webp_out")
            echo "  CONVERTED: $(basename "$img") → $(basename "$webp_out")  ($(( before / 1024 ))KB → $(( after / 1024 ))KB)"
            rm "$img"
            converted=$((converted + 1))
        else
            echo "  FAILED: $(basename "$img")"
        fi
    fi

done < <(find "$DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" -o -iname "*.heic" \) -print0)

echo ""
echo "Done. Converted: $converted  |  Resized: $resized  |  Already within limit: $skipped"
