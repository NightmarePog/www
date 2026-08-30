interface Project {
  name: string
  description: string
  link: string
  icon: 'framework' | 'quiz' | 'package-manager' | 'railway' | 'inventory' | 'cpu'
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
    name: 'Curtis',
    description:
      'Full-stack quiz platform that started from a task set by my teacher: build a practical alternative to Microsoft Teams quizzes.',
    link: 'https://github.com/NightmarePog/Curtis',
    icon: 'quiz',
    status: 'In development',
    version: 'MVP',
    tags: ['Java', 'Spring', 'Next.js', 'PostgreSQL'],
    features: [
      'Teacher and student workflows',
      'Microsoft Entra ID authentication',
      'Automatic evaluation and live quiz sessions',
    ],
  },
  {
    name: 'Purr',
    description:
      'Unfinished AUR package manager written in Rust, exploring dependency resolution, isolated builds, and safer application launching.',
    link: 'https://github.com/NightmarePog/Purr',
    icon: 'package-manager',
    status: 'Unfinished',
    version: 'v0.1.0-dev',
    tags: ['Rust', 'Arch Linux', 'AUR', 'CLI'],
    features: [
      'AUR metadata and dependency planning',
      'Isolated package build flow',
      'Install, remove, and run commands still in development',
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
