// Edited paraphrases approved for publication by the Academy on 7 October 2026.
// Approval covers these passages, not review or authorship of the complete articles.
export const approvedExpertInsights: Record<string, { heading: string; paragraphs: string[] }> = {
  '/ssb-psychology/what-does-an-ssb-psychologist-assess/': {
    heading: 'What psychological assessment seeks to understand',
    paragraphs: [
      'Psychological assessment considers a candidate’s suitability for a particular role and working environment. Candidates sometimes become fearful and try to produce tailored “right answers.” The focus, however, is on their responses—not a predetermined answer.',
      'Candidates should express their own responses rather than reproduce material memorised from books. When they remain original, consistency follows naturally. Awareness develops through paying attention to everyday life, while qualities and their level are considered through responses taken together—not one response in isolation.',
    ],
  },
  '/selection/ssb/psychology-tests/': {
    heading: 'Preparation, awareness and confidence',
    paragraphs: [
      'Preparation builds awareness, reduces fear of the unknown and develops confidence. Rehearsal is useful when candidates practise their own responses rather than memorise someone else’s.',
      'Useful preparation includes understanding Officer Like Qualities, developing them through practice, and recognising their relevance across the tests. The aim is to develop qualities as habits, not to memorise test material. Honest feedback, given and accepted in one-to-one coaching, supports development and confidence. Guidance from qualified assessors can help candidates decide what to work on next.',
    ],
  },
  '/selection/ssb/tat/': {
    heading: 'Observe the picture before developing your interpretation',
    paragraphs: [
      'Begin by observing the picture: who is present, what action is taking place and who is doing it. Candidates may see the same picture, but their interpretations depend on how they think.',
      'Use logical thinking to develop your interpretation towards a coherent conclusion. Avoid forcing a prepared story onto an unfamiliar image. Treat each picture independently and respond to what it presents.',
    ],
  },
};
export function getApprovedExpertInsight(path: string) {
  return approvedExpertInsights[`${path.replace(/\/$/, '')}/`];
}
