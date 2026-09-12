import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';

const title = 'Army TES Entry: Eligibility, JEE Main, SSB & Preparation';
const description = 'Understand the Indian Army Technical Entry Scheme after Class 12: PCM and JEE Main requirements, shortlisting, SSB, training and practical preparation.';
export const metadata: Metadata = withPageMetadata({
  title,
  description,
  alternates: { canonical: '/career-paths/tes/' },
  openGraph: { title, description, url: '/career-paths/tes/' },
});

export default function Page() {
  return (
    <AuthorityPage
      currentHref="/career-paths/tes/"
      eyebrow="Army officer entry"
      title="Army TES: Technical Entry Scheme after Class 12"
      lede="TES connects a science background with Army officer training. Understand how academic eligibility, JEE Main shortlisting, SSB and final merit fit together before planning your application."
      status="Entry guide"
      publishedAt="2026-09-12"
      modifiedAt="2026-09-12"
      showEntryNotice={false}
      sections={[
        {
          title: 'What is the Army Technical Entry Scheme?',
          body: 'The Army’s 10+2 Technical Entry Scheme is a commissioned-officer pathway, not an Agniveer recruitment route or an ordinary engineering-college admission. The TES-56 notification describes integrated engineering and military training leading to a Permanent Commission on successful completion. It is an Army entry: Navy technical entries have separate applications and conditions.',
          points: [
            'Use TES when researching an Army technical officer pathway after Class 12.',
            'Do not confuse it with graduate engineering routes such as TGC or SSC Tech.',
            'Choose the career and its responsibilities, not simply the absence of a separate Army written paper.',
          ],
        },
        {
          title: 'Which notification is this guide based on?',
          body: 'The course-specific details here come from the official TES-56 PDF, checked on 12 September 2026. Its application window was 13 May–12 June 2026 and has closed. The highlights and age clause refer to January 2027, although repeated page headers say July 2026. For a candidate-specific date question, seek clarification through the Army portal rather than relying on that inconsistent header. This guide does not announce a new intake or an extended application window.',
        },
        {
          title: 'Eligibility: PCM and JEE Main both matter',
          body: 'TES-56 invites unmarried male candidates who have passed Class 12 or its equivalent with at least 60% aggregate in Physics, Chemistry and Mathematics from a recognised board, and who appeared in JEE Main 2026. The JEE requirement is mandatory for this course. A general Class 12 percentage is not the same as the PCM aggregate; the notice requires the exact PCM percentage to two decimal places without rounding it upwards.',
          points: [
            'Check the age clause and date-of-birth window against your matriculation certificate, as well as nationality and other eligibility conditions.',
            'Use the JEE Main year specified for the course you actually apply to; an earlier attempt is not automatically interchangeable.',
            'The application requires the JEE Main application number for B.E./B.Tech courses.',
            'Do not transfer TES-56’s male-only provision to every officer entry: other routes have their own eligibility.',
          ],
        },
        {
          title: 'Meeting the minimum does not guarantee an SSB call',
          body: 'The TES-56 notice allows the Army to shortlist using JEE Main Common Rank List (CRL) and other laid-down parameters. Passing the educational threshold makes an application eligible for consideration; it does not promise an interview. Avoid treating last year’s cutoff, a percentile prediction or a coaching estimate as this course’s shortlisting result. Follow the Army portal and your registered contact details for candidate instructions.',
        },
        {
          title: 'From application to joining: the selection sequence',
          body: 'The notified sequence is application, shortlisting, SSB, medical examination, merit and joining instructions. TES-56 does not prescribe a separate Army written entrance paper, but it does require JEE Main participation. Shortlisted eligible candidates undergo the two-stage SSB process: those who clear Stage I proceed to Stage II. Recommended candidates then undergo medical examination.',
          points: [
            'Academic eligibility and shortlisting determine whether you reach SSB.',
            'SSB recommendation is a selection milestone, not a guaranteed training place.',
            'For TES-56, final merit is based on SSB marks; joining remains subject to medical fitness, eligibility and available vacancies.',
            'Keep medical and joining instructions separate from general preparation advice. A coach cannot certify medical fitness.',
          ],
        },
        {
          title: 'TES and NDA: compare the route, not just the examination',
          body: 'TES and NDA are distinct applications and training pathways. TES-56 centres on a PCM background, JEE Main and Army technical training; NDA offers separately notified academy and service choices through UPSC. Research both if appropriate, but do not assume eligibility for one proves eligibility for the other. The TES-56 notice also specifies how medical examination is handled for candidates pursuing parallel TES and NDA courses. Disclose previous examinations and follow those instructions instead of arranging a second process independently.',
        },
        {
          title: 'Build your document folder before the call-up',
          body: 'Match every entry in your application to the original record. The TES-56 checklist includes the application printout, Class 10 certificate and marksheet, Class 12 certificate and marksheet, identity proof and JEE Main result. Check the notice and call-up letter for copies, photographs and authentication requirements. A saved screenshot is not a substitute for required originals.',
          points: [
            'Check names, date of birth and examination details across documents.',
            'Retain the submitted application and your JEE Main record.',
            'Where an institution issues only electronic certificates, read the notice’s authentication provision rather than assuming a DigiLocker display is sufficient.',
            'Plan travel around the actual call-up instructions, not a tentative interview month.',
          ],
        },
        {
          title: 'Prepare beyond an engineering entrance score',
          body: 'Our preparation approach is to connect knowledge with genuine experience. Practise explaining a scientific concept clearly, reflecting on a project you actually completed and describing how you handled responsibility in a team. You do not need to turn every experience into a heroic story. Be precise about your own contribution, the difficulty you faced and what you learned.',
          points: [
            'Build familiarity with Stage I, psychological tasks, group activities and the personal interview through the SSB guides below.',
            'Reflect on studies, interests, responsibilities and motivation for Army service; do not memorise a borrowed personality.',
            'Use regular, sustainable physical activity and appropriate professional advice when needed rather than last-minute extreme training.',
            'For a repeat attempt, review preparation gaps without inventing an explanation for the board’s decision.',
          ],
        },
        {
          title: 'Understand the training commitment',
          body: 'TES-56 describes four years of integrated training: three years at a Cadets Training Wing and one at the Indian Military Academy, with an engineering degree after successful completion. Successful completion leads to commissioning as a Lieutenant. Training allocation and eventual service decisions are made by the Army; stating a preference does not guarantee a particular wing or role. Read the commitments and withdrawal provisions before accepting a place.',
        },
        {
          title: 'How personalised guidance can help',
          body: 'March Ahead Academy offers one-on-one SSB preparation, including online coaching. We can help you organise your preparation, reflect on your experiences and practise clearer communication at a pace suited to your needs. In-person visits are by prior appointment. Discuss your entry, stage of preparation and specific difficulties during a consultation; coaching cannot promise shortlisting, recommendation or admission.',
        },
      ]}
      sources={[
        { label: 'Indian Army: official TES-56 notification (eligibility, training, documents and selection)', href: 'https://joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/Noftification_of_TES-56.pdf' },
        { label: 'Join Indian Army: current notices and candidate portal', href: 'https://www.joinindianarmy.nic.in/' },
      ]}
      related={[
        { label: 'NDA examination and preparation', href: '/exams/nda/' },
        { label: 'Understand the SSB process', href: '/selection/ssb/' },
        { label: 'SSB psychology preparation', href: '/ssb-psychology/' },
        { label: 'Personal interview preparation', href: '/selection/ssb/personal-interview/' },
        { label: 'One-on-one SSB coaching', href: '/ssb-coaching/' },
        { label: 'Book a consultation', href: '/consultation/' },
      ]}
    />
  );
}
