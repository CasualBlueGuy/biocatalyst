export default function Home() {
  return (
    <main className="min-h-screen text-slate-900 bg-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            {/* Inline logo (flask + leaf) */}
            <svg
              aria-hidden="true"
              viewBox="0 0 64 64"
              className="h-8 w-8 fill-green-600"
            >
              <path d="M24 6h16v4h-2v12.6l11.2 18.5A10 10 0 0 1 39.6 56H24.4A10 10 0 0 1 14.8 41.1L26 22.6V10h-2z"/>
              <path d="M39 10c5.5 0 9 3.8 10 8-3.7.3-7.2-1.6-9.1-4.8-.9 2.3-2.3 4-4.9 4-1.1-4.6 1.9-7.2 4-7.2z"/>
            </svg>
            <span className="font-semibold tracking-tight text-lg">BioCatalyst</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#mission" className="hover:text-green-700">Mission</a>
            <a href="#programs" className="hover:text-green-700">Programs</a>
            <a href="#chapters" className="hover:text-green-700">Start a Chapter</a>
            <a href="#resources" className="hover:text-green-700">Resources</a>
            <a href="#contact" className="hover:text-green-700">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#donate" className="hidden sm:inline-flex rounded-full bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">Donate</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                 Curiosity in
                <span className="text-green-700"> biochemistry</span>
              </h1>
              <p className="mt-5 text-slate-600 text-lg max-w-prose">
                BioCatalyst empowers students with hands-on experiments, mentorship, and a
                chapter-based model that scales impact in local communities.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#chapters" className="rounded-full bg-green-600 text-white px-5 py-3 font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                  Start a Chapter
                </a>
                <a href="#kits" className="rounded-full border border-slate-300 px-5 py-3 font-medium hover:border-slate-400">
                  Download Starter Kit
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 64 64"
                  className="h-40 w-40 fill-green-700"
                >
                  <path d="M24 6h16v4h-2v12.6l11.2 18.5A10 10 0 0 1 39.6 56H24.4A10 10 0 0 1 14.8 41.1L26 22.6V10h-2z"/>
                  <path d="M39 10c5.5 0 9 3.8 10 8-3.7.3-7.2-1.6-9.1-4.8-.9 2.3-2.3 4-4.9 4-1.1-4.6 1.9-7.2 4-7.2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE / FEATURES */}
      <section id="mission" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight">What we do</h2>
            <p className="mt-3 text-slate-600">
              We meet students where they are with accessible experiments, mentor-led
              learning paths, and a scalable chapter framework.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hands‑on Experiment Kits",
                desc:
                  "5–7 safe, low‑cost activities (DNA extraction, enzyme tests) designed for classrooms and clubs.",
              },
              {
                title: "Chapter‑based Impact",
                desc:
                  "Templates and training to launch local chapters, recruit volunteers, and scale across schools.",
              },
              {
                title: "Mentorship & Pathways",
                desc:
                  "Office hours, resources, and guidance for internships, research, and college readiness.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold tracking-tight">Programs</h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg">Starter Experiment Kit</h3>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside" id="kits">
                <li>DNA extraction from strawberries</li>
                <li>Enzyme activity vs. temperature</li>
                <li>pH indicators and buffers</li>
                <li>Diffusion & osmosis demo</li>
                <li>Food chemistry: starch & glucose tests</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                All activities include safety guides, materials lists, and standards alignment.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 p-6" id="chapters">
              <h3 className="font-semibold text-lg">Start a Chapter</h3>
              <ol className="mt-4 space-y-3 text-slate-700 list-decimal list-inside">
                <li>Apply and attend a 30‑min onboarding call.</li>
                <li>Receive the digital kit + playbooks (recruitment, socials, events).</li>
                <li>Run a kickoff demo; collect interest sign‑ups.</li>
                <li>Host monthly workshops; track impact metrics.</li>
                <li>Share updates; get featured on our site and socials.</li>
              </ol>
              <a href="#contact" className="mt-6 inline-block rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800">Apply to Start</a>
            </article>
          </div>
        </div>
      </section>

      {/* DONATE / GET INVOLVED */}
      <section id="donate" className="bg-green-50 border-y border-green-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Fuel the next generation of innovators</h2>
              <p className="mt-3 text-slate-700">
                Your support helps us ship experiment kits, train chapter leaders, and
                sponsor free community workshops.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {/* Replace hrefs with your real donation links (e.g., Stripe/PayPal) */}
              <a href="#" className="rounded-full bg-green-600 text-white px-5 py-3 font-medium hover:bg-green-700">Donate Once</a>
              <a href="#" className="rounded-full border border-green-600 text-green-700 px-5 py-3 font-medium hover:bg-green-100">Monthly Donor</a>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold tracking-tight">Resources</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Safety & Lab Basics",
                desc: "PPE, disposal, and classroom‑safe handling of reagents.",
              },
              { title: "Social Media Playbook", desc: "Templates for IG/TikTok growth and chapter recruitment." },
              { title: "Teacher Guide", desc: "Lesson pacing, standards mapping, and assessment ideas." },
            ].map((r) => (
              <div key={r.title} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
                <a href="#" className="mt-4 inline-block text-sm text-green-700 hover:underline">Download</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
            <p className="mt-2 text-slate-600">
              Questions or want to partner? Send us a note.
            </p>
          </div>
          <form
            className="mt-8 grid gap-4 max-w-2xl"
            action="https://formspree.io/f/your-id" // ✅ Replace with your Formspree endpoint
            method="POST"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            <textarea
              className="rounded-xl border border-slate-300 px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
              name="message"
              placeholder="How can we help?"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800"
            >
              Send Message
            </button>
            <p className="text-xs text-slate-500 mt-2">We’ll never share your email.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <svg aria-hidden="true" viewBox="0 0 64 64" className="h-6 w-6 fill-green-700">
              <path d="M24 6h16v4h-2v12.6l11.2 18.5A10 10 0 0 1 39.6 56H24.4A10 10 0 0 1 14.8 41.1L26 22.6V10h-2z"/>
              <path d="M39 10c5.5 0 9 3.8 10 8-3.7.3-7.2-1.6-9.1-4.8-.9 2.3-2.3 4-4.9 4-1.1-4.6 1.9-7.2 4-7.2z"/>
            </svg>
            <span className="font-medium">BioCatalyst</span>
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} BioCatalyst. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
