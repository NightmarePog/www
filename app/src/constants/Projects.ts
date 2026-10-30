export interface Project {
  name: string
  description: string
  link: string
  image: string
  imageAlt: string
  status: 'Released' | 'In development' | 'Unfinished' | 'Learning project'
  version?: string
  tags: string[]
  // Grid span on desktop; drives the editorial layout of the projects section
  size: 'large' | 'small' | 'half'
}

export const Projects: Project[] = [
  {
    name: 'Generic Train Game',
    description:
      'Roblox railway game about driving trains, working signals, and moving passengers across a growing network.',
    link: 'https://www.roblox.com/games/113961418864058/Generic-train-game',
    image: '/projects/gtg-1.webp',
    imageAlt: 'A red brick-built railcar on the tracks at sunset in Generic Train Game',
    status: 'In development',
    version: 'Alpha',
    tags: ['Roblox', 'TypeScript', 'Flamework', 'React'],
    size: 'large',
  },
  {
    name: 'Curtis',
    description:
      'Quiz platform for teachers and students. It started as a school assignment: build something better than quizzes in Microsoft Teams.',
    link: 'https://github.com/NightmarePog/Curtis',
    image: '/projects/curtis-1.webp',
    imageAlt: 'Screenshot of the Curtis web app',
    status: 'In development',
    version: 'MVP',
    tags: ['Java', 'Spring', 'Next.js', 'PostgreSQL'],
    size: 'small',
  },
  {
    name: 'Purr',
    description:
      'AUR package manager in Rust. It plans dependencies and builds packages in isolation.',
    link: 'https://github.com/NightmarePog/Purr',
    image: '/projects/purr.webp',
    imageAlt: 'Terminal output from the Purr command-line tool',
    status: 'In development',
    version: 'v0.1.0-dev',
    tags: ['Rust', 'Arch Linux', 'CLI'],
    size: 'small',
  },
  {
    name: 'Kord Annotations',
    description:
      'Kotlin framework for Discord bots. You annotate functions, and KSP generates the command metadata and dispatch code at compile time.',
    link: 'https://github.com/NightmarePog/kord-annotations',
    image: '/projects/kord.webp',
    imageAlt: 'An annotated Discord command written with Kord Annotations',
    status: 'Released',
    version: 'v0.2.0',
    tags: ['Kotlin', 'KSP', 'Gradle', 'Spring Boot'],
    size: 'large',
  },
  {
    name: 'Flamework Hotbar',
    description: 'Prototype of an expandable Roblox inventory and hotbar UI.',
    link: 'https://github.com/NightmarePog/Flamework-Hotbar',
    image: '/projects/hotbar.webp',
    imageAlt: 'Flamework Hotbar UI assets',
    status: 'Unfinished',
    tags: ['Roblox', 'TypeScript', 'React'],
    size: 'half',
  },
  {
    name: 'LArch8',
    description:
      'My first C project: a made-up 8-bit architecture with an assembler and an interpreter.',
    link: 'https://github.com/NightmarePog/LArch8',
    image: '/projects/larch8.webp',
    imageAlt: 'LArch8 assembling and running a program in the terminal',
    status: 'Learning project',
    tags: ['C', 'Assembler', 'Interpreter'],
    size: 'half',
  },
]
