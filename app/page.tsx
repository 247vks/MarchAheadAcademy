import {
  Anchor,
  ArrowRight,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Menu,
  Mountain,
  Route,
  ShieldCheck,
  UserCheck,
  Wind,
} from 'lucide-react';
import { ContactBand } from '@/components/contact-band';

const stages = [
  {
    label: 'Class 10',
    detail: 'Build the right academic and fitness foundation',
    icon: BookOpen,
  },
  {
    label: 'Class 12',
    detail: 'Explore NDA, technical and Agniveer entries',
    icon: Route,
  },
  {
    label: 'College',
    detail: 'Plan degree-linked and NCC pathways',
    icon: GraduationCap,
  },
  {
    label: 'Graduate',
    detail: 'Compare CDS, AFCAT and direct entries',
    icon: UserCheck,
  },
];

const services = [
  {
    name: 'Indian Army',
    copy: 'Officer, technical and Agniveer pathways across arms and services.',
    code: '01',
    color: '#4b6228',
    accent: '#f8fafb',
    href: '/services/army',
    icon: Mountain,
  },
  {
    name: 'Indian Navy',
    copy: 'Sea-going, aviation, technical and specialist careers.',
    code: '02',
    color: '#071f3d',
    accent: '#f8fafb',
    href: '/services/navy',
    icon: Anchor,
  },
  {
    name: 'Indian Air Force',
    copy: 'Flying, ground duty, technical and Agniveervayu routes.',
    code: '03',
    color: '#397fa8',
    accent: '#f8fafb',
    href: '/services/air-force',
    icon: Wind,
  },
];

