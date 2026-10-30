export const NAV = [
  { title: 'About', anchor: 'about' },
  { title: 'Work', anchor: 'projects' },
  { title: 'Experience', anchor: 'experience' },
  { title: 'Contact', anchor: 'contact' },
]

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/NightmarePog' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luk%C3%A1%C5%A1-erl-7011102a6/' },
]

export const EMAIL = 'erllukas07@gmail.com'

export const scrollToAnchor = (anchor: string) => {
  document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
}
