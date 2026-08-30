export interface ExperienceItem {
  period: string
  role: string
  organization: string
  type: string
  description: string
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Dec 2024 — Jun 2025',
    role: 'Development Lead',
    organization: 'VR Centrum',
    type: 'Project role',
    description:
      'Led a three-person team developing a VR game in Godot and GDScript, coordinating implementation and technical direction.',
  },
  {
    period: 'Aug 2024 — Dec 2024',
    role: 'Sales & Technical Support Assistant',
    organization: 'STARNET',
    type: 'Part-time',
    description:
      'Helped customers troubleshoot connectivity issues and explained internet services and products.',
  },
]

export const MILESTONES = [
  { value: '2026', label: 'National finalist', detail: 'Kybersoutěž' },
  { value: '10th', label: 'Team placement', detail: 'Tour de App 2025' },
  { value: '2027', label: 'Expected graduation', detail: 'SOŠE Hluboká' },
]
