# Serve the site locally with live reload at http://localhost:4321/
serve:
    npm run dev

# Lint every content page on the sentences trope ruleset (medium and high fail)
lint:
    npm run -s lint:prose

# Build the site into dist/ and check every room and home page link
build:
    npm run build

# Serve the built site at http://localhost:4321/
preview: build
    npm run preview

# Redraw the logo, the mark and the favicons from scripts/brand/*.py
brand:
    scripts/brand/generate.sh
