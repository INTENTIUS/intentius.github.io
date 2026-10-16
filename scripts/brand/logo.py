"""The intentius logo: an eye with a brain for an iris, in pixels.

The grid below is the drawing, one character per art pixel: '#' is ink, '.' is
empty. A pixel change is a one-character edit here, then a re-run of
generate.sh. The output is pure pixel SVG (one rect per run of ink,
shape-rendering="crispEdges", no text, no fonts).

The drawing was traced from ~/Documents/intentius/logo-raster.png at 2-pixel
strokes and mirrored about the centre column, so keep it symmetric when
editing.

    python3 logo.py <fill> <out.svg>

The site draws the logo with CSS mask-image over a colour token, so the fill
only matters to its alpha.
"""
import sys

GRID = """
.........................#####.........................
....................###############....................
.................#####################.................
..............##########.......##########..............
............##########...........##########............
...........#####.###...###...###...###.#####...........
.........#####..###...#####.#####...###..#####.........
........#####...##...##...###...##...##...#####........
......#####....##....##...###...##....##....#####......
.....#####.....##...###....#....###...##.....#####.....
....####......##...####....#....####...##......####....
...####.......##..##..#....#....#..##..##.......####...
..####........##..##.......#.......##..##........####..
.####........##...##.......#.......##...##........####.
####.........##...#####....#....#####...##.........####
####.........##..######....#....######..##.........####
.####........##..##........#........##..##........####.
..####........##.##........#........##.##........####..
...####.......##.###..##...#...##..###.##.......####...
....####......##..#####....#....#####..##......####....
.....####......##...###....#....###...##......####.....
......#####....##....##...###...##....##....#####......
........####....##...###.#####.###...##....####........
.........#####..###...#####.#####...###..#####.........
...........#####.###...............###.#####...........
............##########...........##########............
..............##########.......##########..............
................#######################................
...................#################...................
.........................#####.........................
""".strip().splitlines()
W = max(map(len, GRID))
H = len(GRID)
assert all(r == r[::-1] for r in GRID), "the logo is mirror-symmetric"


def rects(grid):
    out = []
    for y, row in enumerate(grid):
        x = 0
        while x < len(row):
            if row[x] == "#":
                s = x
                while x < len(row) and row[x] == "#":
                    x += 1
                out.append(f'<rect x="{s}" y="{y}" width="{x - s}" height="1"/>')
            else:
                x += 1
    return "".join(out)


def logo(fill, out):
    with open(out, "w") as f:
        f.write(
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 {W + 2} {H + 2}" '
            f'width="{(W + 2) * 10}" height="{(H + 2) * 10}" shape-rendering="crispEdges">'
            f'<g fill="{fill}">{rects(GRID)}</g></svg>\n'
        )


if __name__ == "__main__":
    logo(sys.argv[1], sys.argv[2])
