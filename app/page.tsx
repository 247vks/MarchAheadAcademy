import Link from 'next/link';
import Image from 'next/image';
import {
  Anchor,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Mountain,
  Route,
  ShieldCheck,
  UserCheck,
  Wind,
} from 'lucide-react';
import { ContactBand } from '@/components/contact-band';
import { SiteFooter, SiteHeader } from '@/components/authority-shell';

const stages = [
  {
    label: 'Class 10',
    detail: 'Build the right academic and fitness foundation',
    href: '/career-paths',
    icon: BookOpen,
  },
  {
    label: 'Class 12',
    detail: 'Explore NDA, technical and Agniveer entries',
    href: '/career-paths/after-12th',
    icon: Route,
  },
  {
    label: 'College',
    detail: 'Plan degree-linked and NCC pathways',
    href: '/career-paths/after-graduation',
    icon: GraduationCap,
  },
  {
    label: 'Graduate',
    detail: 'Compare CDS, AFCAT and direct entries',
    href: '/career-paths/after-graduation',
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
    href: '/preparation/learn',
  },
  {
    title: 'Lead',
    copy: 'Practise clear thinking, initiative and responsibility.',
    image: '/gallery/lead.png',
    position: 'center',
    href: '/preparation/lead',
  },
  {
    title: 'Prepare',
    copy: 'Build a sustainable academic and fitness plan.',
    image: '/gallery/prepare.png',
    position: 'center',
    href: '/preparation/prepare',
  },
  {
    title: 'Communicate',
    copy: 'Listen carefully and express ideas with clarity.',
    image: '/gallery/communicate.png',
    position: 'center',
    href: '/preparation/communicate',
  },
  {
    title: 'Train',
    copy: 'Develop consistency, resilience and teamwork.',
    image: '/gallery/train.png',
    position: 'center',
    href: '/preparation/train',
  },
  {
    title: 'Serve',
    copy: 'Put responsibility and contribution before self.',
    image: '/gallery/serve.png',
    position: 'center',
    href: '/preparation/serve',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#0a1e33]">
      <SiteHeader />

      <section className="command-blue relative text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 sm:py-12 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-14">
          <div>
            <div className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#9bd1ea] uppercase">
              <span className="h-px w-10 shrink-0 bg-[#6fae3f]" /> Careers in
              India&apos;s Armed Forces
            </div>
            <h1 className="text-balance max-w-3xl font-heading text-4xl leading-[1.06] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              SSB Coaching &amp; Defence Career Guidance, Personalised to You
            </h1>
            <p className="mt-6 max-w-2xl font-heading text-xl leading-relaxed text-white sm:text-2xl">
              Your clearest path to a career in the Defence Forces.
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Personalised one-on-one preparation for NDA, CDS, AFCAT, SSB and
              AFSB aspirants. Tailored to your needs, goals and learning pace.
            </p>
            <div className="mt-6 max-w-2xl">
              <p className="text-base font-semibold leading-7">
                Guidance shaped by 32 years of Indian Navy service and
                first-hand SSB psychology experience.
              </p>
              <Link
                href="/authors/cdr-sulakshan-kumar-sharma/"
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#9bd1ea] underline underline-offset-4 transition hover:text-white"
              >
                Cdr Sulakshan Kumar Sharma (Retd.)
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                Former Senior Service Psychologist, Naval Selection Centre,
                Bangalore.
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 bg-[#77b9da] px-6 py-4 text-sm font-bold text-[#071f3d] transition hover:bg-[#a6d7ed]"
              >
                Book a consultation <ArrowRight size={17} />
              </Link>
              <a
                href="/ssb-coaching/"
                className="inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-4 text-sm font-semibold transition hover:border-[#8fc05f] hover:text-[#b9d68f]"
              >
                Explore SSB coaching <ArrowRight size={17} />
              </a>
            </div>
          </div>
          <aside
            className="hidden border border-white/15 bg-[#103353]/90 p-7 shadow-2xl shadow-black/20 sm:p-9 lg:block"
            aria-label="Guidance principles"
          >
            <div className="mb-8 flex items-start justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] text-[#9bd1ea] uppercase">
                  The March Ahead Academy standard
                </p>
                <h2 className="mt-2 font-heading text-3xl">
                  Your goals. Your pace.
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
                  'One-on-one coaching',
                  'Individual attention, with preparation customised to your needs and learning pace.',
                ],
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
        className="section-spacing border-b border-[#dce3df] bg-[#f8faf9] px-5 lg:px-8"
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
            <Link
              href="/authors/cdr-sulakshan-kumar-sharma"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#2f6f94] underline decoration-[#9bc9df] underline-offset-4"
            >
              Meet Cdr Sulakshan Kumar Sharma (Retd) <ArrowRight size={14} />
            </Link>
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
                <div
                  key={label as string}
                  className="experience-tile bg-white p-5"
                >
                  <dt className="flex items-center gap-3 font-heading text-2xl text-[#071f3d]">
                    <ProofIcon
                      size={23}
                      strokeWidth={1.5}
                      className="shrink-0 text-[#397fa8]"
                      aria-hidden="true"
                    />
                    {value as string}
                  </dt>
                  <dd className="mt-3 text-xs font-bold leading-5 tracking-[.08em] text-[#566675] uppercase">
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
        className="section-spacing mx-auto max-w-7xl px-5 lg:px-8"
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
              const stageAccent = ['#4b6228', '#397fa8', '#071f3d', '#4b6228'][
                index
              ];
              return (
                <a
                  key={stage.label}
                  href={stage.href}
                  className="editorial-card pathway-tile group border-t-4 p-7 sm:p-8"
                  style={{ borderTopColor: stageAccent }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="flex items-center gap-3"
                      style={{
                        color: stageAccent,
                      }}
                    >
                      <StageIcon
                        size={20}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                      <span className="text-xs font-bold tracking-widest uppercase">
                        Stage 0{index + 1}
                      </span>
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-[#397fa8] transition group-hover:translate-x-1"
                    />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl">{stage.label}</h3>
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
        className="section-spacing border-y border-[#e1e6e3] bg-white px-5 lg:px-8"
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
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <article
                  key={service.name}
                  className="group relative min-h-72 overflow-hidden p-8 text-white shadow-[0_12px_32px_rgba(7,31,61,.12)] transition hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(7,31,61,.18)]"
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
        id="entries"
        className="section-spacing mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-3 lg:px-8"
      >
        {[
          [
            GraduationCap,
            'Exams & entries',
            'NDA, CDS, AFCAT, technical, NCC and notified direct entries.',
            '/exams',
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
              className="editorial-card flex h-full flex-col border-t-4 p-6 sm:p-7"
              style={{ borderTopColor: accents[index] }}
            >
              <span
                className="grid h-12 w-12 place-items-center border"
                style={{
                  borderColor: `${accents[index]}55`,
                  backgroundColor: `${accents[index]}12`,
                  color: accents[index],
                }}
              >
                <FeatureIcon aria-hidden="true" />
              </span>
              <h3
                className="mt-8 font-heading text-2xl"
                style={{ color: accents[index] }}
              >
                {title as string}
              </h3>
              <p className="mt-3 leading-7 text-[#64717c]">{copy as string}</p>
              <a
                href={href as string}
                className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-bold"
              >
                Open guidance <ArrowRight size={15} />
              </a>
            </article>
          );
        })}
      </section>

      <section
        className="section-spacing border-t border-[#e1e6e3] bg-white px-5 lg:px-8"
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
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                className="group relative aspect-[4/3] overflow-hidden border border-[#dce3df] bg-[#071f3d] shadow-[0_8px_24px_rgba(7,31,61,.08)] sm:aspect-square"
              >
                <Image
                  src={item.image}
                  alt={`Indian defence aspirants: ${item.title.toLowerCase()}`}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
                <span className="sr-only">
                  Read the {item.title} preparation guide
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-spacing border-t border-[#d8e1dd] bg-white px-5 lg:px-8"
        aria-labelledby="academy-guidance"
      >
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">From the Academy</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2
              id="academy-guidance"
              className="font-heading text-3xl sm:text-4xl"
            >
              Practical guidance for your next step
            </h2>
            <Link className="text-link" href="/knowledge-centre/">
              Explore the Knowledge Centre →
            </Link>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                href: '/guidance/first-ssb-attempt/',
                title: 'First SSB Attempt: What Should You Prepare?',
                copy: 'Start with a clear routine, your own experiences and an understanding of the journey.',
              },
              {
                href: '/guidance/ssb-repeaters/',
                title: 'SSB Repeaters: What Should You Do Differently?',
                copy: 'Reflect on what you can observe and build focused preparation habits for your next attempt.',
              },
              {
                href: '/guidance/parents-nda-aspirants/',
                title: 'How Parents Can Support an NDA Aspirant',
                copy: 'Support steady preparation, informed choices and your child’s growing independence.',
              },
            ].map((item) => (
              <article
                key={item.href}
                className="editorial-card flex flex-col border-t-4 border-t-[#397fa8] p-6"
              >
                <BookOpen
                  size={25}
                  className="text-[#397fa8]"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-heading text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#536371]">
                  {item.copy}
                </p>
                <Link
                  className="text-link mt-auto self-start pt-5"
                  href={item.href}
                >
                  Read the guide →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
