export type PreparationGuideData = {
  slug: string;
  title: string;
  eyebrow: string;
  lede: string;
  image: string;
  accent: string;
  sections: { title: string; body: string; actions: string[] }[];
  practice: string;
};

export const preparationGuides: PreparationGuideData[] = [
  {
    slug: 'learn',
    title: 'Learn with purpose',
    eyebrow: '01 · Learn',
    lede: 'Build an accurate picture of the career, the entry and the commitment before building an examination plan.',
    image: '/gallery/learn.webp',
    accent: '#4b6228',
    practice:
      'Choose one entry. Write a one-page brief covering the role, eligibility source, selection stages, training destination and service commitment. Mark every fact that still needs official verification.',
    sections: [
      {
        title: 'Start with the career, not the exam',
        body: 'An examination is an entry mechanism, not the career itself. First understand the service, branch, nature of work, training and likely lifestyle. This prevents candidates from preparing intensely for a route they have not properly considered.',
        actions: [
          'Separate officer, technical and other-rank pathways.',
          'Identify the current controlling notification.',
          'List what attracts you—and what gives you pause.',
        ],
      },
      {
        title: 'Build a source habit',
        body: 'Decision-critical facts change by entry and intake. Learn to trace age, education, dates and standards to the official notice instead of relying on summaries, search snippets or remembered rules.',
        actions: [
          'Save the official notice and access date.',
          'Record the exact clause or table for important facts.',
          'Treat conflicting sources as unresolved, not as a guess.',
        ],
      },
      {
        title: 'Turn information into understanding',
        body: 'Active learning means comparing routes, explaining them in your own words and testing assumptions. A candidate who can explain why a route fits is better prepared to make a responsible decision.',
        actions: [
          'Compare no more than three realistic routes at once.',
          'Explain each route to a parent or peer.',
          'Review the comparison when a new notification appears.',
        ],
      },
    ],
  },
  {
    slug: 'lead',
    title: 'Lead before you are given a title',
    eyebrow: '02 · Lead',
    lede: 'Develop the judgement to take responsibility, include others and move a group toward a useful outcome.',
    image: '/gallery/lead.webp',
    accent: '#071f3d',
    practice:
      'Lead a 20-minute group task. Clarify the objective, invite two viewpoints, allocate work, watch the time and close with a shared summary. Ask the group what helped and what did not.',
    sections: [
      {
        title: 'Leadership begins with responsibility',
        body: 'Leadership is not volume, dominance or performing authority. It begins with understanding the task, accepting responsibility for the outcome and helping the group use its strengths.',
        actions: [
          'State the objective before proposing a solution.',
          'Notice who has not been heard.',
          'Own mistakes without shifting blame.',
        ],
      },
      {
        title: 'Balance initiative with listening',
        body: 'Useful initiative creates momentum without ignoring information. Listen first, act when needed and remain willing to revise the plan when evidence changes.',
        actions: [
          'Ask one clarifying question before directing.',
          'Explain the reason behind a decision.',
          'Change course openly when a better idea emerges.',
        ],
      },
      {
        title: 'Build consistency in ordinary settings',
        body: 'Leadership habits develop in classrooms, sports, projects, families and community work. Seek genuine responsibility rather than staged examples designed only for an interview.',
        actions: [
          'Take charge of one real recurring responsibility.',
          'Keep commitments visible and measurable.',
          'Request specific feedback from people affected.',
        ],
      },
    ],
  },
  {
    slug: 'prepare',
    title: 'Prepare as a complete candidate',
    eyebrow: '03 · Prepare',
    lede: 'Create a realistic system for academics, current affairs, communication, fitness and recovery.',
    image: '/gallery/prepare.webp',
    accent: '#397fa8',
    practice:
      'Build a seven-day baseline timetable using your real obligations. Include study blocks, training, sleep and one review period. After the week, adjust it using evidence—not guilt.',
    sections: [
      {
        title: 'Plan from the selection process backwards',
        body: 'Preparation should reflect the actual stages of the chosen entry. Map what must be learned, demonstrated and verified, then give time according to importance and current ability.',
        actions: [
          'List every notified selection stage.',
          'Measure your present baseline honestly.',
          'Prioritise the largest relevant gap.',
        ],
      },
      {
        title: 'Use a sustainable weekly system',
        body: 'Extreme schedules often collapse. A useful plan protects sleep, includes recovery and leaves enough flexibility for school, college or work.',
        actions: [
          'Use repeatable blocks instead of heroic daily targets.',
          'Schedule revision and practice tests.',
          'Keep one buffer block for missed work.',
        ],
      },
      {
        title: 'Review performance, not intention',
        body: 'A plan becomes useful when results change it. Track completion, test performance, running or strength progress and recurring obstacles.',
        actions: [
          'Review the week at a fixed time.',
          'Change one weak part of the system at a time.',
          'Seek qualified help for medical or injury concerns.',
        ],
      },
    ],
  },
  {
    slug: 'communicate',
    title: 'Communicate with clarity',
    eyebrow: '04 · Communicate',
    lede: 'Learn to listen, structure thought and express a genuine view without rehearsed performance.',
    image: '/gallery/communicate.webp',
    accent: '#4b6228',
    practice:
      'Pick one current issue. Speak for 90 seconds using context, two relevant points and a balanced conclusion. Listen back once and note clarity, evidence and unnecessary repetition.',
    sections: [
      {
        title: 'Listening is part of communication',
        body: 'Good communication responds to what was actually said. It does not wait impatiently for a turn or force a memorised answer into every conversation.',
        actions: [
          'Summarise another person’s point before disagreeing.',
          'Ask questions that improve shared understanding.',
          'Avoid interrupting to display knowledge.',
        ],
      },
      {
        title: 'Structure thought before adding polish',
        body: 'Clear speaking usually follows clear thinking. Use a simple beginning, relevant reasoning and conclusion rather than decorative language or borrowed phrases.',
        actions: [
          'Lead with the central point.',
          'Use examples only when they clarify.',
          'Stop when the answer is complete.',
        ],
      },
      {
        title: 'Practise honest expression',
        body: 'Artificially “ideal” answers are difficult to sustain. Build knowledge, examine your views and speak truthfully with respect and proportion.',
        actions: [
          'Distinguish fact, inference and opinion.',
          'Say when you do not know.',
          'Update your view when evidence warrants it.',
        ],
      },
    ],
  },
  {
    slug: 'train',
    title: 'Train with discipline',
    eyebrow: '05 · Train',
    lede: 'Develop fitness progressively, safely and consistently for the demands of preparation and service life.',
    image: '/gallery/train.webp',
    accent: '#397fa8',
    practice:
      'Record a safe baseline for walking or running duration, basic mobility and bodyweight movements appropriate to you. Build the next four weeks gradually and keep recovery days.',
    sections: [
      {
        title: 'Fitness is a process, not a last-minute test',
        body: 'Consistent training supports health, confidence and performance. Rushed preparation increases injury risk and rarely builds durable capacity.',
        actions: [
          'Start from your real current ability.',
          'Increase load gradually.',
          'Treat pain and unusual symptoms seriously.',
        ],
      },
      {
        title: 'Train the whole foundation',
        body: 'A balanced base includes aerobic capacity, strength, mobility, coordination, nutrition and sleep. No single exercise represents complete readiness.',
        actions: [
          'Combine endurance and strength across the week.',
          'Warm up and practise movement quality.',
          'Protect hydration, nutrition and sleep.',
        ],
      },
      {
        title: 'Respect official medical standards',
        body: 'General fitness guidance cannot determine medical eligibility. Standards are entry-specific and assessments belong to authorised medical boards.',
        actions: [
          'Read the current official standard.',
          'Use qualified clinicians for health advice.',
          'Never hide or self-diagnose a medical issue.',
        ],
      },
    ],
  },
  {
    slug: 'serve',
    title: 'Understand what it means to serve',
    eyebrow: '06 · Serve',
    lede: 'Examine motivation, responsibility and contribution before deciding that a defence career is right for you.',
    image: '/gallery/serve.webp',
    accent: '#071f3d',
    practice:
      'Write two lists: what you hope to receive from a defence career and what the service may reasonably require from you. Discuss the imbalance, uncertainty and sacrifices with someone who knows you well.',
    sections: [
      {
        title: 'Move beyond prestige',
        body: 'Uniform, status and adventure are incomplete reasons for a long professional commitment. Service includes routine, standards, accountability, mobility and responsibility for others.',
        actions: [
          'Research the everyday work, not only highlights.',
          'Consider family and geographic implications.',
          'Ask what contribution you want to make.',
        ],
      },
      {
        title: 'Test motivation through contribution',
        body: 'Service orientation can be developed now through dependable work that benefits others. Community, team and family responsibilities reveal more than slogans.',
        actions: [
          'Choose regular service over a one-time display.',
          'Do necessary work even when it is not visible.',
          'Reflect on whom your effort helped.',
        ],
      },
      {
        title: 'Make an informed commitment',
        body: 'A sound career decision can include excitement and uncertainty. Compare alternatives, understand obligations and choose without pressure to imitate another person’s path.',
        actions: [
          'Discuss trade-offs openly with family.',
          'Compare at least one non-defence alternative.',
          'Allow official facts—not urgency—to control timing.',
        ],
      },
    ],
  },
];

export function getPreparationGuide(slug: string) {
  const guide = preparationGuides.find((item) => item.slug === slug);
  if (!guide) throw new Error(`Unknown preparation guide: ${slug}`);
  return guide;
}
