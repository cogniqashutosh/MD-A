"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const checklist = [
  "Monthly Insight Newsletter",
  "Industry & Regulatory Updates",
  "Upcoming Seminar Invites",
];

export default function Newsletter() {
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [done,      setDone]      = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#0e253d]" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[30px_30px]" />
      <div className="absolute left-0 top-0 bottom-0 w-1.25 bg-[linear-gradient(to_bottom,#c8392b_0%,rgba(200,57,43,0)_100%)]" />

      <div className="relative z-10 section-wrap">
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: 'clamp(2.5rem,5vw,5rem)' }}>

          {/* ══ LEFT ══ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-w-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-9 h-[2.5px] bg-[#c8392b] rounded-sm shrink-0" />
              <p className="font-bold uppercase tracking-[0.22em] text-white/55 text-[0.63rem]">
                Stay Informed
              </p>
            </div>

            <h2 className="text-white font-black uppercase leading-tight mb-6 text-[clamp(2rem,3.2vw,2.8rem)] tracking-[-0.022em]">
              SINGLE-SOURCE<br />
              <span className="text-[#c8392b]">EXPERTISE</span>
            </h2>

            <p className="text-white/65 leading-[1.9] mb-10 text-[0.96rem] max-w-105">
              Subscribe to the MD&amp;A newsletter to receive the latest industry insights,
              technical resources, seminar announcements, and expert updates.
            </p>

            <div className="flex flex-col gap-4">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[rgba(200,57,43,0.16)] border border-[rgba(200,57,43,0.35)] flex items-center justify-center shrink-0">
                    <svg className="w-2.75 h-2.75" fill="none" stroke="#c8392b" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-white/70 text-[0.9rem]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ══ RIGHT: form ══ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="min-w-0"
          >
            {done ? (
              <div className="text-center py-16 px-8 bg-white/6 border border-white/12 rounded-[18px]">
                <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[rgba(200,57,43,0.18)] border-2 border-[#c8392b] flex items-center justify-center">
                  <svg className="w-5.5 h-5.5" fill="none" stroke="#c8392b" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="text-white font-black text-xl mb-2">Subscribed!</p>
                <p className="text-white/55 text-sm">You&apos;ll receive our next MD&amp;A Insight newsletter soon.</p>
              </div>
            ) : (
              <div className="border border-white/10 rounded-[18px]" style={{ background: 'rgba(255,255,255,0.05)', padding: 'clamp(1.25rem,5vw,2.5rem)' }}>
                <h3 className="text-white font-black mb-2 text-[1.1rem] tracking-[-0.01em]">
                  Subscribe to our Newsletter
                </h3>
                <p className="text-white/40 mb-7 text-[0.82rem]">
                  Join thousands of power generation professionals.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="flex flex-col gap-5">
                  <div>
                    <label className="block mb-2 font-bold uppercase tracking-widest text-white/50 text-[0.58rem]">
                      Full Name <span className="text-[#c8392b]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input type="text" required placeholder="First" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input-dark" />
                      <input type="text" required placeholder="Last"  value={lastName}  onChange={(e) => setLastName(e.target.value)}  className="input-dark" />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-bold uppercase tracking-widest text-white/50 text-[0.58rem]">
                      Email Address <span className="text-[#c8392b]">*</span>
                    </label>
                    <input type="email" required placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="input-dark" />
                  </div>

                  <button type="submit" className="btn-red justify-center w-full mt-1">
                    SUBSCRIBE NOW
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>

                  <p className="text-white/22 text-[0.65rem] leading-[1.6] text-center">
                    By subscribing, you grant MD&amp;A permission to email you. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

