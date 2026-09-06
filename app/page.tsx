import { ArrowRight, BadgeCheck, BookOpen, ChevronRight, Compass, GraduationCap, Menu, ShieldCheck } from 'lucide-react';

const stages = [
  { label: 'Class 10', detail: 'Build the right academic and fitness foundation' },
  { label: 'Class 12', detail: 'Explore NDA, technical and Agniveer entries' },
  { label: 'College', detail: 'Plan degree-linked and NCC pathways' },
  { label: 'Graduate', detail: 'Compare CDS, AFCAT and direct entries' },
];

const services = [
  { name: 'Indian Army', copy: 'Officer, technical and Agniveer pathways across arms and services.', code: '01', color: '#4b6228', accent: '#c7d6a8' },
  { name: 'Indian Navy', copy: 'Sea-going, aviation, technical and specialist careers.', code: '02', color: '#071f3d', accent: '#b9d5e7' },
  { name: 'Indian Air Force', copy: 'Flying, ground duty, technical and Agniveervayu routes.', code: '03', color: '#397fa8', accent: '#d9f0fb' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f5f2] text-[#0a1e33]">
      <div className="relative border-b border-white/10 bg-[#061a30] px-5 py-2 text-center text-[11px] font-medium tracking-[0.14em] text-[#d9e8f2] uppercase">
        <span className="absolute inset-x-0 top-0 grid h-1 grid-cols-3"><span className="bg-[#4b6228]" /><span className="bg-white" /><span className="bg-[#5aa6cf]" /></span>
        Independent career guidance · Always verify current official notifications
      </div>
      <header className="relative z-20 border-b border-[#214665] bg-[#071f3d] text-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="March Ahead Academy home">
            <span className="grid h-11 w-11 place-items-center border border-[#8bc4e0] text-[#9bd1ea]"><Compass size={23} strokeWidth={1.5} /></span>
            <span><span className="block font-heading text-lg leading-none tracking-[0.08em] uppercase">March Ahead</span><span className="mt-1 block text-[10px] tracking-[0.3em] text-[#9bd1ea] uppercase">Academy</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-200 lg:flex" aria-label="Primary navigation">
            <a href="#pathways" className="transition hover:text-[#9bd1ea]">Career paths</a><a href="#services" className="transition hover:text-[#9bd1ea]">Forces</a><a href="#entries" className="transition hover:text-[#9bd1ea]">Exams & entries</a><a href="#entries" className="transition hover:text-[#9bd1ea]">Eligibility</a><a href="#about" className="transition hover:text-[#9bd1ea]">About</a>
          </nav>
          <a href="#pathways" className="hidden items-center gap-2 bg-[#77b9da] px-5 py-3 text-xs font-bold tracking-wide text-[#071f3d] uppercase transition hover:bg-[#a6d7ed] sm:flex">Find my path <ArrowRight size={15} /></a>
          <button className="p-2 lg:hidden" aria-label="Open menu"><Menu /></button>
        </div>
      </header>

      <section className="relative bg-[#071f3d] text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid min-h-[640px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#9bd1ea] uppercase"><span className="h-px w-10 bg-[#6fae3f]" /> Careers in India&apos;s Armed Forces</div>
            <h1 className="max-w-3xl font-heading text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">Your clearest path to a career in the Defence Forces.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Understand the right entries, verify your eligibility and prepare for written exams, SSB, interviews and physical standards—with credible guidance at every stage.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#pathways" className="inline-flex items-center justify-center gap-2 bg-[#77b9da] px-6 py-4 text-sm font-bold text-[#071f3d] transition hover:bg-[#a6d7ed]">Find my entry route <ArrowRight size={17} /></a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-4 text-sm font-semibold transition hover:border-[#8fc05f] hover:text-[#b9d68f]">Explore all careers <ChevronRight size={17} /></a>
            </div>
          </div>
          <aside className="border border-white/15 bg-[#103353]/90 p-7 shadow-2xl shadow-black/20 sm:p-9" aria-label="Guidance principles">
            <div className="mb-8 flex items-start justify-between border-b border-white/10 pb-6"><div><p className="text-xs font-bold tracking-[0.16em] text-[#9bd1ea] uppercase">The March Ahead standard</p><h2 className="mt-2 font-heading text-3xl">Clarity before coaching.</h2></div><ShieldCheck className="text-[#91bd63]" size={31} strokeWidth={1.5} /></div>
            <div className="space-y-6">
              {[
                ['Official-source led', 'Eligibility and dates traced to current notifications.'],
                ['Complete pathway view', 'Officer and other-rank routes across all three services.'],
                ['Independent guidance', 'No affiliation claims. No guaranteed-selection promises.'],
              ].map(([title, copy], index) => <div key={title} className="grid grid-cols-[32px_1fr] gap-4"><span className="font-heading text-xl text-[#9bd1ea]">0{index + 1}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-300">{copy}</p></div></div>)}
            </div>
          </aside>
        </div>
      </section>

      <section id="pathways" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="section-kicker">Start where you are</p><h2 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl">Which path is open to you?</h2><p className="mt-5 max-w-md leading-7 text-[#566575]">Choose your current education stage. We&apos;ll help you identify the entries worth investigating—and the details you must verify.</p></div>
          <div className="grid gap-px overflow-hidden border border-[#cbd3ce] bg-[#cbd3ce] sm:grid-cols-2">
            {stages.map((stage, index) => <a key={stage.label} href="#entries" className="group bg-[#f8faf8] p-7 transition hover:bg-white sm:p-8"><div className="flex items-center justify-between"><span className="text-xs font-bold tracking-widest text-[#4b6228] uppercase">Stage 0{index + 1}</span><ArrowRight size={18} className="text-[#397fa8] transition group-hover:translate-x-1" /></div><h3 className="mt-8 font-heading text-2xl">{stage.label}</h3><p className="mt-2 text-sm leading-6 text-[#65717d]">{stage.detail}</p></a>)}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#e4e9e5] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="section-kicker">Explore the services</p><h2 className="mt-4 font-heading text-4xl sm:text-5xl">Three forces. Many ways to serve.</h2></div><p className="max-w-md text-sm leading-6 text-[#5f6973]">Clear distinctions, realistic career context and direct links to the official recruitment authorities.</p></div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">{services.map((service) => <article key={service.name} className="group relative min-h-72 overflow-hidden p-8 text-white" style={{ backgroundColor: service.color }}><span className="absolute right-6 top-4 font-heading text-7xl text-white/[.07]">{service.code}</span><div className="flex h-full flex-col justify-between"><BadgeCheck style={{ color: service.accent }} size={30} strokeWidth={1.4} /><div><h3 className="font-heading text-3xl">{service.name}</h3><p className="mt-3 leading-6 text-white/75">{service.copy}</p><a href="#entries" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: service.accent }}>Explore pathways <ArrowRight size={16} className="transition group-hover:translate-x-1" /></a></div></div></article>)}</div>
      </div></section>

      <section id="entries" className="mx-auto grid max-w-7xl gap-6 px-5 py-20 lg:grid-cols-3 lg:px-8 lg:py-24">
        {[[GraduationCap, 'Exams & entries', 'NDA, CDS, AFCAT, technical, NCC and notified direct entries.'], [ShieldCheck, 'Eligibility', 'Education, date-of-birth windows, medical and physical standards.'], [BookOpen, 'Selection & SSB', 'Understand every stage from application to final merit and training.']].map(([Icon, title, copy], index) => { const FeatureIcon = Icon as typeof GraduationCap; const accents = ['#4b6228', '#071f3d', '#397fa8']; return <article key={title as string} className="border-t-4 bg-white p-8 shadow-sm" style={{ borderTopColor: accents[index] }}><FeatureIcon style={{ color: accents[index] }} /><h3 className="mt-8 font-heading text-2xl">{title as string}</h3><p className="mt-3 leading-7 text-[#64717c]">{copy as string}</p><a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Open guidance <ArrowRight size={15} /></a></article>; })}
      </section>

      <footer id="about" className="border-t-4 border-[#4b6228] bg-[#061a30] px-5 py-9 text-slate-300 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row"><p>© {new Date().getFullYear()} March Ahead Academy</p><p>Independent guidance. Not affiliated with the Ministry of Defence or the Armed Forces.</p></div></footer>
    </main>
  );
}
