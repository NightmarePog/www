interface Project {
  name: string
  description: string
  link: string
  icon: 'framework' | 'education' | 'scheduling' | 'railway' | 'inventory' | 'cpu'
  status: 'Released' | 'Completed' | 'In development' | 'Unfinished' | 'Learning project'
  version?: string
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
    status: 'Released',
    version: 'v0.2.0',
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
    status: 'Completed',
    version: 'TdA 2026',
    tags: ['TypeScript', 'Next.js', 'React Query', 'Team project'],
    features: ['Frontend ownership', 'API integration', 'Cross-functional delivery'],
  },
  {
    name: 'Black Mesa Meeting App',
    description:
      'Team scheduling application built for Tour de App 2025, where Black Mesa placed 10th.',
    link: 'https://github.com/NightmarePog/Black-Mesa-25-meeting-app',
    icon: 'scheduling',
    status: 'Completed',
    version: 'TdA 2025',
    tags: ['React', 'TypeScript', 'Flask', 'Competition'],
    features: [
      'Admin-hosted meeting rooms',
      'React frontend with Flask backend',
      '10th-place entry',
    ],
  },
  {
    name: 'Generic Train Game',
    description:
      'Playable Roblox railway game focused on driving, signalling, passengers, and operating a growing network.',
    link: 'https://www.roblox.com/games/113961418864058/Generic-train-game',
    icon: 'railway',
    status: 'In development',
    version: 'Alpha',
    tags: ['Roblox', 'TypeScript', 'Flamework', 'React'],
    features: [
      'Driveable trains and cab controls',
      'Signalling and passenger systems',
      'Server-authoritative multiplayer gameplay',
    ],
  },
  {
    name: 'Flamework Hotbar',
    description:
      'Expandable Roblox inventory and hotbar UI prototype built with roblox-ts, Flamework, and React.',
    link: 'https://github.com/NightmarePog/Flamework-Hotbar',
    icon: 'inventory',
    status: 'Unfinished',
    tags: ['Roblox', 'TypeScript', 'Flamework', 'UI'],
    features: [
      'Slot-based interface foundation',
      'Component-oriented structure',
      'Core functionality and documentation remain incomplete',
    ],
  },
  {
    name: 'LArch8',
    description:
      'An early C learning project exploring a small 8-bit architecture, assembler, and CPU interpreter.',
    link: 'https://github.com/NightmarePog/LArch8',
    icon: 'cpu',
    status: 'Learning project',
    tags: ['C', 'Interpreter', 'Assembler', '8-bit'],
    features: [
      'Assembly-to-bytecode pipeline',
      'Custom object-file format',
      'Small interpreter runtime',
    ],
  },
]
