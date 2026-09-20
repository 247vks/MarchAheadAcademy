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
  } else if (cleanPath.startsWith('/ssb-personal-interview/')) {
    crumbs.push({ name: 'SSB Personal Interview', href: '/ssb-personal-interview/' });
  } else if (cleanPath.startsWith('/ssb-gto/')) {
    crumbs.push({ name: 'SSB GTO', href: '/ssb-gto/' });
  } else if (cleanPath.startsWith('/officer-like-qualities/')) {
    crumbs.push({ name: 'Officer Like Qualities', href: '/officer-like-qualities/' });
  } else if (cleanPath.startsWith('/exams/')) {
    crumbs.push({ name: 'Defence Exams', href: '/exams/' });
    if (cleanPath.startsWith('/exams/nda/')) {
      crumbs.push({ name: 'NDA & Naval Academy', href: '/exams/nda/' });
    }
    if (cleanPath.startsWith('/exams/cds/')) {
      crumbs.push({ name: 'CDS', href: '/exams/cds/' });
    }
    if (cleanPath.startsWith('/exams/afcat/')) {
      crumbs.push({ name: 'AFCAT', href: '/exams/afcat/' });
    }
  }
  crumbs.push({ name: title, href: `${cleanPath}/` });
  return crumbs;
}
