import { useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import useIsMobile from '@/hook/useIsMobile'
import { Menu } from './Menu'
import { NAV, scrollToAnchor } from '@/constants/Nav'
import { EASE } from '@/lib/motion'

const Navbar = () => {
  const isMobile = useIsMobile()
  const [active, setActive] = useState<string | null>(null)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

  // Hide while scrolling down, reveal on any upward scroll
  useMotionValueEvent(scrollY, 'change', (y) => {
    const previous = scrollY.getPrevious() ?? 0
    setHidden(y > previous && y > 240)
    setScrolled(y > 24)
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ;['hero', ...NAV.map((n) => n.anchor)].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-bg/85 border-line backdrop-blur-md' : 'border-transparent'
      }`}
      initial={{ y: -64 }}
      animate={{ y: hidden ? -64 : 0 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <button
          onClick={() => scrollToAnchor('hero')}
          aria-label="Back to top"
          className="group flex cursor-pointer items-center gap-3"
        >
          <img
            src="/NightmareLogo.svg"
            alt=""
            className="size-6 transition-transform duration-500 group-hover:-rotate-12"
          />
          <span className="text-ink font-mono text-xs tracking-[0.2em] uppercase">Lukáš Erl</span>
        </button>

        {isMobile ? (
          <Menu />
        ) : (
          <nav className="flex items-center gap-8">
            {NAV.map(({ title, anchor }) => {
              const isActive = active === anchor
              return (
                <button
                  key={anchor}
                  onClick={() => scrollToAnchor(anchor)}
                  className={`group relative flex cursor-pointer items-baseline gap-1.5 font-mono text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {title}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="bg-ice absolute -bottom-2 left-0 h-px w-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                </button>
              )
            })}
          </nav>
        )}
      </div>
      <motion.div
        aria-hidden
        className="bg-ice/60 absolute bottom-0 left-0 h-px w-full origin-left"
        style={{ scaleX: progress }}
      />
    </motion.header>
  )
}

export default Navbar
