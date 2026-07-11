import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'

interface EditorWindowProps {
  filename: string
  statusText?: string
  lineCount?: number
  children: ReactNode
}

export const EditorWindow = ({ filename, statusText, lineCount, children }: EditorWindowProps) => (
  <motion.div
    className="rounded-lg overflow-hidden border border-line-strong bg-editor shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8)]"
    initial={{ opacity: 0, y: 24, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7, ease: EASE }}
  >
    {/* title bar */}
    <div className="flex items-center gap-3 px-4 h-10 bg-surface border-b border-line">
      <div className="flex gap-1.5">
        <span className="size-2.5 rounded-full border border-line-strong" />
        <span className="size-2.5 rounded-full border border-line-strong" />
        <span className="size-2.5 rounded-full border border-line-strong" />
      </div>
      <div className="flex items-center gap-2 px-3 h-full border-x border-line bg-editor -mb-px">
        <span className="size-1.5 rounded-full bg-ice" />
        <span className="font-mono text-xs text-ink-muted">{filename}</span>
      </div>
    </div>

    {/* code body */}
    <motion.div
      className="py-4 overflow-x-auto"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.5 } } }}
    >
      {children}
    </motion.div>

    {/* status bar */}
    <div className="flex items-center justify-between px-4 h-7 bg-surface border-t border-line font-mono text-[10px] text-ink-faint">
      <div className="flex items-center gap-3">
        <span className="text-ice">⎇ main*</span>
        <span>UTF-8</span>
      </div>
      <div className="flex items-center gap-3">
        {lineCount ? <span>Ln {lineCount}, Col 1</span> : null}
        <span>{statusText ?? 'TypeScript'}</span>
      </div>
    </div>
  </motion.div>
)
