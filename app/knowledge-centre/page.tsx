import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  BookOpen,
  GraduationCap,
  Compass,
  Mountain,
  Anchor,
  Wind,
  ClipboardCheck,
  Route,
} from 'lucide-react';
import {
  SiteHeader,
  SiteFooter,
  Breadcrumbs,
} from '@/components/authority-shell';

const title = 'SSB & Defence Career Knowledge Centre | March Ahead Academy';
const description =
  'Explore SSB psychology, interview preparation, NDA, CDS, AFCAT, service careers and eligibility. Find practical guides and free preparation worksheets.';
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/knowledge-centre/' },
  openGraph: {
    title,
    description,
    url: '/knowledge-centre/',
    type: 'website',
    images: ['/og-tri-service.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-tri-service.png'],
  },
};

const categories = [
  {
    id: 'from-academy',
    name: 'From the Academy',
    icon: Compass,
    description:
      'Practical advice for your first attempt, preparing again and supporting an NDA aspirant.',
    links: [
      ['Your first SSB attempt', '/guidance/first-ssb-attempt/'],
      ['Preparing again after SSB', '/guidance/ssb-repeaters/'],
      [
        'A parent’s guide to NDA preparation',
        '/guidance/parents-nda-aspirants/',
      ],
    ],
  },
  {
    id: 'ssb',
    name: 'SSB',
    icon: BookOpen,
    description:
      'Understand the selection journey before practising individual tasks. Start with the overview, then explore screening, group participation and the personal interview.',
    links: [
      ['SSB stages and selection', '/selection/ssb/'],
      ['Stage I: OIR and PP&DT', '/selection/ssb/stage-1/'],
      ['Group testing', '/selection/ssb/group-testing/'],
      ['Group discussion', '/selection/ssb/group-discussion/'],
      ['Personal interview', '/selection/ssb/personal-interview/'],
    ],
  },
  {
    id: 'psychology',
    name: 'Psychology',
    icon: Brain,
    description:
      'Build self-awareness, clear expression and a sustainable practice routine. Understand the different psychological-test settings without trying to memorise an ideal personality.',
    links: [
      ['SSB Psychology hub', '/ssb-psychology/'],
      [
        'What does an SSB psychologist assess?',
        '/ssb-psychology/what-does-an-ssb-psychologist-assess/',
      ],
      [
        'Psychology preparation for repeaters',
        '/ssb-psychology/psychology-preparation-for-repeaters/',
      ],
      ['PPDT vs TAT', '/ssb-psychology/ppdt-vs-tat/'],
      [
        'Moving beyond memorised answers',
        '/ssb-psychology/memorised-ssb-psychology-answers/',
      ],
      ['Psychology preparation routine', '/selection/ssb/psychology-tests/'],
      ['Thematic Apperception Test (TAT)', '/selection/ssb/tat/'],
      ['Word Association Test (WAT)', '/selection/ssb/wat/'],
      ['Situation Reaction Test (SRT)', '/selection/ssb/srt/'],
      ['Self Description', '/selection/ssb/self-description/'],
    ],
  },
  {
    id: 'defence-exams',
    name: 'Defence Exams',
    icon: GraduationCap,
    description:
      'Compare the major written-examination pathways and read the guide for your intended entry. Connect examination preparation with the selection stages that follow.',
    links: [
      ['Compare exams and entries', '/exams/'],
      ['NDA & NA', '/exams/nda/'],
      ['CDS', '/exams/cds/'],
      ['AFCAT', '/exams/afcat/'],
    ],
  },
  {
    id: 'career-guidance',
    name: 'Career Guidance',
    icon: Compass,
    description:
      'Start from your education and interests. Explore routes after school or graduation, and consider the responsibilities behind the career before choosing a preparation plan.',
    links: [
      ['Find your career pathway', '/career-paths/'],
      ['Build foundations', '/career-paths/foundation/'],
      ['After Class 12', '/career-paths/after-12th/'],
      ['After graduation', '/career-paths/after-graduation/'],
    ],
  },
  {
    id: 'army',
    name: 'Army',
    icon: Mountain,
    description:
      'Explore Indian Army career pathways, including officer and other-rank routes. Use the service overview to understand where your education and interests fit.',
    links: [
      ['Indian Army career guide', '/services/army/'],
      ['Army NCC Special Entry', '/career-paths/ncc-special-entry/'],
      ['Army TES after Class 12', '/career-paths/tes/'],
      ['Graduate entry pathways', '/career-paths/after-graduation/'],
    ],
  },
  {
    id: 'navy',
    name: 'Navy',
    icon: Anchor,
    description:
      'Learn about Indian Navy career options across sea-going, technical and specialist work. Connect the service overview with your education stage and selection preparation.',
    links: [
      ['Indian Navy career guide', '/services/navy/'],
      ['Routes after Class 12', '/career-paths/after-12th/'],
    ],
  },
  {
    id: 'air-force',
    name: 'Air Force',
    icon: Wind,
    description:
      'Explore Indian Air Force pathways and the AFCAT route. Read the selection overview to understand how AFSB fits into the wider application journey.',
    links: [
      ['Indian Air Force career guide', '/services/air-force/'],
      ['AFCAT preparation and pathway', '/exams/afcat/'],
      ['SSB and AFSB selection overview', '/selection/ssb/'],
    ],
  },
  {
    id: 'eligibility',
    name: 'Eligibility',
    icon: ClipboardCheck,
    description:
      'Work through education, date-of-birth windows and entry-specific requirements. Check the current notification for your chosen entry before making application decisions.',
    links: [
      ['Understand eligibility checks', '/eligibility/'],
      ['Official notification links', '/notifications/'],
    ],
  },
  {
    id: 'preparation',
    name: 'Preparation',
    icon: Route,
    description:
      'Turn reading into regular practice. Develop communication, planning and responsibility alongside examination work, using free worksheets to structure your next session.',
    links: [
      ['Preparation planning', '/preparation/prepare/'],
      ['Communication', '/preparation/communicate/'],
      ['Leadership and responsibility', '/preparation/lead/'],
      ['Training habits', '/preparation/train/'],
      ['Free worksheets and PDFs', '/resources/'],
    ],
  },
];

