// Integration: append these sections before each guide's final Q&A section.
// Original academy study guidance, not new eligibility/notification claims.
export type ExamSection = { title: string; body: string; points?: string[] };

export const examGuideAdditions: Record<
  'nda' | 'cds' | 'afcat',
  ExamSection[]
> = {
  nda: [
    {
      title: 'Build an NDA preparation plan around your school timetable',
      body: 'Begin with a diagnostic attempt rather than a full timetable copied from somebody else. Try a manageable set of Mathematics questions and a separate GAT set, then record whether each lost mark came from a missing concept, misreading, calculation or time pressure. Your first week should address the most frequent cause, not simply the subject you enjoy most.',
      points: [
        'Keep separate Mathematics and GAT records so strong performance in one does not conceal a gap in the other.',
        'Use short concept-and-practice sessions on school days, reserving a longer block for a timed paper and its review.',
        'Reattempt missed questions without looking at the solution. A recognised answer is not yet a learned method.',
        'Review the plan weekly against completed work, accuracy and school commitments; increase workload only when it is sustainable.',
      ],
    },
    {
      title: 'Use official NDA previous papers as a learning tool',
      body: 'UPSC publishes previous question papers. Use the first pass to understand how questions are framed, a second pass under the applicable time conditions and a final pass to explain your errors. A paper is not finished when the timer ends: the useful output is a short list of concepts to repair and decisions to change.',
      points: [
        'Record the examination year, paper and source before comparing scores.',
        'Check solutions carefully; distinguish an official answer key from a coaching explanation.',
        'Avoid predicting topic weightage from a single paper. Use several papers to identify recurring demands without treating them as promises.',
      ],
    },
    {
      title: 'Prepare for SSB alongside your academic work',
      body: 'Do not turn school life into a rehearsed interview script. Take genuine responsibility, participate in group activities and learn to explain what you did, why you chose it and what you would improve. Familiarity with screening, psychology exercises, group activities and interview helps you understand the setting without pretending to know an assessment formula.',
      points: [
        'Keep a brief weekly reflection on a challenge, a responsibility and a useful piece of feedback.',
        'Discuss your service interests with reasons beyond uniform or status.',
        'Use the SSB guide to understand the selection stages; written preparation and personal development need different kinds of practice.',
      ],
    },
    {
      title: 'How one-on-one NDA preparation can help',
      body: 'March Ahead Academy can help connect subject preparation, career understanding and SSB familiarisation in an individual plan. Online coaching is available, while in-person visits are by prior appointment. Bring your education stage, target route, an attempted paper and the areas you find difficult to the consultation; these are more useful starting points than a promise to study a fixed number of hours.',
    },
  ],
  cds: [
    {
      title: 'Turn academy preferences into a practical CDS plan',
      body: 'Separate two decisions: whether a notified academy route fits your qualifications, and how to prepare for its papers. Write down your intended academy preferences before assembling study material. Then compare your present performance paper by paper so that a strong English score does not hide weak General Knowledge or an unprepared Mathematics paper where applicable.',
      points: [
        'Keep a route checklist alongside your timetable: academy preference, relevant education documents, application requirements and evidence deadlines.',
        'Plan study around university or work responsibilities with specific weekly outputs, not only hours.',
        'If considering more than one route, identify the overlapping preparation and the additional work each requires.',
      ],
    },
    {
      title: 'Review English, General Knowledge and Mathematics differently',
      body: 'One revision method will not solve every paper. For English, explain why the chosen option fits the sentence or passage. For General Knowledge, connect a missed fact to its wider topic and revisit it later. For Mathematics, write the method and identify the point where your reasoning or calculation failed. Use UPSC previous papers as the reference material rather than relying only on mixed online quizzes.',
      points: [
        'English: keep examples of recurring grammar or comprehension mistakes, not an unmanageable list of isolated rules.',
        'General Knowledge: organise revision by topic and check disputed facts against reliable sources.',
        'Mathematics where applicable: practise selecting an efficient method, then build timed accuracy.',
        'Maintain an error log and reattempt a small selection before adding new material.',
      ],
    },
    {
      title: 'Prepare to explain your graduation and responsibilities at SSB',
      body: 'A graduate candidate has experiences worth examining: academic choices, projects, teamwork, setbacks, employment and responsibilities outside college. Reflect on those experiences rather than constructing a polished personality. Be ready to explain decisions, acknowledge limitations and describe improvements with real examples.',
      points: [
        'Review one project in depth: your contribution, difficulty, decision and outcome.',
        'Understand why the academy and service you prefer suit your interests.',
        'For repeat attempts, identify what you can improve without claiming to know why a board did not recommend you.',
      ],
    },
    {
      title: 'Personalised CDS coaching and the next step',
      body: 'One-on-one coaching can help prioritise gaps across the relevant written papers and prepare separately for the selection-board setting. March Ahead Academy offers online coaching and appointment-only in-person visits. Share your degree background, intended academy choices, available study time and a recent practice attempt when booking a consultation.',
    },
  ],
  afcat: [
    {
      title: 'Build branch understanding before building a timetable',
      body: 'Your interest in the Air Force is the starting point, not the end of the decision. Read about the branch you are considering, match your education records to the notification and make a list of questions you still need answered. This helps distinguish a realistic preference from an application choice made simply because its name sounds attractive.',
      points: [
        'Keep your school subjects, degree title and academic records together for branch-level checks.',
        'Separate career questions from test-preparation questions; both deserve attention.',
        'Do not assume an older branch summary covers a new notification or every available entry.',
      ],
    },
    {
      title: 'Practise a mixed paper without rushing your decisions',
      body: 'Use practice to learn when to solve, when to pause and when to move on. Review subject coverage and decision quality separately. A candidate who knows the material may still lose time through repeated rereading or staying too long with one problem; the solution is a tested approach to the paper, not indiscriminate speed.',
      points: [
        'Classify mistakes as knowledge, comprehension, calculation, reasoning or time management.',
        'Use the marking instructions for your cycle when assessing a practice attempt.',
        'Repeat a short set after repairing the underlying weakness, then return to a timed mixed attempt.',
        'Do not treat memory-based questions as official evidence of what the next paper will contain.',
      ],
    },
    {
      title: 'Prepare for AFSB as a separate stage',
      body: 'Written practice and selection-board preparation are related but different. Alongside academic work, reflect on your responsibilities, learn to discuss your experiences clearly and practise listening and contributing in a group. Use the AFSB information published by the Indian Air Force and the academy’s SSB guides for orientation rather than searching for rehearsed responses.',
      points: [
        'Keep examples of real teamwork, initiative and learning from feedback.',
        'Know why you are interested in the branch you have chosen.',
        'For a repeat attempt, focus on observable habits you can develop rather than guessing an assessor’s private reasoning.',
      ],
    },
    {
      title: 'One-on-one AFCAT and AFSB preparation',
      body: 'March Ahead Academy’s personalised approach can help organise written preparation and build familiarity with the selection-board journey. Online coaching is available; in-person visits are by prior appointment. Bring your branch interests, education background and practice difficulties to the consultation so the preparation discussion starts with your needs.',
    },
  ],
};