const gallery = [
  {
    title: 'Learn',
    copy: 'Understand the route before choosing preparation.',
    image: '/gallery/learn.png',
    position: 'center',
  },
  {
    title: 'Lead',
    copy: 'Practise clear thinking, initiative and responsibility.',
    image: '/gallery/lead.png',
    position: 'center',
  },
  {
    title: 'Prepare',
    copy: 'Build a sustainable academic and fitness plan.',
    image: '/gallery/prepare.png',
    position: 'center',
  },
  {
    title: 'Communicate',
    copy: 'Listen carefully and express ideas with clarity.',
    image: '/gallery/communicate.png',
    position: 'center',
  },
  {
    title: 'Train',
    copy: 'Develop consistency, resilience and teamwork.',
    image: '/gallery/train.png',
    position: 'center',
  },
  {
    title: 'Serve',
    copy: 'Put responsibility and contribution before self.',
    image: '/gallery/serve.png',
    position: 'center',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#0a1e33]">
      <div className="border-b border-white/10 bg-[#061a30] px-5 py-2 text-center text-[11px] font-medium tracking-[0.12em] text-[#d9e8f2] uppercase">
        Independent guidance · Official notification always controls
      </div>
      <header className="relative z-20 border-b border-[#d6ddda] bg-white text-[#071f3d]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a
            href="#"
            className="border-l-2 border-[#397fa8] pl-3"
            aria-label="March Ahead Academy home"
          >
            <span className="block font-heading text-lg leading-none tracking-[0.08em] uppercase">
              March Ahead
            </span>
            <span className="mt-1 block text-[10px] tracking-[0.3em] text-[#397fa8] uppercase">
              Academy
            </span>
          </a>
          <nav
            className="hidden items-center gap-7 text-sm text-[#33485b] lg:flex"
            aria-label="Primary navigation"
          >
            <a href="/career-paths" className="transition hover:text-[#2f6f94]">
              Career paths
            </a>
            <a href="#services" className="transition hover:text-[#2f6f94]">
              Forces
            </a>
            <a href="/exams/nda" className="transition hover:text-[#2f6f94]">
              Exams & entries
            </a>
            <a href="/eligibility" className="transition hover:text-[#2f6f94]">
              Eligibility
            </a>
            <a
              href="/notifications"
              className="transition hover:text-[#2f6f94]"
            >
              Notifications
            </a>
          </nav>
          <div className="hidden items-center gap-5 sm:flex">
            <a
              href="/career-paths"
              className="inline-flex items-center gap-2 bg-[#77b9da] px-5 py-3 text-xs font-bold tracking-wide text-[#071f3d] uppercase transition hover:bg-[#a6d7ed]"
            >
              Find my path <ArrowRight size={15} />
            </a>
          </div>
          <button className="p-2 lg:hidden" aria-label="Open menu">
            <Menu />
          </button>
        </div>
        <div className="tri-service-rule" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </header>

      <section className="command-blue relative text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid min-h-[640px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#9bd1ea] uppercase">
              <span className="h-px w-10 bg-[#6fae3f]" /> Careers in
              India&apos;s Armed Forces
            </div>
            <h1 className="max-w-3xl font-heading text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Your clearest path to a career in the Defence Forces.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Understand the right entries, verify your eligibility and prepare
              for written exams, SSB, interviews and physical standards—with
              credible guidance at every stage.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/career-paths"
                className="inline-flex items-center justify-center gap-2 bg-[#77b9da] px-6 py-4 text-sm font-bold text-[#071f3d] transition hover:bg-[#a6d7ed]"
              >
                Find my entry route <ArrowRight size={17} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-4 text-sm font-semibold transition hover:border-[#8fc05f] hover:text-[#b9d68f]"
              >
                Explore all careers <ChevronRight size={17} />
              </a>
            </div>
          </div>
          <aside
            className="border border-white/15 bg-[#103353]/90 p-7 shadow-2xl shadow-black/20 sm:p-9"
            aria-label="Guidance principles"
          >
            <div className="mb-8 flex items-start justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] text-[#9bd1ea] uppercase">
                  The March Ahead standard
                </p>
                <h2 className="mt-2 font-heading text-3xl">
                  Clarity before coaching.
                </h2>
              </div>
              <ShieldCheck
                className="text-[#91bd63]"
                size={31}
                strokeWidth={1.5}
              />
            </div>
            <div className="space-y-6">
              {[
                [
                  'Official-source led',
                  'Eligibility and dates traced to current notifications.',
                ],
                [
                  'Complete pathway view',
                  'Officer and other-rank routes across all three services.',
                ],
                [
                  'Independent guidance',
                  'No affiliation claims. No guaranteed-selection promises.',
                ],
              ].map(([title, copy], index) => (
                <div key={title} className="grid grid-cols-[32px_1fr] gap-4">
                  <span className="font-heading text-xl text-[#9bd1ea]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section
        className="border-b border-[#dce3df] bg-[#f8faf9] px-5 py-10 lg:px-8"
        aria-labelledby="experience-heading"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_1.9fr] lg:items-center">
          <div>
            <p className="section-kicker">Experience behind the guidance</p>
            <h2
              id="experience-heading"
              className="mt-3 font-heading text-3xl leading-tight"
            >
              Perspective earned through service and selection.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#65717d]">
              Guidance shaped by Cdr Sharma&apos;s experience across military
              service, teaching, recruitment and SSB psychology.
            </p>
          </div>
          <dl className="grid gap-px overflow-hidden border border-[#d4ddd8] bg-[#d4ddd8] sm:grid-cols-2 xl:grid-cols-4">
            {[
              [ShieldCheck, '32 years', 'Military service'],
              [BookOpen, '57 years', 'Teaching experience'],
              [Route, '4.5 years', 'Independent Army & Navy recruitment'],
              [UserCheck, '3 years', 'SSB psychologist experience'],
            ].map(([Icon, value, label]) => {
              const ProofIcon = Icon as typeof ShieldCheck;
              return (
                <div key={label as string} className="bg-white p-5">
                  <ProofIcon
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#397fa8]"
                    aria-hidden="true"
                  />
                  <dt className="mt-4 font-heading text-2xl text-[#071f3d]">
                    {value as string}
                  </dt>
                  <dd className="mt-1 text-xs font-bold leading-5 tracking-[.08em] text-[#566675] uppercase">
                    {label as string}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section
        id="pathways"
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="section-kicker">Start where you are</p>
            <h2 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl">
              Which path is open to you?
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[#566575]">
              Choose your current education stage. We&apos;ll help you identify
              the entries worth investigating—and the details you must verify.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-[#cbd3ce] bg-[#cbd3ce] sm:grid-cols-2">
            {stages.map((stage, index) => {
              const StageIcon = stage.icon;
              return (
                <a
                  key={stage.label}
                  href={
                    index < 2
                      ? '/career-paths/after-12th'
                      : '/career-paths/after-graduation'
                  }
                  className="group bg-white p-7 transition hover:bg-[#f8faf9] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center border border-[#b8c7ba] text-[#4b6228]">
                      <StageIcon
                        size={20}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-[#397fa8] transition group-hover:translate-x-1"
                    />
                  </div>
                  <span className="mt-7 block text-xs font-bold tracking-widest text-[#4b6228] uppercase">
                    Stage 0{index + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-2xl">{stage.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#65717d]">
                    {stage.detail}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-y border-[#e1e6e3] bg-white px-5 py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">Explore the services</p>
              <h2 className="mt-4 font-heading text-4xl sm:text-5xl">
                Three forces. Many ways to serve.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5f6973]">
              Clear distinctions, realistic career context and direct links to
              the official recruitment authorities.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <article
                  key={service.name}
                  className="group relative min-h-72 overflow-hidden p-8 text-white"
                  style={{ backgroundColor: service.color }}
                >
                  <span className="absolute right-6 top-4 font-heading text-7xl text-white/[.07]">
                    {service.code}
                  </span>
                  <div className="flex h-full flex-col justify-between">
                    <span className="grid h-14 w-14 place-items-center border border-white/30 bg-white/5">
                      <ServiceIcon
                        style={{ color: service.accent }}
                        size={29}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <h3 className="font-heading text-3xl">{service.name}</h3>
                      <p className="mt-3 leading-6 text-[#f8fafb]">
                        {service.copy}
                      </p>
                      <a
                        href={service.href}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                        style={{ color: service.accent }}
                      >
                        Explore pathways{' '}
                        <ArrowRight
                          size={16}
                          className="transition group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="bg-[#4b6228] px-5 py-12 text-white lg:px-8"
        aria-label="Current authority foundation"
      >
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden border border-white/20 bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [ShieldCheck, '3', 'Service career hubs'],
            [BookOpen, '12', 'Foundation guides'],
            [Route, '5', 'Official source channels'],
            [UserCheck, '0', 'Unverified live dates published'],
          ].map(([Icon, value, label]) => {
            const EvidenceIcon = Icon as typeof ShieldCheck;
            return (
              <div key={label as string} className="bg-[#4b6228] p-6 sm:p-7">
                <EvidenceIcon
                  size={25}
                  strokeWidth={1.5}
                  className="text-[#d9e8f2]"
                  aria-hidden="true"
                />
                <p className="mt-5 font-heading text-4xl">{value as string}</p>
                <p className="mt-1 text-xs font-bold tracking-[.12em] text-white/80 uppercase">
                  {label as string}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div
          className="relative mx-auto min-h-[390px] max-w-7xl overflow-hidden bg-[#071f3d] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(7,31,61,.97) 0%, rgba(7,31,61,.86) 38%, rgba(7,31,61,.16) 72%), url('/aspirant-guidance-banner.png')",
          }}
        >
          <div className="relative flex min-h-[390px] max-w-2xl flex-col justify-center px-7 py-12 text-white sm:px-12 lg:px-16">
            <p className="text-xs font-bold tracking-[.18em] text-[#9bd1ea] uppercase">
              Career decisions start with clarity
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl">
              Not sure which entry fits your stage?
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-200">
              Use our pathway guides to compare routes before investing time in
              preparation. We show what to investigate—and what the current
              official notification must confirm.
            </p>
            <a
              href="/career-paths"
              className="mt-7 inline-flex w-fit items-center gap-2 bg-white px-5 py-3 text-sm font-bold text-[#071f3d]"
            >
              Find my path <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="entries"
        className="mx-auto grid max-w-7xl gap-6 px-5 py-20 lg:grid-cols-3 lg:px-8 lg:py-24"
      >
        {[
          [
            GraduationCap,
            'Exams & entries',
            'NDA, CDS, AFCAT, technical, NCC and notified direct entries.',
            '/exams/nda',
          ],
          [
            ShieldCheck,
            'Eligibility',
            'Education, date-of-birth windows, medical and physical standards.',
            '/eligibility',
          ],
          [
            BookOpen,
            'Selection & SSB',
            'Understand every stage from application to final merit and training.',
            '/selection/ssb',
          ],
        ].map(([Icon, title, copy, href], index) => {
          const FeatureIcon = Icon as typeof GraduationCap;
          const accents = ['#4b6228', '#071f3d', '#397fa8'];
          return (
            <article
              key={title as string}
              className="border-t-4 bg-white p-8 shadow-sm"
              style={{ borderTopColor: accents[index] }}
            >
              <span
                className="grid h-12 w-12 place-items-center border"
                style={{
                  borderColor: `${accents[index]}55`,
                  color: accents[index],
                }}
              >
                <FeatureIcon aria-hidden="true" />
              </span>
              <h3 className="mt-8 font-heading text-2xl">{title as string}</h3>
              <p className="mt-3 leading-7 text-[#64717c]">{copy as string}</p>
              <a
                href={href as string}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold"
              >
                Open guidance <ArrowRight size={15} />
              </a>
            </article>
          );
        })}
      </section>

      <section
        className="border-t border-[#e1e6e3] bg-white px-5 py-20 lg:px-8 lg:py-24"
        aria-labelledby="preparation-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker">The qualities behind the career</p>
            <h2
              id="preparation-heading"
              className="mt-4 font-heading text-4xl leading-tight sm:text-5xl"
            >
              Preparation is more than an examination.
            </h2>
            <p className="mt-5 leading-7 text-[#5f6d78]">
              A defence career asks candidates to learn, lead, communicate,
              train and serve. Our guidance connects entry information with the
              habits that support responsible preparation.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <figure
                key={item.title}
                className="group relative aspect-square overflow-hidden bg-[#071f3d]"
              >
                <img
                  src={item.image}
                  alt={`Indian defence aspirants: ${item.title.toLowerCase()}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  style={{ objectPosition: item.position }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061a30] via-[#061a30]/85 to-transparent px-6 pb-6 pt-20 text-white">
                  <span className="text-[10px] font-bold tracking-[.16em] text-[#9bd1ea] uppercase">
                    0{index + 1}
                  </span>
                  <h3 className="mt-1 font-heading text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    {item.copy}
                  </p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
      <footer
        id="about"
        className="border-t-4 border-[#4b6228] bg-[#061a30] px-5 py-9 text-slate-300 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm sm:flex-row">
          <div>
            <p>© {new Date().getFullYear()} March Ahead Academy</p>
            <p className="mt-2 max-w-xl text-xs leading-5 text-slate-400">
              Independent guidance. Not affiliated with the Ministry of Defence
              or the Armed Forces.
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Trust and organisation"
          >
            <a href="/about">About</a>
            <a href="/editorial-standards">Editorial standards</a>
            <a href="/notifications">Source tracker</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
