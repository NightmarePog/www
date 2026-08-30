interface Project {
  name: string
  description: string
  link: string
  image: string
  tags: string[]
  features: string[]
}

export const Projects: Project[] = [
  {
    name: 'Kord Annotations',
    description:
      'Annotation-first Kotlin framework that generates Discord command metadata and dispatch code at compile time.',
    link: 'https://github.com/NightmarePog/kord-annotations',
    image: 'https://opengraph.githubassets.com/1/NightmarePog/kord-annotations',
    tags: ['Kotlin', 'KSP', 'Gradle', 'Discord'],
    features: [
      'Compile-time code generation',
      'Gradle plugin',
      'Spring Boot integration',
      'Testkit',
    ],
  },
  {
    name: 'LArch 8',
    description: 'Simple assembly-like language interpreter written in C.',
    link: 'https://github.com/NightmarePog/LArch8',
    image: 'https://opengraph.githubassets.com/1/NightmarePog/LArch8',
    tags: ['C', 'Interpreter', 'Assembly'],
    features: ['Custom instruction set', 'Register machine', 'CLI runner'],
  },
  {
    name: 'Flamework Hotbar',
    description: 'Hotbar framework for Roblox built with Flamework and Roblox-TS.',
    link: 'https://github.com/NightmarePog/Flamework-Hotbar',
    image: 'https://opengraph.githubassets.com/1/NightmarePog/Flamework-Hotbar',
    tags: ['TypeScript', 'Roblox', 'Flamework'],
    features: ['Slot management', 'Equip/unequip hooks', 'Networked'],
  },
  {
    name: 'CROOM',
    description: "3D rendering engine inspired by DOOM's rendering technique, written in C++.",
    link: 'https://github.com/NightmarePog/CROOM',
    image: 'https://opengraph.githubassets.com/1/NightmarePog/CROOM',
    tags: ['C++', '3D', 'Rendering'],
    features: ['Raycasting engine', 'Sector-based map', 'Texture mapping'],
  },
]
