#!/bin/bash
# Resize images in-place to fit within MAX_SIZE on the longest side.
# Skips images already within the limit — safe to re-run when adding new images.
# Requires: cwebp (brew install webp), ImageMagick (brew install imagemagick)
# Usage: ./scripts/optimize-images.sh [directory]
#        ./scripts/optimize-images.sh                   # defaults to assets/images

MAX_SIZE=1200
DIR="${1:-assets/images}"

echo "Optimizing images in '$DIR' (max ${MAX_SIZE}px on longest side)..."
echo ""

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

    if [ "$width" -le "$MAX_SIZE" ] && [ "$height" -le "$MAX_SIZE" ]; then
        skipped=$((skipped + 1))
        continue
    fi

    before=$(stat -f%z "$img")
    tmp="${img}.tmp.${ext}"

    if [ "$ext_lower" = "webp" ]; then
        # Compute scaled dimensions maintaining aspect ratio
        if [ "$width" -ge "$height" ]; then
            scale_w=$MAX_SIZE
            scale_h=$(( height * MAX_SIZE / width ))
        else
            scale_h=$MAX_SIZE
            scale_w=$(( width * MAX_SIZE / height ))
        fi
        cwebp -q 82 -resize "$scale_w" "$scale_h" "$img" -o "$tmp" -quiet 2>/dev/null && mv "$tmp" "$img"
    else
        # jpg/png: use ImageMagick
        magick "$img" -resize "${MAX_SIZE}x${MAX_SIZE}>" "$tmp" && mv "$tmp" "$img"
    fi

    after=$(stat -f%z "$img")
    echo "  RESIZED: $(basename "$img")  ${width}x${height} → max ${MAX_SIZE}px  ($(( before / 1024 ))KB → $(( after / 1024 ))KB)"
    resized=$((resized + 1))

done < <(find "$DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) -print0)

echo ""
echo "Done. Resized: $resized  |  Already within limit: $skipped"
