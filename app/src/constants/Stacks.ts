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
    description: 'What I write most. Web frontends, and Roblox games through roblox-ts.',
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
    description: 'Web UIs, and in-game UI for my Roblox projects.',
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
    description: 'The frontend of Curtis.',
    projects: [{ name: 'Curtis', link: links.curtis }],
  },
  {
    name: 'Kotlin',
    icon: SiKotlin,
    description: 'Kord Annotations is written in it, KSP processor included.',
    projects: [{ name: 'Kord Annotations', link: links.kord }],
  },
  {
    name: 'Java',
    icon: SiOpenjdk,
    description: 'The Curtis backend.',
    projects: [{ name: 'Curtis backend', link: links.curtis }],
  },
  {
    name: 'Spring',
    icon: SiSpring,
    description:
      'The Curtis REST API runs on Spring Boot, and Kord Annotations ships a Spring integration.',
    projects: [
      { name: 'Curtis backend', link: links.curtis },
      { name: 'Kord Annotations integration', link: links.kord },
    ],
  },
  {
    name: 'Gradle',
    icon: SiGradle,
    description: 'Builds and publishes the multi-module Kord Annotations project.',
    projects: [
      { name: 'Kord Annotations', link: links.kord },
      { name: 'Curtis backend', link: links.curtis },
    ],
  },
  {
    name: 'Git',
    icon: SiGit,
    description: 'I use it on everything, solo and in teams.',
    projects: [
      { name: 'Kord Annotations', link: links.kord },
      { name: 'Curtis', link: links.curtis },
      { name: 'Purr', link: links.purr },
    ],
  },
  {
    name: 'Linux',
    icon: SiLinux,
    description: 'My daily OS. Purr, my AUR package manager, targets it.',
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
    description: 'I led a VR game in Godot at VR Centrum.',
    projects: [{ name: 'VR Centrum game projects' }],
  },
  {
    name: 'Roblox Studio',
    icon: SiRobloxstudio,
    description: 'Where Generic Train Game gets built.',
    projects: [
      { name: 'Generic Train Game', link: links.trainGame },
      { name: 'Flamework Hotbar', link: links.hotbar },
    ],
  },
  {
    name: 'Blender',
    icon: SiBlender,
    description: 'I make the models for my games in it.',
    projects: [{ name: 'Generic Train Game assets', link: links.trainGame }],
  },
  {
    name: 'Lua',
    icon: SiLua,
    description: 'Roblox scripting and ComputerCraft programs. roblox-ts compiles to Luau too.',
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
    description: 'Small scripts, and an ARP poisoning tool.',
    projects: [{ name: 'ARP Poison Tool', link: links.arpTool }],
  },
  {
    name: 'C',
    icon: SiC,
    description: 'LArch8, my first C project: an assembler and a CPU interpreter.',
    projects: [{ name: 'LArch8', link: links.larch8 }],
  },
  {
    name: 'C++',
    icon: SiCplusplus,
    description: 'CROOM, an experiment with DOOM-style software rendering.',
    projects: [{ name: 'CROOM', link: links.croom }],
  },
  {
    name: 'Rust',
    icon: SiRust,
    description: 'Purr, my AUR package manager.',
    projects: [{ name: 'Purr', link: links.purr }],
  },
]
