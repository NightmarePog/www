export interface LogEntry {
  hash: string
  date: string
  lane: 'work' | 'competition'
  title: string
  subtitle: string
  stamp: string
  details?: string
  link?: string
}

// Newest first, like `git log`. Hashes are decoration.
export const LOG: LogEntry[] = [
  {
    hash: 'a3f9c21',
    date: '2026',
    lane: 'competition',
    title: 'HAXAGON Skirmish',
    subtitle: 'National finalist',
    stamp: 'Final',
    link: 'https://haxagon.cz/skirmish',
  },
  {
    hash: '7e1b0d4',
    date: '2026',
    lane: 'competition',
    title: 'Kybersoutěž',
    subtitle: 'National finalist',
    stamp: 'Final',
    details: 'The Czech national cybersecurity competition.',
    link: 'https://www.kybersoutez.cz/',
  },
  {
    hash: '51c8e9a',
    date: '2025',
    lane: 'competition',
    title: 'Tour de App',
    subtitle: '10th place',
    stamp: '#10',
    details: 'With team Black Mesa.',
    link: 'https://tourdeapp.cz/',
  },
  {
    hash: '9d02f6b',
    date: 'Dec 2024 – Jun 2025',
    lane: 'work',
    title: 'Development Lead',
    subtitle: 'VR Centrum',
    stamp: 'Lead',
    details:
      'Led a three-person team building a VR game in Godot and GDScript. I split up the work and made the technical calls.',
  },
  {
    hash: '2b7a1e0',
    date: 'Aug 2024 – Dec 2024',
    lane: 'work',
    title: 'Sales & Technical Support',
    subtitle: 'STARNET',
    stamp: 'Part-time',
    details:
      'Helped customers fix connectivity problems and explained internet plans and hardware.',
  },
]
