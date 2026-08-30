import { IconButtonProps } from '@/types/IconButton'
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

export const primaryStack: IconButtonProps[] = [
  {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    icon: SiTypescript,
    className: 'text-[#3178C6]',
  },
  {
    name: 'React',
    link: 'https://react.dev/',
    icon: SiReact,
    className: 'text-[#61DAFB]',
  },
  {
    name: 'Next.js',
    link: 'https://nextjs.org/',
    icon: SiNextdotjs,
    className: 'text-white',
  },
  {
    name: 'Kotlin',
    link: 'https://kotlinlang.org/',
    icon: SiKotlin,
    description: 'Libraries, code generation, and backend development',
    className: 'text-[#A97BFF]',
  },
  {
    name: 'Java',
    link: 'https://www.java.com/',
    icon: SiOpenjdk,
    className: 'text-[#ED8B00]',
  },
  {
    name: 'Spring',
    link: 'https://spring.io/',
    icon: SiSpring,
    className: 'text-[#6DB33F]',
  },
  {
    name: 'Gradle',
    link: 'https://gradle.org/',
    icon: SiGradle,
    className: 'text-[#23A9A1]',
  },
  {
    name: 'Git',
    link: 'https://git-scm.com/',
    icon: SiGit,
    className: 'text-[#F05032]',
  },
  {
    name: 'Linux',
    link: 'https://www.linux.org/',
    icon: SiLinux,
    className: 'text-[#FCC624]',
  },
]

export const gameDevStack: IconButtonProps[] = [
  {
    name: 'Godot',
    link: 'https://godotengine.org/',
    icon: SiGodotengine,
    className: 'text-[#478CBF]',
  },
  {
    name: 'Roblox Studio',
    link: 'https://create.roblox.com/',
    icon: SiRobloxstudio,
    className: 'text-[#009efeff]',
  },
  {
    name: 'Blender',
    link: 'https://www.blender.org/',
    icon: SiBlender,
    description: 'I mostly just do models for my games here',
  },
  {
    name: 'Lua',
    link: 'https://www.lua.org/',
    icon: SiLua,
    description: 'Roblox and ComputerCraft scripting',
    className: 'text-[#00007D]',
  },
]

export const exploringStack: IconButtonProps[] = [
  {
    name: 'Python',
    link: 'https://www.python.org/',
    icon: SiPython,
    className: 'text-white',
    description: 'Automation, scripting, and tooling',
  },
  {
    name: 'C',
    link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    icon: SiC,
    description: 'Some experience from an interpreter project',
    className: 'text-[#abbbce]',
  },
  {
    name: 'C++',
    link: 'https://isocpp.org/',
    icon: SiCplusplus,
    description: 'Some experience from graphics experiments',
    className: 'text-[#00599C]',
  },
  {
    name: 'Rust',
    link: 'https://www.rust-lang.org/',
    icon: SiRust,
    description: 'Some experience from Linux tooling work',
    className: 'text-[#DEA584]',
  },
]
