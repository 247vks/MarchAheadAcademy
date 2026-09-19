import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';
import { withPageMetadata } from '@/lib/page-metadata';

const title = 'Graduate Officer Entries: TGC, SSC Tech, JAG & Indian Navy';
const description = 'Compare graduate officer pathways, match your degree to notified branches and understand shortlisting, documents and next steps for TGC, SSC Tech, JAG and Navy entries.';
export const metadata: Metadata = withPageMetadata({ title, description, alternates: { canonical: '/career-paths/graduate-officer-entries/' } });

export default function Page() {
  return <AuthorityPage
    currentHref="/career-paths/graduate-officer-entries/"
    eyebrow="Career pathways · graduates"
    title={title}
    lede="Your degree can open several officer-entry pathways. Start with the precise qualification and branch requirements, then compare the selection route and service commitment."
    status="Entry-route guide"
    publishedAt="2026-09-19"
    modifiedAt="2026-09-19"
    showEntryNotice={false}
    sections={[
      { title: 'Four routes worth distinguishing', body: 'TGC and SSC Tech are Army routes for engineering graduates; JAG is a legal branch route for law graduates. Indian Navy graduate officer advertisements cover specified branches with their own qualification combinations. These are separate applications, not interchangeable alternatives within one form. This guide explains how to compare them; it does not announce an open application window.', points: ['TGC: Technical Graduate Course; inspect the engineering-stream list and commission terms.', 'SSC Tech: Short Service Commission (Technical); read the applicable category and course advertisement.', 'JAG: Judge Advocate General branch; inspect the law qualification and professional eligibility requirements.', 'Navy officer entries: choose the advertised branch first, then check its qualification and selection requirements.'] },
      { title: 'TGC: match the exact engineering stream', body: 'Begin with the degree title on your university documents. Compare it with the engineering streams and accepted equivalent streams in the course notification. Similar-sounding subject names are not enough to establish a match. Read how the course treats final-year applicants, the marks considered and the deadline for proof of passing. TGC and SSC Tech should be compared using their own commission and training terms rather than assumed to offer the same career arrangement.' },
      { title: 'SSC Tech: check the category and course separately', body: 'SSC Tech is an Army Short Service Commission route for engineering graduates. Read the advertisement for your applicant category and course: do not transfer requirements from a different notice. As well as the accepted degree stream, record the date-of-birth window, academic evidence needed and any rules for candidates still completing their degree. Before choosing a course, read the stated service terms and training commitments in full.' },
      { title: 'JAG: law qualifications and selection requirements', body: 'JAG is an Army legal branch route for law graduates. Check the recognition of the law qualification, the academic requirement and the professional eligibility wording. Inspect whether the current course requires a CLAT PG result, which examination year it specifies and how that result is used. A previous course’s score-year requirement cannot establish eligibility for a later course. Use the current advertisement to resolve the distinction between eligibility for registration and any registration evidence required.' },
      { title: 'Indian Navy: compare branches, not just the service name', body: 'Navy officer advertisements may list executive, technical or education opportunities with different accepted qualifications. The published June 2026 SSC advertisement is an example of a notice using qualifying-degree marks for shortlisting; it is a past-course reference, not evidence of current applications. For your course, inspect the branch table, permitted preferences, required subjects, degree completion conditions and selection procedure. Do not assume a general engineering degree qualifies for every listed branch.' },
      { title: 'Shortlisting is different from a written examination', body: 'A degree-based shortlist and a written-exam route create different preparation priorities. Identify the selection method in your exact advertisement: degree marks, a specified examination result or another stated basis. Meeting minimum eligibility does not itself mean an SSB invitation. An SSB recommendation is also a separate step from medical fitness, merit and appointment. Keep track of each stage using official communication rather than interpreting an application submission as a selection result.' },
      { title: 'A degree-and-branch comparison you can make today', body: 'Create one row for each possible entry. Copy the qualification wording and relevant paragraph reference into your private notes, then compare it with your documents. Leave an unresolved match as a question to investigate. Avoid choosing an available form option merely because it resembles your course title.', points: ['Entry, course and branch being considered.', 'Exact degree title and recognised institution.', 'Accepted stream or qualification wording in the notice.', 'Marks or score evidence and the method of calculation.', 'Date-of-birth window and other personal eligibility conditions.', 'Final-year completion deadline, where applicable.', 'Selection method and the next official action.'] },
      { title: 'Prepare your document checklist', body: 'Build the checklist from the current application instructions and call-up letter. The list below is a preparation aid; the official instructions determine what must be uploaded or carried. Ensure names, dates and degree details agree across the records, and investigate discrepancies early.', points: ['Date-of-birth and identity documents specified by the entry.', 'Semester or annual marksheets and degree or provisional certificate.', 'University percentage-conversion rule if results use a grade-point system.', 'Required proof for final-year status and completion, where applicable.', 'Specified examination scorecard or professional eligibility evidence.', 'Any category, NCC or other certificate actually claimed in the application.', 'Saved application, official correspondence and later call-up instructions.'] },
      { title: 'Your next official steps', body: 'For Army entries, open Join Indian Army and locate the officer-entry notification for the course you are considering. For Navy entries, open Join Indian Navy and select the current officer advertisement and its instructions. Save the notice and check for amendments before submitting. If degree equivalence or another condition remains unclear, use the recruitment contact channel given in that notice and quote the precise qualification and paragraph. Avoid sending sensitive documents through unofficial social-media contacts.' },
      { title: 'Prepare for the responsibilities beyond the application', body: 'Once you have identified a plausible entry, organise your preparation around the wider SSB process: understanding your education and responsibilities, expressing ideas clearly, reflecting on experience and participating constructively with others. An engineer can practise explaining a real project; a law graduate can practise explaining a legal concept in ordinary language. Individual coaching can help structure preparation, while the recruitment authority decides eligibility and selection.' },
    ]}
    sources={[
      { label: 'Join Indian Army: official officer-entry notifications and applications', href: 'https://www.joinindianarmy.nic.in/' },
      { label: 'Employment News: graduate entry overview (December 2024; background reference)', href: 'https://employmentnews.gov.in/newemp/MoreContentNew.aspx?k=100365&n=InDepthJobs' },
      { label: 'Join Indian Navy: official recruitment portal', href: 'https://www.joinindiannavy.gov.in/' },
      { label: 'Indian Navy SSC June 2026 advertisement (past-course example)', href: 'https://www.joinindiannavy.gov.in/files/Advertisement_SSC_Jun_2026.pdf' },
    ]}
    related={[
      { label: 'Defence exams and entry routes', href: '/exams/' },
      { label: 'CDS guide', href: '/exams/cds/' },
      { label: 'AFCAT guide', href: '/exams/afcat/' },
      { label: 'NCC Special Entry', href: '/career-paths/ncc-special-entry/' },
      { label: 'Eligibility guidance', href: '/eligibility/' },
      { label: 'Understand SSB', href: '/selection/ssb/' },
      { label: 'One-on-one SSB coaching', href: '/ssb-coaching/' },
    ]}
  />;
}
