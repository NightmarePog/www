import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import useIsMobile from '@/hook/useIsMobile'
import { Menu } from './Menu'
import { NAV, scrollToAnchor } from '@/constants/Nav'

const Navbar = () => {
  const isMobile = useIsMobile()
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    NAV.forEach(({ anchor }) => {
      const el = document.getElementById(anchor)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(anchor) },
        { threshold: 0.35 },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        className="flex items-center gap-1 px-2 py-1.5 rounded-md border border-line-strong bg-bg/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => scrollToAnchor('hero')}
          aria-label="Back to top"
          className="px-2 cursor-pointer"
        >
          <img src="/NightmareLogo.svg" alt="NightmarePog logo" className="size-6" />
        </button>
        {isMobile ? (
          <Menu />
        ) : (
          NAV.map(({ title, anchor }) => {
            const isActive = active === anchor
            return (
              <button
                key={anchor}
                onClick={() => scrollToAnchor(anchor)}
                className={`relative px-4 py-1.5 rounded-sm font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 cursor-pointer
                  ${isActive ? 'text-bg' : 'text-ink-muted hover:text-ink'}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-sm bg-ink"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{title}</span>
              </button>
            )
          })
        )}
      </motion.nav>
    </div>
  )
}

export default Navbar
