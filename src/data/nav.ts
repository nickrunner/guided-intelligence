export interface NavLink {
  href: string;
  label: string;
  section?: string;
  short?: string;
}

export const sectionLinks: NavLink[] = [
  { href: '/concepts', label: 'Core Concepts', section: '§2', short: 'Concepts' },
  { href: '/roles', label: 'Roles', section: '§3', short: 'Roles' },
  { href: '/flow', label: 'The Flow', section: '§4', short: 'Flow' },
  { href: '/intent', label: 'Intent Model', section: '§5', short: 'Intent' },
  { href: '/safety', label: 'Safety', section: '§6', short: 'Safety' },
  { href: '/domains', label: 'Domains & Tracks', section: '§7', short: 'Domains' },
  { href: '/implementation', label: 'Implementation', section: '§8', short: 'Impl.' },
  { href: '/future', label: 'Future', section: '§9', short: 'Future' },
];

export const utilityLinks: NavLink[] = [
  { href: '/glossary', label: 'Glossary' },
  { href: '/whitepaper', label: 'Full Whitepaper' },
];

export function getPrevNext(currentHref: string) {
  const all = sectionLinks;
  const idx = all.findIndex((l) => l.href === currentHref);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null,
  };
}
