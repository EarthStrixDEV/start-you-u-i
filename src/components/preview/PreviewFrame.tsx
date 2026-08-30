import type { ReactNode } from "react";

interface PreviewFrameProps {
  bgClass?: string;
  children: ReactNode;
}

/**
 * Isolated visual container for a style's demo composition.
 *
 * Establishes its own stacking context so the surrounding claymorphic
 * shell/card chrome never bleeds its background or text styling into the
 * demo content rendered inside it.
 */
function PreviewFrame({ bgClass, children }: PreviewFrameProps) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-2xl min-h-[180px] flex items-center justify-center p-6 ${
        bgClass ?? "bg-slate-100"
      }`}
    >
      {children}
    </div>
  );
}

export default PreviewFrame;
