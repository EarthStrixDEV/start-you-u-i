/**
 * Pixel art / 8-bit demo — a small heart sprite composed cell-by-cell in a
 * CSS grid, each visible pixel a distinct colored grid cell (real per-cell
 * composition, not an image).
 */

// 8x8 heart sprite. "." = transparent, "R" = red fill, "D" = dark-red outline.
const HEART_SPRITE = [
  "..DD..DD",
  ".DRRDDRR",
  "DRRRRRRR",
  "DRRRRRRR",
  "DRRRRRRR",
  ".DRRRRD.",
  "..DRRD..",
  "...DD...",
];

const CELL_COLOR: Record<string, string> = {
  ".": "transparent",
  D: "#7f1d1d",
  R: "#ef4444",
};

function PixelArtDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-indigo-950 flex flex-col items-center justify-center gap-4">
      <div className="grid grid-cols-8 grid-rows-8 gap-0 w-32 h-32 border-2 border-indigo-400/40">
        {HEART_SPRITE.flatMap((row, rowIndex) =>
          row.split("").map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{ backgroundColor: CELL_COLOR[cell] }}
            />
          )),
        )}
      </div>
      <p className="font-mono text-xs uppercase tracking-widest text-indigo-300">
        Press Start
      </p>
    </div>
  );
}

export default PixelArtDemo;
