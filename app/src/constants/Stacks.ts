import { IconButtonProps } from "@/types/IconButton"
import { SiBlender, SiC, SiCplusplus, SiCss3, SiGodotengine, SiHtml5, SiJavascript, SiLua, SiNextdotjs, SiOpenjdk, SiPython, SiReact, SiRobloxstudio, SiRust, SiTailwindcss, SiTypescript } from "react-icons/si"


export const webStack: IconButtonProps[] = [
    {
        name: "HTML",
        link: "https://cs.wikipedia.org/wiki/Hypertext_Markup_Language",
        icon: SiHtml5,
        description: "HTML5",
        className: "text-[#E34F26]"
    },
    {
        name: "CSS",
        link: "https://en.wikipedia.org/wiki/CSS",
        icon: SiCss3,
        className: "text-[#1572B6]"
    },
    {
        name: "JavaScript",
        link: "https://en.wikipedia.org/wiki/JavaScript",
        icon: SiJavascript,
        className: "text-[#F7DF1E]"
    },
    {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: SiTypescript,
        className: "text-[#3178C6]" 
    },
    {
        name: "TailwindCSS",
        link: "https://tailwindcss.com/",
        icon: SiTailwindcss,
        className: "text-[#38B2AC]"
    },
    {
        name: "React",
        link: "https://react.dev/",
        icon: SiReact,
        className: "text-[#61DAFB]"
    },
    {
        name: "Next.js",
        link: "https://nextjs.org/",
        icon: SiNextdotjs,
        className: "text-white"
    },
]

export const gameDevStack: IconButtonProps[] = [
    {
        name: "Godot",
        link: "https://godotengine.org/",
        icon: SiGodotengine,
        className: "text-[#478CBF]"
    },
    {
        name: "Roblox Studio",
        link: "https://create.roblox.com/",
        icon: SiRobloxstudio,
        className: "text-[#009efeff]" 
    },
        {
        name: "Blender",
        link: "https://www.blender.org/",
        icon: SiBlender,
        description: "I mostly just do models for my games here"
    },
        {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: SiTypescript,
        className: "text-[#3178C6]",
        description: "in roblox community, there is a roblox-ts which is TypeScript compiler into Lua, I work with this a lot!"
    },
]

export const othersStack: IconButtonProps[] = [
    {
        name: "Python",
        link: "https://www.python.org/",
        icon: SiPython,
        className: "text-white",
        description: "I can work with python, but I rarely use it!"
    },
    {
        name: "Lua",
        link: "https://www.lua.org/",
        icon: SiLua,
        description: "I work with this language in Roblox Studio, ComputerCraft, or sometimes just for fun!",
        className: "text-[#00007D]"
    },
    {
        name: "C",
        link: "https://en.wikipedia.org/wiki/C_(programming_language)",
        icon: SiC,
        description: "I don't use this language much, but I wanted to learn it so I can see the world of low end",
        className: "text-[#abbbce]"
    },
    {
        name: "C++",
        link: "https://isocpp.org/",
        icon: SiCplusplus,
        description: "Low-level experiments like CROOM, my DOOM-style renderer",
        className: "text-[#00599C]"
    },
    {
        name: "Java",
        link: "https://www.java.com/",
        icon: SiOpenjdk,
        className: "text-[#ED8B00]"
    },
    {
        name: "Rust",
        link: "https://www.rust-lang.org/",
        icon: SiRust,
        description: "I do a little of stuff in Rust",
        className: "text-[#DEA584]"
    },
]
