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
    name: "Laze",
    description: "Statically typed, class-based language that transpiles to Lua 5.1. The compiler is self-hosted — written in Laze itself.",
    link: "https://github.com/NightmarePog/Laze",
    image: "https://opengraph.githubassets.com/1/NightmarePog/Laze",
    tags: ["Language", "Compiler", "Lua", "Self-hosted"],
    features: ["Static types & generics", "Pattern matching", "Traits", "Optimizer"],
  },
  {
    name: "LArch 8",
    description: "Simple assembly-like language interpreter written in C.",
    link: "https://github.com/NightmarePog/LArch8",
    image: "https://opengraph.githubassets.com/1/NightmarePog/LArch8",
    tags: ["C", "Interpreter", "Assembly"],
    features: ["Custom instruction set", "Register machine", "CLI runner"],
  },
  {
    name: "Flamework Hotbar",
    description: "Hotbar framework for Roblox built with Flamework and Roblox-TS.",
    link: "https://github.com/NightmarePog/Flamework-Hotbar",
    image: "https://opengraph.githubassets.com/1/NightmarePog/Flamework-Hotbar",
    tags: ["TypeScript", "Roblox", "Flamework"],
    features: ["Slot management", "Equip/unequip hooks", "Networked"],
  },
  {
    name: "CROOM",
    description: "3D rendering engine inspired by DOOM's rendering technique, written in C++.",
    link: "https://github.com/NightmarePog/CROOM",
    image: "https://opengraph.githubassets.com/1/NightmarePog/CROOM",
    tags: ["C++", "3D", "Rendering"],
    features: ["Raycasting engine", "Sector-based map", "Texture mapping"],
  },
]
