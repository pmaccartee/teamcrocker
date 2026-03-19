import { useState } from "react";
import { Link } from "wouter";

export default function Recycle() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F7F5] font-['DM_Sans'] text-[#1A1A1A]">
      <style dangerouslySetInnerHTML={{
        __html: `
          .recycle-page * { box-sizing: border-box; }
          .recycle-page {
            --red: #C0392B;
            --red-dark: #a93226;
            --white: #ffffff;
            --off-white: #F8F7F5;
            --light-gray: #F0EEEB;
            --border: #E0DDD8;
            --text: #1A1A1A;
            --mid: #666;
            --light-text: #999;
          }
        `
      }} />

      <div className="recycle-page">
        {/* Header */}
        <header className="flex h-[72px] items-center justify-between border-b border-[#E0DDD8] bg-white px-5 sm:px-12">
          <Link href="/" className="flex flex-col gap-0.5 no-underline">
            <span className="font-serif text-[1.1rem] font-bold tracking-[0.01em] text-[#1A1A1A]">Team Crocker</span>
            <span className="text-[0.68rem] uppercase tracking-[0.1em] text-[#666]">The Grubb Company</span>
          </Link>
          <span className="rounded-sm border-[1.5px] border-[#C0392B] px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#C0392B]">
            Community Event
          </span>
        </header>

        {/* Hero */}
        <section className="border-b-[3px] border-[#C0392B] bg-white px-5 pb-20 pt-[52px] text-center sm:px-12 sm:pt-[72px]">
          <p className="mb-[18px] inline-block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#C0392B]">
            Free · Saturday, April 18 · Crocker Highlands
          </p>
          <h1 className="mb-2 font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-bold leading-[1.15] text-[#1A1A1A]">
            Community<br /><em className="font-normal italic text-[#C0392B]">Recycle Day</em>
          </h1>
          <p className="mx-auto mb-10 mt-4 max-w-[520px] text-[0.95rem] leading-[1.75] text-[#666]">
            Reclaim your space and responsibly dispose of your excess stuff. We'll have certified e-waste removal and on-site paper shredding — all free, all in one morning.
          </p>
          <div className="flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:flex-wrap">
            <div className="inline-flex items-center gap-2 rounded-sm border border-[#E0DDD8] bg-[#F8F7F5] px-5 py-2.5 text-[0.8rem] font-medium text-[#1A1A1A]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#C0392B]"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Saturday, April 18, 2026
            </div>
            <div className="inline-flex items-center gap-2 rounded-sm border border-[#E0DDD8] bg-[#F8F7F5] px-5 py-2.5 text-[0.8rem] font-medium text-[#1A1A1A]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#C0392B]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              10:00 AM – 2:00 PM
            </div>
            <div className="inline-flex items-center gap-2 rounded-sm border border-[#E0DDD8] bg-[#F8F7F5] px-5 py-2.5 text-[0.8rem] font-medium text-[#1A1A1A]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#C0392B]"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Mandana Plaza Park · 1600 Lakeshore Ave
            </div>
          </div>
        </section>

        {/* What to bring */}
        <section className="border-b border-[#E0DDD8] bg-[#F0EEEB] px-5 py-10 sm:px-12 sm:py-14">
          <div className="mx-auto max-w-[860px]">
            <p className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#C0392B]">What to Bring</p>
            <h2 className="mb-8 font-serif text-[1.6rem] font-bold text-[#1A1A1A]">Two Ways to Clear the Clutter</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-sm border border-[#E0DDD8] border-t-[3px] border-t-[#C0392B] bg-white p-7">
                <span className="mb-3 block text-[1.6rem]">🗂️</span>
                <h3 className="mb-3.5 font-serif text-[1.05rem] font-bold text-[#1A1A1A]">Document Shredding</h3>
                <ul className="flex flex-col gap-2 p-0 text-[0.84rem] leading-[1.5] text-[#666]">
                  <li className="flex items-start gap-2 before:mt-[1px] before:text-[0.75rem] before:text-[#C0392B] before:content-['—']">Bank & financial statements</li>
                  <li className="flex items-start gap-2 before:mt-[1px] before:text-[0.75rem] before:text-[#C0392B] before:content-['—']">Tax records & returns</li>
                  <li className="flex items-start gap-2 before:mt-[1px] before:text-[0.75rem] before:text-[#C0392B] before:content-['—']">Medical records</li>
                  <li className="flex items-start gap-2 before:mt-[1px] before:text-[0.75rem] before:text-[#C0392B] before:content-['—']">Old bills & invoices</li>
                  <li className="flex items-start gap-2 before:mt-[1px] before:text-[0.75rem] before:text-[#C0392B] before:content-['—']">Legal documents</li>
                  <li className="flex items-start gap-2 before:mt-[1px] before:text-[0.75rem] before:text-[#C0392B] before:content-['—']">Anything with personal info</li>
                </ul>
              </div>
              <div className="rounded-sm border border-[#E0DDD8] border-t-[3px] border-t-[#C0392B] bg-white p-7">
                <span className="mb-3 block text-[1.6rem]">♻️</span>
                <h3 className="mb-3.5 font-serif text-[1.05rem] font-bold text-[#1A1A1A]">E-Waste Recycling</h3>
                <ul className="flex flex-col gap-2 p-0 text-[0.84rem] leading-[1.5] text-[#666]">
                  <li className="flex items-start gap-2 before:mt-[1px] before:text-[0.75rem] before:text-[#C0392B] before:content-['—']">Laptops & computers</li>
                  <li className="flex items-start gap-2 before:mt-[1px] before:text-[0.75rem] before:text-[#C0392B] before:content-['—']">Monitors & televisions</li>
                  <li className="flex items-start gap-2 before:mt-[1px] before:text-[0.75rem] before:text-[#C0392B] before:content-['—']">Printers & scanners</li>
                  <li className="flex items-start gap-2 before:mt-[1px] before:text-[0.75rem] before:text-[#C0392B] before:content-['—']">Cell phones & tablets</li>
                  <li className="flex items-start gap-2 before:mt-[1px] before:text-[0.75rem] before:text-[#C0392B] before:content-['—']">Cables, chargers & cords</li>
                  <li className="flex items-start gap-2 before:mt-[1px] before:text-[0.75rem] before:text-[#C0392B] before:content-['—']">Small household electronics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="mx-auto max-w-[640px] px-5 py-12 pb-16 sm:px-10 sm:py-16 sm:pb-20">
          <p className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#C0392B]">Register Now</p>
          <h2 className="mb-1.5 font-serif text-[1.6rem] font-bold text-[#1A1A1A]">Reserve Your Spot</h2>
          <p className="mb-9 text-[0.88rem] leading-[1.65] text-[#666]">Registration helps us plan — walk-ins are always welcome. This event is completely free and open to the community.</p>

          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="mb-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#1A1A1A]">First Name</label>
                  <input type="text" id="firstName" required className="w-full rounded-sm border-[1.5px] border-[#E0DDD8] bg-white px-4 py-3 text-[0.9rem] text-[#1A1A1A] outline-none transition-colors focus:border-[#C0392B]" placeholder="Jane" />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#1A1A1A]">Last Name</label>
                  <input type="text" id="lastName" required className="w-full rounded-sm border-[1.5px] border-[#E0DDD8] bg-white px-4 py-3 text-[0.9rem] text-[#1A1A1A] outline-none transition-colors focus:border-[#C0392B]" placeholder="Smith" />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#1A1A1A]">Email Address</label>
                <input type="email" id="email" required className="w-full rounded-sm border-[1.5px] border-[#E0DDD8] bg-white px-4 py-3 text-[0.9rem] text-[#1A1A1A] outline-none transition-colors focus:border-[#C0392B]" placeholder="jane@example.com" />
              </div>

              <div className="mb-5">
                <label className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#1A1A1A]">I plan to bring:</label>
                <div className="mt-1 flex flex-col gap-2.5">
                  <label className="flex cursor-pointer items-center gap-2.5 text-[0.88rem] text-[#1A1A1A]">
                    <input type="checkbox" className="h-[17px] w-[17px] shrink-0 cursor-pointer accent-[#C0392B]" /> Documents for shredding
                  </label>
                  <label className="flex cursor-pointer items-center gap-2.5 text-[0.88rem] text-[#1A1A1A]">
                    <input type="checkbox" className="h-[17px] w-[17px] shrink-0 cursor-pointer accent-[#C0392B]" /> E-waste / electronics
                  </label>
                  <label className="flex cursor-pointer items-center gap-2.5 text-[0.88rem] text-[#1A1A1A]">
                    <input type="checkbox" className="h-[17px] w-[17px] shrink-0 cursor-pointer accent-[#C0392B]" /> Both
                  </label>
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="notes" className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#1A1A1A]">
                  Questions or Notes <span className="font-normal normal-case tracking-normal text-[#999]">(optional)</span>
                </label>
                <textarea id="notes" className="min-h-[90px] w-full rounded-sm border-[1.5px] border-[#E0DDD8] bg-white px-4 py-3 text-[0.9rem] text-[#1A1A1A] outline-none transition-colors focus:border-[#C0392B]" placeholder="Anything we should know?"></textarea>
              </div>

              <button type="submit" className="mt-2.5 w-full cursor-pointer rounded-sm border-none bg-[#C0392B] p-[15px] text-[0.8rem] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#a93226]">
                Register for the Event
              </button>
              <p className="mt-3.5 text-center text-[0.75rem] leading-[1.6] text-[#999]">Your information is never shared or sold. This is a free neighborhood service — no strings attached.</p>
            </form>
          ) : (
            <div className="rounded-sm border border-[#E0DDD8] border-t-[3px] border-t-[#C0392B] bg-white p-6 text-center sm:px-6 sm:py-[52px]">
              <span className="mb-4 block text-[2.4rem]">✅</span>
              <h3 className="mb-2.5 font-serif text-[1.7rem] font-bold text-[#1A1A1A]">You're registered!</h3>
              <p className="text-[0.88rem] leading-[1.7] text-[#666]">
                We'll see you Saturday, April 18th from 10am–2pm<br/>at Mandana Plaza Park, 1600 Lakeshore Ave, Oakland.<br/><br/>
                Questions? <a href="mailto:patrick@grubbco.com" className="text-[#C0392B] no-underline">patrick@grubbco.com</a> · <a href="tel:4156370257" className="text-[#C0392B] no-underline">415-637-0257</a>
              </p>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="border-t-[3px] border-[#C0392B] bg-[#1A1A1A] px-5 py-8 text-center sm:px-12 sm:py-10">
          <div className="mb-2.5 font-serif text-[1rem] font-bold text-white">Team Crocker · The Grubb Company</div>
          <p className="text-[0.75rem] leading-[1.8] text-white/45">
            Patrick MacCartee · Ilona Campbell · Laura Zeidan Baldazo<br/>
            DRE #02142693 · #2167214 · #01955500<br/>
            <Link href="/" className="text-white/65 no-underline hover:text-white">teamcrocker.com</Link> &nbsp;·&nbsp;
            <a href="mailto:patrick@grubbco.com" className="text-white/65 no-underline hover:text-white">patrick@grubbco.com</a> &nbsp;·&nbsp;
            <a href="tel:4156370257" className="text-white/65 no-underline hover:text-white">415-637-0257</a>
          </p>
        </footer>
      </div>
    </div>
  );
}