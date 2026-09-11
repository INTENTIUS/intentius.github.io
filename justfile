# Serve the site locally with live reload at http://localhost:1313/
serve:
    hugo server -D

# Build the site into public/
build:
    hugo --gc --minify

# Screenshot the built homepage (macOS Chrome) into /tmp/intentius-home.png
shot: build
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
      --hide-scrollbars --window-size=1200,1600 --screenshot=/tmp/intentius-home.png \
      "file://$(pwd)/public/index.html"
