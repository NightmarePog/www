import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { EASE, viewport } from '@/lib/motion'

interface TerminalProps {
  title: string
  children: ReactNode
  onBodyClick?: () => void
}

// Window chrome shared by the shell-style sections (experience, contact)
export const Terminal = ({ title, children, onBodyClick }: TerminalProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewport}
    transition={{ duration: 0.7, ease: EASE }}
    className="border-line-strong bg-editor overflow-hidden border shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8)]"
  >
    <div className="border-line bg-surface flex h-10 items-center gap-3 border-b px-4">
      <div className="flex gap-1.5">
        <span className="border-line-strong size-2.5 rounded-full border" />
        <span className="border-line-strong size-2.5 rounded-full border" />
        <span className="border-line-strong size-2.5 rounded-full border" />
      </div>
      <span className="text-ink-faint mx-auto pr-12 font-mono text-[11px]">{title}</span>
    </div>
    <div
      onClick={onBodyClick}
      className="text-ink overflow-x-auto px-4 py-5 font-mono text-[13px] leading-[1.7rem] md:px-6"
    >
      {children}
    </div>
  </motion.div>
)

export const Prompt = ({
  cwd,
  root = false,
  children,
}: {
  cwd: string
  root?: boolean
  children?: ReactNode
}) => (
  <div className="flex flex-wrap gap-x-2">
    {root ? (
      <span className="text-syn-kw font-semibold">root@nightmarepog {cwd}</span>
    ) : (
      <span className="text-ice">{cwd}</span>
    )}
    <span className={root ? 'text-syn-kw' : 'text-ink-faint'}>{root ? '#' : '$'}</span>
    {children}
  </div>
)