export default function KnowledgeCentrePage() {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <Breadcrumbs current="Knowledge Centre" tone="light" />
        <p className="section-kicker mt-8">Learn with purpose</p>
        <h1 className="mt-4 font-heading text-4xl sm:text-5xl">
          SSB &amp; Defence Career Knowledge Centre
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#536371]">
          Find your starting point, understand the selection process and build a
          thoughtful preparation routine. Explore expert guidance on SSB
          preparation, SSB psychology, NDA, CDS, AFCAT, defence career pathways,
          eligibility and careers in the Indian Army, Navy and Air Force. Browse
          practical guides by subject, or use the free worksheets to put your
          learning into action.
        </p>
        <nav
          aria-label="Knowledge Centre topics"
          className="mt-7 flex flex-wrap gap-3"
        >
          {categories.map(({ id, name, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="inline-flex min-h-11 items-center gap-2 border border-[#d8e1dd] px-4 py-2 text-sm font-semibold text-[#2f6f94] transition hover:border-[#397fa8] hover:bg-[#f1f7fa] focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <Icon size={17} aria-hidden="true" />
              {name}
            </a>
          ))}
        </nav>
        <aside
          className="mt-9 border-y border-[#d8e1dd] py-7"
          aria-labelledby="psychology-feature"
        >
          <p className="section-kicker">Featured subject</p>
          <h2
            id="psychology-feature"
            className="mt-3 flex items-center gap-3 font-heading text-3xl"
          >
            <Brain className="shrink-0 text-[#397fa8]" aria-hidden="true" />
            SSB psychology: understand, practise and reflect
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-[#536371]">
            Start with our psychology hub for preparation routines,
            self-reflection and guidance for repeat candidates. Then explore
            TAT, WAT, SRT and Self Description individually. March Ahead
            Academy’s approach is informed by Commander Sharma’s first-hand SSB
            psychology experience.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-7 gap-y-4">
            <Link
              className="text-link inline-flex items-center gap-2"
              href="/ssb-psychology/"
            >
              Explore SSB Psychology
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              className="text-link"
              href="/authors/cdr-sulakshan-kumar-sharma/"
            >
              Meet Commander Sulakshan Kumar Sharma (Retd.)
            </Link>
          </div>
        </aside>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(
            ({ id, name, icon: Icon, description: copy, links }) => (
              <section
                key={id}
                id={id}
                className="scroll-mt-28 border-t-2 border-[#397fa8] py-5"
                aria-labelledby={`${id}-heading`}
              >
                <h2
                  id={`${id}-heading`}
                  className="flex items-center gap-3 font-heading text-2xl"
                >
                  <Icon
                    size={25}
                    className="shrink-0 text-[#397fa8]"
                    aria-hidden="true"
                  />
                  {name}
                </h2>
                <p className="mt-4 leading-7 text-[#536371]">{copy}</p>
                <ul className="mt-4 space-y-1">
                  {links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-link inline-flex min-h-11 items-center gap-2 py-2"
                      >
                        {label}
                        <ArrowRight
                          size={15}
                          className="shrink-0"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ),
          )}
        </div>
        <section
          className="mt-7 border-t border-[#d8e1dd] pt-7"
          aria-labelledby="use-library"
        >
          <h2 id="use-library" className="font-heading text-3xl">
            Make the library work for you.
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-[#536371]">
            Choose one question, read the relevant guide and try an exercise
            before moving on. Our{' '}
            <Link href="/resources/" className="text-link">
              preparation worksheets
            </Link>{' '}
            provide downloadable PDFs and print-friendly guidance. For how we
            use sources and distinguish guidance from official requirements,
            read our{' '}
            <Link href="/editorial-standards/" className="text-link">
              editorial standards
            </Link>
            .
          </p>
          <p className="mt-4 max-w-4xl leading-7 text-[#536371]">
            Need help applying this to your own preparation? Explore{' '}
            <Link href="/one-on-one-coaching/" className="text-link">
              one-on-one coaching
            </Link>{' '}
            or{' '}
            <Link href="/consultation/" className="text-link">
              book a consultation
            </Link>
            .
          </p>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
