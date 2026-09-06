import { ArrowRight, BadgeCheck, BookOpen, ChevronRight, Compass, GraduationCap, Menu, ShieldCheck } from 'lucide-react';

const stages = [
  { label: 'Class 10', detail: 'Build the right academic and fitness foundation' },
  { label: 'Class 12', detail: 'Explore NDA, technical and Agniveer entries' },
  { label: 'College', detail: 'Plan degree-linked and NCC pathways' },
  { label: 'Graduate', detail: 'Compare CDS, AFCAT and direct entries' },
];

const services = [
  { name: 'Indian Army', copy: 'Officer, technical and Agniveer pathways across arms and services.', code: '01' },
  { name: 'Indian Navy', copy: 'Sea-going, aviation, technical and specialist careers.', code: '02' },
  { name: 'Indian Air Force', copy: 'Flying, ground duty, technical and Agniveervayu routes.', code: '03' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1e7] text-[#0b1f33]">
      <div className="border-b border-white/10 bg-[#071a2d] px-5 py-2 text-center text-[11px] font-medium tracking-[0.14em] text-[#d9c59a] uppercase">
        Independent career guidance · Always verify current official notifications
      </div>
      <header className="relative z-20 border-b border-[#18344d] bg-[#0b2238] text-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="March Ahead Academy home">
            <span className="grid h-11 w-11 place-items-center border border-[#c8a96b] text-[#d9c59a]"><Compass size={23} strokeWidth={1.5} /></span>
            <span><span className="block font-heading text-lg leading-none tracking-[0.08em] uppercase">March Ahead</span><span className="mt-1 block text-[10px] tracking-[0.3em] text-[#d9c59a] uppercase">Academy</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-200 lg:flex" aria-label="Primary navigation">
            <a href="#pathways" className="transition hover:text-[#d9c59a]">Career paths</a><a href="#services" className="transition hover:text-[#d9c59a]">Forces</a><a href="#entries" className="transition hover:text-[#d9c59a]">Exams & entries</a><a href="#entries" className="transition hover:text-[#d9c59a]">Eligibility</a><a href="#about" className="transition hover:text-[#d9c59a]">About</a>
          </nav>
          <a href="#pathways" className="hidden items-center gap-2 bg-[#c5a76a] px-5 py-3 text-xs font-bold tracking-wide text-[#071a2d] uppercase transition hover:bg-[#dbc38f] sm:flex">Find my path <ArrowRight size={15} /></a>
          <button className="p-2 lg:hidden" aria-label="Open menu"><Menu /></button>
        </div>
      </header>

      <section className="relative bg-[#0b2238] text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid min-h-[640px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#d9c59a] uppercase"><span className="h-px w-10 bg-[#c5a76a]" /> Careers in India&apos;s Armed Forces</div>
            <h1 className="max-w-3xl font-heading text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">Your clearest path to a career in the Defence Forces.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Understand the right entries, verify your eligibility and prepare for written exams, SSB, interviews and physical standards—with credible guidance at every stage.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#pathways" className="inline-flex items-center justify-center gap-2 bg-[#c5a76a] px-6 py-4 text-sm font-bold text-[#071a2d] transition hover:bg-[#dbc38f]">Find my entry route <ArrowRight size={17} /></a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-4 text-sm font-semibold transition hover:border-[#c5a76a] hover:text-[#d9c59a]">Explore all careers <ChevronRight size={17} /></a>
            </div>
          </div>
          <aside className="border border-white/15 bg-[#102a43]/90 p-7 shadow-2xl shadow-black/20 sm:p-9" aria-label="Guidance principles">
            <div className="mb-8 flex items-start justify-between border-b border-white/10 pb-6"><div><p className="text-xs font-bold tracking-[0.16em] text-[#d9c59a] uppercase">The March Ahead standard</p><h2 className="mt-2 font-heading text-3xl">Clarity before coaching.</h2></div><ShieldCheck className="text-[#d9c59a]" size={31} strokeWidth={1.5} /></div>
            <div className="space-y-6">
              {[
                ['Official-source led', 'Eligibility and dates traced to current notifications.'],
                ['Complete pathway view', 'Officer and other-rank routes across all three services.'],
                ['Independent guidance', 'No affiliation claims. No guaranteed-selection promises.'],
              ].map(([title, copy], index) => <div key={title} className="grid grid-cols-[32px_1fr] gap-4"><span className="font-heading text-xl text-[#d9c59a]">0{index + 1}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-300">{copy}</p></div></div>)}
            </div>
          </aside>
        </div>
      </section>

      <section id="pathways" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="section-kicker">Start where you are</p><h2 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl">Which path is open to you?</h2><p className="mt-5 max-w-md leading-7 text-[#566575]">Choose your current education stage. We&apos;ll help you identify the entries worth investigating—and the details you must verify.</p></div>
          <div className="grid gap-px overflow-hidden border border-[#d6cbb7] bg-[#d6cbb7] sm:grid-cols-2">
            {stages.map((stage, index) => <a key={stage.label} href="#entries" className="group bg-[#fbf8f1] p-7 transition hover:bg-white sm:p-8"><div className="flex items-center justify-between"><span className="text-xs font-bold tracking-widest text-[#8b7447] uppercase">Stage 0{index + 1}</span><ArrowRight size={18} className="transition group-hover:translate-x-1" /></div><h3 className="mt-8 font-heading text-2xl">{stage.label}</h3><p className="mt-2 text-sm leading-6 text-[#65717d]">{stage.detail}</p></a>)}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#e9e1d2] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="section-kicker">Explore the services</p><h2 className="mt-4 font-heading text-4xl sm:text-5xl">Three forces. Many ways to serve.</h2></div><p className="max-w-md text-sm leading-6 text-[#5f6973]">Clear distinctions, realistic career context and direct links to the official recruitment authorities.</p></div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">{services.map((service) => <article key={service.name} className="group relative min-h-72 overflow-hidden bg-[#0d2942] p-8 text-white"><span className="absolute right-6 top-4 font-heading text-7xl text-white/[.045]">{service.code}</span><div className="flex h-full flex-col justify-between"><BadgeCheck className="text-[#d6ba7e]" size={30} strokeWidth={1.4} /><div><h3 className="font-heading text-3xl">{service.name}</h3><p className="mt-3 leading-6 text-slate-300">{service.copy}</p><a href="#entries" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#d6ba7e]">Explore pathways <ArrowRight size={16} className="transition group-hover:translate-x-1" /></a></div></div></article>)}</div>
      </div></section>

      <section id="entries" className="mx-auto grid max-w-7xl gap-6 px-5 py-20 lg:grid-cols-3 lg:px-8 lg:py-24">
        {[[GraduationCap, 'Exams & entries', 'NDA, CDS, AFCAT, technical, NCC and notified direct entries.'], [ShieldCheck, 'Eligibility', 'Education, date-of-birth windows, medical and physical standards.'], [BookOpen, 'Selection & SSB', 'Understand every stage from application to final merit and training.']].map(([Icon, title, copy]) => { const FeatureIcon = Icon as typeof GraduationCap; return <article key={title as string} className="border-t-2 border-[#b49356] bg-white p-8 shadow-sm"><FeatureIcon className="text-[#9d7f49]" /><h3 className="mt-8 font-heading text-2xl">{title as string}</h3><p className="mt-3 leading-7 text-[#64717c]">{copy as string}</p><a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Open guidance <ArrowRight size={15} /></a></article>; })}
      </section>

      <footer id="about" className="border-t border-[#1c3851] bg-[#071a2d] px-5 py-9 text-slate-300 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row"><p>© {new Date().getFullYear()} March Ahead Academy</p><p>Independent guidance. Not affiliated with the Ministry of Defence or the Armed Forces.</p></div></footer>
    </main>
  );
}
