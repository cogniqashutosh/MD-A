"use client";
import { useState } from "react";

const checklist = [
  "Industry news & technical insights",
  "Upcoming seminar announcements",
  "Case studies & project highlights",
];

export default function InsightNewsletter() {
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [done,      setDone]      = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#f0f4f8] py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(to_right,transparent,#dbe4ec_40%,transparent)]" />

      <div className="relative z-10 section-wrap">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">

          {/* ── LEFT: Navy card ── */}
          <div className="relative overflow-hidden flex flex-col justify-between bg-[#1a3a5c] rounded-[18px] py-12 px-11">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute bottom-[-20px] right-[-10px] pointer-events-none select-none font-black text-[clamp(80px,10vw,130px)] text-white/[0.04] leading-none">
              MDA
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2.5px] bg-[#c8392b] rounded-sm shrink-0" />
                <p className="font-bold uppercase tracking-[0.2em] text-white/55 text-[0.6rem]">
                  Newsletter
                </p>
              </div>

              <h2 className="text-white font-black leading-tight mb-5 text-[clamp(1.9rem,3vw,2.7rem)] tracking-[-0.022em]">
                Insight<br />
                <span className="text-[#c8392b]">Newsletter</span>
              </h2>

              <div className="w-10 h-[3px] bg-[#c8392b] rounded-sm mb-[22px]" />

              <p className="text-white/65 leading-[1.85] mb-8 text-[0.92rem]">
                Subscribe to receive the latest resources, tips, and updates from our team of power
                generation experts — delivered straight to your inbox.
              </p>

              <div className="flex flex-col gap-4">
                {checklist.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-[22px] h-[22px] rounded-full bg-[rgba(200,57,43,0.18)] border border-[rgba(200,57,43,0.32)] flex items-center justify-center shrink-0">
                      <svg className="w-[10px] h-[10px]" fill="none" stroke="#c8392b" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span className="text-white/65 text-[0.87rem]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
              <p className="text-white/35 uppercase tracking-widest font-bold text-[0.55rem] mb-1">
                Headquarters
              </p>
              <p className="text-white/55 text-[0.78rem]">
                25 British American Blvd., Latham, NY 12110
              </p>
            </div>
          </div>

          {/* ── RIGHT: Form on white card ── */}
          <div className="bg-white rounded-[18px] py-12 px-11 shadow-[0_4px_24px_rgba(26,58,92,0.09)] border border-[#dbe4ec]">
            {done ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="mb-5 w-[60px] h-[60px] rounded-full bg-[rgba(200,57,43,0.10)] border-2 border-[#c8392b] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="#c8392b" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="font-black text-xl mb-2 text-[#1a3a5c]">You&apos;re subscribed!</p>
                <p className="text-[#7a8a9a] text-[0.88rem]">Thank you — we&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <>
                <h3 className="font-black mb-1 text-[#1a3a5c] text-[1.1rem] tracking-[-0.01em]">
                  Subscribe to our Newsletter
                </h3>
                <p className="text-[#8a9aaa] text-[0.82rem] mb-7">
                  Join thousands of power generation professionals.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="flex flex-col gap-5">
                  <div>
                    <label className="block mb-2 font-bold uppercase tracking-widest text-[#7a8a9a] text-[0.58rem]">
                      Full Name <span className="text-[#c8392b]">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" required placeholder="First" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input-base" />
                      <input type="text" required placeholder="Last"  value={lastName}  onChange={(e) => setLastName(e.target.value)}  className="input-base" />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-bold uppercase tracking-widest text-[#7a8a9a] text-[0.58rem]">
                      Email Address <span className="text-[#c8392b]">*</span>
                    </label>
                    <input type="email" required placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="input-base" />
                  </div>

                  <button type="submit" className="btn-red justify-center w-full mt-1">
                    SUBSCRIBE NOW
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>

                  <p className="text-[#b0c0cc] text-[0.65rem] leading-[1.65] text-center">
                    By submitting, you grant MD&amp;A permission to email you. Unsubscribe at any time.{" "}
                    <a
                      href="https://www.mdaturbines.com/privacypolicy/"
                      className="underline text-[#1a3a5c]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

