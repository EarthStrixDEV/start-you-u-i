/**
 * Chrome / liquid metal demo — large bold text using the shared `.text-chrome`
 * gradient-clip class from index.css, on a dark surface for contrast, with a
 * hover-triggered background-position sweep to fake a light shine pass.
 */
function ChromeTextDemo() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl min-h-[220px] w-full bg-neutral-900 flex flex-col items-center justify-center gap-2">
      <h2 className="text-chrome text-6xl font-black tracking-tight transition-[background-position] duration-700 ease-out hover:bg-[position:100%_center] [background-position:0%_center]">
        CHROME
      </h2>
      <p className="text-xs uppercase tracking-widest text-neutral-500">
        Hover for shine
      </p>
    </div>
  );
}

export default ChromeTextDemo;