export const examHubGroups = [
  {
    title: 'Written examinations for officer pathways',
    description:
      'Start with the existing detailed guides, then compare the route behind each examination.',
    links: [
      { label: 'NDA & Naval Academy', href: '/exams/nda' },
      { label: 'Combined Defence Services (CDS)', href: '/exams/cds' },
      { label: 'AFCAT', href: '/exams/afcat' },
    ],
  },
  {
    title: 'Other officer-entry routes',
    description:
      'NCC Special Entry, TES, TGC, SSC Tech, JAG and notified Navy officer entries need separate route-specific guidance. They are not interchangeable with the written examinations above. Explore the service career guides for these entry routes and check the relevant current notification.',
    links: [
      { label: 'Army TES: technical entry after Class 12', href: '/career-paths/tes/' },
      { label: 'Army NCC Special Entry', href: '/career-paths/ncc-special-entry/' },
      { label: 'Army careers', href: '/services/army' },
      { label: 'Navy careers', href: '/services/navy' },
      { label: 'Air Force careers', href: '/services/air-force' },
    ],
  },
  {
    title: 'Agniveer: a separate career pathway',
    description:
      'Keep Agniveer research separate from commissioned officer-entry comparisons. Investigate the relevant service notification and the nature of the engagement before comparing preparation options.',
    links: [{ label: 'Understand career pathways', href: '/career-paths' }],
  },
];
