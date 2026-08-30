import type { IconButtonProps } from '@/types/IconButton'
import {
  SiBlender,
  SiC,
  SiCplusplus,
  SiGodotengine,
  SiGit,
  SiGradle,
  SiKotlin,
  SiLinux,
  SiLua,
  SiNextdotjs,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiRobloxstudio,
  SiRust,
  SiSpring,
  SiTypescript,
} from 'react-icons/si'

const links = {
  portfolio: 'https://github.com/NightmarePog/www',
  kord: 'https://github.com/NightmarePog/kord-annotations',
  curtis: 'https://github.com/NightmarePog/Curtis',
  purr: 'https://github.com/NightmarePog/Purr',
  trainGame: 'https://www.roblox.com/games/113961418864058/Generic-train-game',
  hotbar: 'https://github.com/NightmarePog/Flamework-Hotbar',
  larch8: 'https://github.com/NightmarePog/LArch8',
  croom: 'https://github.com/NightmarePog/CROOM',
  dotfiles: 'https://github.com/NightmarePog/dotfiles',
  arpTool: 'https://github.com/NightmarePog/arp-poison-tool',
  ccux: 'https://github.com/NightmarePog/CCux-computercraft',
}

export const primaryStack: IconButtonProps[] = [
  {
    name: 'TypeScript',
    icon: SiTypescript,
    description: 'My main language for web interfaces and Roblox game systems.',
    projects: [
      { name: 'Curtis', link: links.curtis },
      { name: 'Generic Train Game', link: links.trainGame },
      { name: 'Flamework Hotbar', link: links.hotbar },
      { name: 'This portfolio', link: links.portfolio },
    ],
  },
  {
    name: 'React',
    icon: SiReact,
    description: 'Used for responsive web interfaces and state-driven Roblox UI.',
    projects: [
      { name: 'Curtis', link: links.curtis },
      { name: 'Generic Train Game UI', link: links.trainGame },
      { name: 'Flamework Hotbar', link: links.hotbar },
      { name: 'This portfolio', link: links.portfolio },
    ],
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    description: 'My framework for full-stack React applications with structured routing.',
    projects: [{ name: 'Curtis', link: links.curtis }],
  },
  {
    name: 'Kotlin',
    icon: SiKotlin,
    description: 'Used for libraries, compile-time tooling, and JVM backend development.',
    projects: [{ name: 'Kord Annotations', link: links.kord }],
  },
  {
    name: 'Java',
    icon: SiOpenjdk,
    description: 'Used for backend services and REST APIs on the JVM.',
    projects: [{ name: 'Curtis backend', link: links.curtis }],
  },
  {
    name: 'Spring',
    icon: SiSpring,
    description: 'Used for authenticated APIs, persistence, validation, and application services.',
    projects: [
      { name: 'Curtis backend', link: links.curtis },
      { name: 'Kord Annotations integration', link: links.kord },
    ],
  },
  {
    name: 'Gradle',
    icon: SiGradle,
    description: 'Used to structure, test, and publish multi-module JVM projects.',
    projects: [
      { name: 'Kord Annotations', link: links.kord },
      { name: 'Curtis backend', link: links.curtis },
    ],
  },
  {
    name: 'Git',
    icon: SiGit,
    description: 'The version-control foundation for my personal and team projects.',
    projects: [
      { name: 'Kord Annotations', link: links.kord },
      { name: 'Curtis', link: links.curtis },
      { name: 'Purr', link: links.purr },
    ],
  },
  {
    name: 'Linux',
    icon: SiLinux,
    description: 'My daily development environment and the target platform for my systems tooling.',
    projects: [
      { name: 'Purr', link: links.purr },
      { name: 'Dotfiles', link: links.dotfiles },
    ],
  },
]

export const gameDevStack: IconButtonProps[] = [
  {
    name: 'Godot',
    icon: SiGodotengine,
    description: 'Used to build and maintain interactive projects during my work at VR Centrum.',
    projects: [{ name: 'VR Centrum game projects' }],
  },
  {
    name: 'Roblox Studio',
    icon: SiRobloxstudio,
    description: 'My main environment for building multiplayer game systems and interfaces.',
    projects: [
      { name: 'Generic Train Game', link: links.trainGame },
      { name: 'Flamework Hotbar', link: links.hotbar },
    ],
  },
  {
    name: 'Blender',
    icon: SiBlender,
    description: 'Used mainly for creating and preparing models for my game projects.',
    projects: [{ name: 'Generic Train Game assets', link: links.trainGame }],
  },
  {
    name: 'Lua',
    icon: SiLua,
    description: 'Used for Roblox and ComputerCraft scripting, including generated Luau output.',
    projects: [
      { name: 'Generic Train Game', link: links.trainGame },
      { name: 'CCux ComputerCraft', link: links.ccux },
    ],
  },
]

export const exploringStack: IconButtonProps[] = [
  {
    name: 'Python',
    icon: SiPython,
    description: 'Some experience from automation, networking, and small tooling projects.',
    projects: [{ name: 'ARP Poison Tool', link: links.arpTool }],
  },
  {
    name: 'C',
    icon: SiC,
    description: 'Some experience from building a small assembler and CPU interpreter.',
    projects: [{ name: 'LArch8', link: links.larch8 }],
  },
  {
    name: 'C++',
    icon: SiCplusplus,
    description: 'Some experience from experimenting with DOOM-style software rendering.',
    projects: [{ name: 'CROOM', link: links.croom }],
  },
  {
    name: 'Rust',
    icon: SiRust,
    description: 'Some experience from developing Linux package-management and sandboxing tools.',
    projects: [{ name: 'Purr', link: links.purr }],
  },
]
