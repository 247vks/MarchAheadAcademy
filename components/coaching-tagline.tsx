'use client';

import { usePathname } from 'next/navigation';

export const coachingTaglines: Record<string, string> = {
  '/': 'Your career deserves more than one-size-fits-all coaching.',
  '/about': 'An academy approach centred on one person: you.',
  '/authors/cdr-sulakshan-kumar-sharma':
    'Experienced guidance. Individual attention. Your next step.',
  '/consultation': 'Start with your questions. Build a plan around you.',
  '/resources': 'Make every resource work towards your own progress.',
  '/editorial-standards':
    'Clear information. Honest guidance. Preparation tailored to you.',
  '/notifications':
    'Turn the next notification into a plan that fits your starting point.',
  '/eligibility': 'Know where you qualify. Prepare from where you are.',
  '/career-paths': 'More than a route to choose—a path to make your own.',
  '/career-paths/foundation':
    'Build your foundation at a pace that helps you grow.',
  '/career-paths/after-12th':
    'Your next chapter deserves a personal preparation plan.',
  '/career-paths/after-graduation':
    'Bring your degree and ambition. Shape your next step.',
  '/exams': 'Different exams. Your strengths. A focused plan.',
  '/exams/nda': 'Give your NDA ambition the individual attention it deserves.',
  '/exams/cds': 'Prepare for CDS with a plan built around your learning needs.',
  '/exams/afcat': 'Let your AFCAT preparation progress at your learning pace.',
  '/services': 'Choose your service direction. Make the preparation personal.',
  '/services/army':
    'Your Army ambition deserves more than a standard study plan.',
  '/services/navy':
    'Chart your Navy preparation around your own starting point.',
  '/services/air-force':
    'Aim for an Air Force career with preparation grounded in your needs.',
  '/preparation/communicate': 'Find your voice—not somebody else’s script.',
  '/preparation/lead': 'Develop your leadership through your own experiences.',
  '/preparation/learn': 'Learn with a plan that responds to how you progress.',
  '/preparation/prepare': 'Make your preparation fit your priorities.',
  '/preparation/serve':
    'Connect your motivation to serve with a personal way forward.',
  '/preparation/train': 'Build consistent habits from your own starting point.',
  '/selection/ssb':
    'Your personality is individual. Your SSB preparation should be too.',
  '/selection/ssb/stage-1':
    'Build clarity and confidence from your current strengths.',
  '/selection/ssb/psychology-tests':
    'Develop self-awareness—not a model personality.',
  '/selection/ssb/srt':
    'Work on your judgement, not a bank of rehearsed reactions.',
  '/selection/ssb/tat':
    'Develop clearer expression without borrowing someone else’s story.',
  '/selection/ssb/wat':
    'Practise expressing your thoughts—not memorising ideal sentences.',
  '/selection/ssb/self-description':
    'Understand your own story before you put it into words.',
  '/selection/ssb/group-testing':
    'Find how you can contribute—with feedback focused on you.',
  '/selection/ssb/group-discussion':
    'Make your contribution count, without trying to be the loudest.',
  '/selection/ssb/personal-interview':
    'It is your interview. Prepare to speak as yourself.',
};

export function CoachingTagline() {
  const pathname = usePathname();
  const path = pathname?.replace(/\/$/, '') || '/';
  return <>{coachingTaglines[path] ?? coachingTaglines['/']}</>;
}
