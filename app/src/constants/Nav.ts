export const NAV = [
  { title: 'Home', anchor: 'hero' },
  { title: 'About', anchor: 'about' },
  { title: 'Projects', anchor: 'projects' },
  { title: 'Contact', anchor: 'contact' },
]

export const scrollToAnchor = (anchor: string) => {
  document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
}
