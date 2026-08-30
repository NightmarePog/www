interface Project {
  name: string
  description: string
  link: string
  icon: 'framework' | 'education' | 'scheduling'
  tags: string[]
  features: string[]
}

export const Projects: Project[] = [
  {
    name: 'Kord Annotations',
    description:
      'Annotation-first Kotlin framework that generates Discord command metadata and dispatch code at compile time.',
    link: 'https://github.com/NightmarePog/kord-annotations',
    icon: 'framework',
    tags: ['Kotlin', 'KSP', 'Gradle', 'Discord'],
    features: [
      'Compile-time code generation',
      'Gradle plugin',
      'Spring Boot integration',
      'Testkit',
    ],
  },
  {
    name: 'ThinkAcademy',
    description:
      'Education platform created for Tour de App 2026. I owned the frontend implementation and helped organize the team.',
    link: 'https://github.com/NightmarePog/TdA26-Brain--brain-nullptr-',
    icon: 'education',
    tags: ['TypeScript', 'Next.js', 'React Query', 'Team project'],
    features: ['Frontend ownership', 'API integration', 'Cross-functional delivery'],
  },
  {
    name: 'Black Mesa Meeting App',
    description:
      'Team scheduling application built for Tour de App 2025, where Black Mesa placed 10th.',
    link: 'https://github.com/NightmarePog/Black-Mesa-25-meeting-app',
    icon: 'scheduling',
    tags: ['React', 'TypeScript', 'Flask', 'Competition'],
    features: [
      'Admin-hosted meeting rooms',
      'React frontend with Flask backend',
      '10th-place entry',
    ],
  },
]
