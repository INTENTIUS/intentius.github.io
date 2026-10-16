#!/usr/bin/env bash
# Writes the intentius brand files from the two grids in logo.py and mark.py.
# Run it after editing a grid and commit the output with the change.
#
#   scripts/brand/generate.sh [dir]    dir defaults to public
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
out="${1:-$here/../../public}"
mkdir -p "$out/brand"
# The site masks these over a colour token, so one file serves both themes
# and the fill here is only their alpha.
python3 "$here/logo.py" '#000' "$out/brand/logo.svg"
python3 "$here/mark.py" '#000' "$out/brand/mark.svg"
python3 "$here/mark.py" --favicon "$out/favicon.svg"
python3 "$here/mark.py" --png "$out/favicon-48.png"
