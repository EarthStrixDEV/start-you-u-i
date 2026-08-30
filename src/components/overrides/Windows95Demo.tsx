/**
 * Windows 95 / Web 1.0 demo — a small mock desktop window: classic gray
 * chrome, a navy title bar with mock close/minimize squares, and a body
 * with an outset-beveled button (mismatched light/dark border sides fake
 * the 3D bevel — the signature Win95 chrome tell).
 */
function Windows95Demo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-teal-700 flex items-center justify-center p-4">
      <div
        className="w-full max-w-[280px] border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040]"
        style={{ backgroundColor: "#c0c0c0" }}
      >
        {/* title bar */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] px-1.5 py-1">
          <span className="text-xs font-bold text-white">My Computer</span>
          <div className="flex gap-1">
            <span className="flex h-3.5 w-3.5 items-center justify-center border border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] text-[9px] font-bold leading-none text-black">
              _
            </span>
            <span className="flex h-3.5 w-3.5 items-center justify-center border border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] text-[9px] font-bold leading-none text-black">
              X
            </span>
          </div>
        </div>
        {/* body */}
        <div className="flex flex-col gap-3 p-4">
          <div className="border border-t-[#404040] border-l-[#404040] border-b-white border-r-white bg-white p-2 text-[10px] text-black">
            C:\WINDOWS&gt; Welcome to the desktop.
          </div>
          <button
            type="button"
            className="w-fit border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] px-4 py-1 text-xs font-normal text-black active:border-t-[#404040] active:border-l-[#404040] active:border-b-white active:border-r-white"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Windows95Demo;
