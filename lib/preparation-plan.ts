export type PlanInput = {
  attempt: 'first' | 'repeat';
  days: number;
  hours: number;
  focus: 'psychology' | 'interview' | 'communication' | 'orientation';
};
export const preparationAreas = [
  {
    id: 'psychology',
    label: 'Psychology reflection and practice',
    href: '/selection/ssb/psychology-tests/',
    task: 'Use unfamiliar prompts and your own responses. Review one exercise for clarity and assumptions; do not memorise model answers.',
  },
  {
    id: 'interview',
    label: 'Personal interview preparation',
    href: '/ssb-personal-interview/',
    task: 'Choose a real experience, check the facts and practise explaining your choices. Ask a partner to pose an unplanned follow-up question.',
  },
  {
    id: 'communication',
    label: 'Communication and group participation',
    href: '/ssb-gto/',
    task: 'Prepare a short talk or discuss a topic with peers. Review listening and useful contribution. Online reading cannot replace group or supervised physical practice.',
  },
  {
    id: 'orientation',
    label: 'Orientation and practical readiness',
    href: '/selection/ssb/',
    task: 'Read your call-up instructions, organise required documents and identify questions. Keep normal study, work, rest and responsibilities in your routine.',
  },
] as const;
export function buildPreparationPlan(input: PlanInput) {
  if (
    !['first', 'repeat'].includes(input.attempt) ||
    !preparationAreas.some((area) => area.id === input.focus) ||
    !Number.isInteger(input.days) ||
    input.days < 1 ||
    input.days > 365 ||
    !Number.isInteger(input.hours) ||
    input.hours < 1 ||
    input.hours > 30
  )
    return null;
  const blockDays = Math.min(7, input.days);
  const minutes = Math.floor((input.hours * 60 * blockDays) / 7);
  const ordered = [...preparationAreas].sort(
    (a, b) => Number(b.id === input.focus) - Number(a.id === input.focus),
  );
  let assigned = 0;
  const tasks = ordered.map((area, i) => {
    const allocation =
      i === 3 ? minutes - assigned : Math.floor(minutes * [0.4, 0.25, 0.2][i]);
    assigned += allocation;
    return { ...area, minutes: allocation };
  });
  return {
    blockDays,
    minutes,
    tasks,
    weeks: Math.ceil(input.days / 7),
    introduction:
      input.attempt === 'repeat'
        ? 'Begin with what you actually observed last time. Separate preparation habits you can change from guesses about the board’s reasons.'
        : 'Begin by understanding the setting. Choose small, regular practice sessions and record questions rather than trying to master every task at once.',
  };
}
