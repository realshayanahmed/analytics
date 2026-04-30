import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const words = text.trim().split(/\s+/).filter((word) => word !== "").length;
  const characters = text.length;
  const instagramRemaining = 280 - text.length;
  const facebookRemaining = 2200 - text.length;

  return (
    <div className="min-h-screen bg-[#e4eff3] font-['Inter',_system-ui,_sans-serif] text-[#343a40] text-[16px]">
      <section className="hero-texture h-[255px] w-full text-center">
        <h1 className="relative z-10 pt-[78px] text-[42px] leading-none tracking-[0.12em] text-white md:text-[64px] md:tracking-[0.12em]">
          <span className="font-bold">WORD</span>
          <span className="font-normal">ANALYTICS</span>
        </h1>
      </section>

      <div className="relative z-10 mx-auto -mt-[46px] w-[1050px] max-w-[calc(100%-32px)] pb-10 md:max-w-[calc(100%-48px)]">
        <main className="flex h-auto overflow-hidden rounded-[10px] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.16)] md:h-[520px] md:flex-row flex-col">
          <section className="flex min-h-[340px] flex-1 flex-col p-[20px] md:min-h-0 md:p-[30px_39px]">
            <textarea
              autoFocus
              aria-label="Enter your text"
              className="h-full w-full resize-none border-none bg-transparent text-[22px] leading-[1.55] text-[#343a40] outline-none placeholder:text-[#70777b]"
              placeholder="Enter your text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </section>

          <section className="grid h-[320px] w-full grid-cols-2 grid-rows-2 border-t border-[#dde6eb] bg-[#f1f6fa] md:h-full md:w-[380px] md:flex-none md:border-l md:border-t-0">
            <div className="flex flex-col items-center justify-center border-b border-r border-[#dde6eb]">
              <span className="text-[38px] font-bold leading-none text-[#4f565a]">
                {words}
              </span>
              <span className="mt-[13px] text-[12px] font-bold uppercase tracking-[0.2em] text-[#7f888d]">
                Words
              </span>
            </div>

            <div className="flex flex-col items-center justify-center border-b border-[#dde6eb]">
              <span className="text-[38px] font-bold leading-none text-[#4f565a]">
                {characters}
              </span>
              <span className="mt-[13px] text-[12px] font-bold uppercase tracking-[0.2em] text-[#7f888d]">
                Characters
              </span>
            </div>

            <div className="flex flex-col items-center justify-center border-r border-[#dde6eb]">
              <span
                className={`text-[38px] font-bold leading-none ${
                  instagramRemaining < 0 ? "text-[#fa5252]" : "text-[#4f565a]"
                }`}
              >
                {instagramRemaining}
              </span>
              <span className="mt-[13px] text-[12px] font-bold uppercase tracking-[0.2em] text-[#7f888d]">
                Instagram
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span
                className={`text-[38px] font-bold leading-none ${
                  facebookRemaining < 0 ? "text-[#fa5252]" : "text-[#4f565a]"
                }`}
              >
                {facebookRemaining}
              </span>
              <span className="mt-[13px] text-[12px] font-bold uppercase tracking-[0.2em] text-[#7f888d]">
                Facebook
              </span>
            </div>
          </section>
        </main>

        <footer className="mt-[14px] flex flex-col items-center justify-between gap-2 text-center text-[13px] font-bold text-[#98a2a6] md:flex-row md:text-left">
          <span>© Copyright by ByteGrad. All rights reserved.</span>
          <span>Last checked limits: 17 days ago</span>
        </footer>
      </div>
    </div>
  );
}
