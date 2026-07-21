# Charlie Wisoff — Personal Website

Static HTML/HTMX personal portfolio site, hosted on GitHub Pages.

## Tech Stack

- **HTML + HTMX** — no build step, no framework. HTMX handles page navigation by fetching HTML fragments and swapping them into the content area.
- **Bootstrap 4** (CDN) — layout and utility classes.
- **Custom CSS** — `css/styles.css`.

## File Structure

```
index.html            # Page shell: navbar + content div
partials/
  home.html           # Home section fragment (loaded by HTMX)
  portfolio.html      # Portfolio section fragment (loaded by HTMX)
css/
  styles.css          # All styles
assets/
  fonts/              # Custom font (moskmedium_500)
  images/             # Local project screenshots
.github/
  workflows/
    deploy.yml        # CI/CD: auto-deploy on push to main
```

## Local Development

There is no build step. To run locally:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

> **Why a local server?** HTMX fetches page fragments via HTTP requests. Browsers block these requests when opening files directly via `file://`, so you need a simple HTTP server. `python3 -m http.server` is the easiest option. VS Code's [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) also works.

## Deployment

Deployment is automatic. Pushing or merging a branch into `main` triggers a GitHub Actions workflow (`.github/workflows/deploy.yml`) that copies the static files to the `gh-pages` branch. GitHub Pages then serves the site from that branch.

**Live site:** https://charlie763.github.io/personalWebsite

### One-time GitHub setup required

After first pushing this workflow, enable write permissions for Actions:

1. Go to your repository on GitHub
2. **Settings → Actions → General → Workflow permissions**
3. Select **"Read and write permissions"**
4. Click **Save**

This allows the workflow to push to the `gh-pages` branch using the built-in `GITHUB_TOKEN`. GitHub Pages should remain configured to deploy from the `gh-pages` branch (no change needed there).

### Manual deploy (fallback)

If you need to trigger deployment without pushing new code, you can run the workflow manually from the **Actions** tab on GitHub → select the workflow → **Run workflow**.
