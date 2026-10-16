"""The intentius small mark: the logo's brain alone, on a 15x15 grid.

One character per art pixel: '#' is ink, '.' is empty. Edit the grid, then
re-run generate.sh. Pure pixel SVG, shape-rendering="crispEdges".

The mark is also the favicon. The full logo is 55 pixels wide and its brain
turns to mush at 16 or 32 px; the mark fits a 16 px tab one-to-one.

    python3 mark.py <fill> <out.svg>       the mark, one colour
    python3 mark.py --favicon <out.svg>    a favicon that follows the
                                           browser's light or dark scheme
    python3 mark.py --png <out.png>        a 48 px PNG favicon, light ink on a
                                           dark tile (standard library only)

The site draws the mark with CSS mask-image over a colour token, so the fill
of the plain mark only matters to its alpha.
"""
import struct
import sys
import zlib

from logo import rects

GRID = """
...............
....##...##....
...#..###..#...
..#....#....#..
..#.##.#.##.#..
.#.....#.....#.
.#.....#.....#.
..###..#..###..
.#.....#.....#.
.#.....#.....#.
..#.##.#.##.#..
..#....#....#..
...#..###..#...
....##...##....
...............
""".strip().splitlines()
W = H = 15
assert len(GRID) == H and all(len(r) == W for r in GRID), "the mark is 15x15"

# The favicon's ink: near-black on a light browser chrome, near-white on dark.
INK_LIGHT = "#0d0f14"
INK_DARK = "#f4f5f8"
TILE = (0x0c, 0x0e, 0x12)
TILE_INK = (0xf4, 0xf5, 0xf8)


def mark(fill, out):
    with open(out, "w") as f:
        f.write(
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" '
            f'shape-rendering="crispEdges"><g fill="{fill}">{rects(GRID)}</g></svg>\n'
        )


def favicon(out):
    with open(out, "w") as f:
        f.write(
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
            f'width="{W * 4}" height="{H * 4}" shape-rendering="crispEdges">'
            f'<style>g{{fill:{INK_LIGHT}}}@media (prefers-color-scheme:dark){{g{{fill:{INK_DARK}}}}}</style>'
            f'<g>{rects(GRID)}</g></svg>\n'
        )


def png(out, size=48, scale=3):
    # Three image pixels per art pixel, centred on a dark tile.
    off = (size - W * scale) // 2
    raw = b""
    for y in range(size):
        raw += b"\x00"
        for x in range(size):
            gx, gy = (x - off) // scale, (y - off) // scale
            ink = x >= off and y >= off and gx < W and gy < H and GRID[gy][gx] == "#"
            raw += bytes(TILE_INK if ink else TILE)

    def chunk(kind, data):
        body = kind + data
        return struct.pack(">I", len(data)) + body + struct.pack(">I", zlib.crc32(body) & 0xFFFFFFFF)

    with open(out, "wb") as f:
        f.write(b"\x89PNG\r\n\x1a\n")
        f.write(chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 2, 0, 0, 0)))
        f.write(chunk(b"IDAT", zlib.compress(raw, 9)))
        f.write(chunk(b"IEND", b""))


if __name__ == "__main__":
    if sys.argv[1] == "--favicon":
        favicon(sys.argv[2])
    elif sys.argv[1] == "--png":
        png(sys.argv[2])
    else:
        mark(sys.argv[1], sys.argv[2])
