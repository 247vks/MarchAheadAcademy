import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';
export const metadata: Metadata = {
  alternates: { canonical: '/exams/cds' },
  title: 'CDS Exam Guide: IMA, INA, AFA & OTA | March Ahead Academy',
  description:
    'Compare CDS and CDSE routes for IMA, INA, AFA and OTA, including eligibility, written papers, SSB or AFSB and official UPSC sources.',
};
export default function Page() {
  return (
    <AuthorityPage
      eyebrow="Exam guide"
      title="Combined Defence Services examination"
      lede="CDS is not one uniform route. IMA, INA, AFA and OTA have distinct educational conditions, examination papers, service outcomes and notified availability."
      status="Official pattern checked against CDS II 2026"
      sections={[
        {
          title: 'Start with the academy, not only the exam',
          body: 'Your academy preferences shape the required papers, educational qualification and service pathway. Compare IMA, INA, AFA and OTA deliberately before completing an application.',
        },
        {
          title: 'Verify every condition by academy',
          body: 'Degree requirements, date-of-birth windows, marital-status provisions, gender availability and vacancies can differ. Final-year eligibility is not a universal assumption and must be checked in the current notification.',
        },
        {
          title: 'Written success is one stage',
          body: 'The complete journey includes the UPSC examination, SSB or AFSB as applicable, medical assessment and final merit against notified vacancies.',
          points: [
            'OTA has a different written-paper structure from IMA, INA and AFA.',
            'Released historical cut-offs are evidence; predicted cut-offs are not facts.',
            'Written rank alone does not guarantee academy allocation or joining.',
          ],
        },
        {
          title: 'Which CDS route should you investigate?',
          body: 'Begin with the academy outcome. Graduates considering IMA, INA, AFA or OTA should compare the current educational conditions, date-of-birth window, marital-status provisions and notified course availability before choosing preferences.',
          points: [
            'Investigate INA only against the engineering qualification stated in the current notice.',
            'Check the AFA education conditions, including the relevant Physics and Mathematics history or engineering qualification.',
            'Treat OTA as a distinct course and written-paper route, not simply an easier version of CDS.',
          ],
        },
        {
          title: 'What to expect on examination day',
          body: 'Your academy choices determine whether you sit two papers or three under the current UPSC scheme. Confirm the timetable, venue instructions and permitted materials from UPSC, then rehearse the same paper sequence and duration in practice.',
          points: [
            'IMA, INA and AFA candidates prepare for English, General Knowledge and Elementary Mathematics.',
            'OTA candidates prepare for English and General Knowledge under the current scheme.',
            'Use objective practice with disciplined answer marking and review.',
          ],
        },
        {
          title: 'Common mistakes and quick answers',
          body: 'Candidates often compare CDS as though every academy has the same qualification and papers. Another common error is quoting an old age range or cut-off without naming the cycle and course.',
          points: [
            'Are CDS and CDSE the same examination? CDSE is a common abbreviation for the Combined Defence Services Examination, widely called CDS.',
            'Is Elementary Mathematics taken for OTA? Not under the current UPSC written scheme.',
            'Does a historical cut-off predict the next one? No. Use released cut-offs only as historical records.',
          ],
        },
      ]}
      experience={{
        label: 'CDS (CDSE) orientation',
        heading: 'Your academy choice changes the examination experience.',
        intro:
          'Candidates for IMA, INA and AFA take English, General Knowledge and Elementary Mathematics under the current UPSC scheme; OTA candidates take English and General Knowledge. Confirm this in the active notice.',
        format: [
          {
            title: 'IMA · INA · AFA',
            detail:
              'Three objective papers: English, General Knowledge and Elementary Mathematics.',
          },
          {
            title: 'OTA',
            detail:
              'Two objective papers: English and General Knowledge; Elementary Mathematics is not part of the OTA written scheme.',
          },
          {
            title: 'Beyond written',
            detail:
              'SSB or AFSB, medical examination and merit against vacancies remain separate stages.',
          },
        ],
        samples: [
          {
            area: 'English',
            prompt:
              'Choose the revision that makes a sentence precise without changing its intended meaning.',
            lookFor:
              'Check grammar, context and economy—not just whether a phrase sounds familiar.',
          },
          {
            area: 'General Knowledge',
            prompt:
              'Four close options are given. Which fact would you need to verify before choosing?',
            lookFor:
              'Distinguish dates, institutions and constitutional roles through source-based revision.',
          },
          {
            area: 'Elementary Mathematics',
            prompt:
              'Speed rises by 20%. How does journey time change when distance stays fixed?',
            lookFor:
              'Use inverse proportionality and estimate first. This paper does not apply to OTA.',
          },
        ],
        support: [
          'Start with the correct academy and paper combination.',
          'Map gaps using official previous papers.',
          'Build a revision and test-review system, not shortcuts.',
          'Prepare for SSB or AFSB as a distinct journey.',
        ],
      }}
      sources={[
        {
          label: 'UPSC CDS II 2026 notification',
          href: 'https://www.upsc.gov.in/sites/default/files/Notif-CDS-II-2026-Engl-200526.pdf',
        },
        {
          label: 'UPSC notifications',
          href: 'https://www.upsc.gov.in/exams-related-info/exam-notification',
        },
        {
          label: 'UPSC cut-off marks',
          href: 'https://www.upsc.gov.in/examinations/cutoff-marks--',
        },
      ]}
      related={[
        { label: 'After graduation', href: '/career-paths/after-graduation' },
        { label: 'SSB guide', href: '/selection/ssb' },
        { label: 'NDA guide', href: '/exams/nda' },
      ]}
    />
  );
}
