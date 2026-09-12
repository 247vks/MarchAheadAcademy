export type ArticleBreadcrumb = { name: string; href: string };

// Navigation hierarchy, not a change to established article URLs.
export function articleBreadcrumbs(
  path: string,
  title: string,
): ArticleBreadcrumb[] {
  const cleanPath = path.replace(/\/$/, '');
  const crumbs: ArticleBreadcrumb[] = [
    { name: 'Home', href: '/' },
    { name: 'Knowledge Centre', href: '/knowledge-centre/' },
  ];
  if (cleanPath.startsWith('/selection/ssb/')) {
    const psychology = [
      'psychology-tests',
      'tat',
      'wat',
      'srt',
      'self-description',
    ].includes(cleanPath.split('/').pop() ?? '');
    crumbs.push(
      psychology
        ? { name: 'SSB Psychology', href: '/ssb-psychology/' }
        : { name: 'SSB', href: '/selection/ssb/' },
    );
  } else if (cleanPath.startsWith('/ssb-psychology/')) {
    crumbs.push({ name: 'SSB Psychology', href: '/ssb-psychology/' });
  } else if (cleanPath.startsWith('/exams/')) {
    crumbs.push({ name: 'Defence Exams', href: '/exams/' });
  }
  crumbs.push({ name: title, href: `${cleanPath}/` });
  return crumbs;
}
