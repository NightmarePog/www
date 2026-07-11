import type { ReactNode } from 'react'

// Monochrome syntax — hierarchy by tone and style, like ink on a printed page
export const KW = ({ children }: { children: ReactNode }) => <span className="text-white font-medium">{children}</span>
export const TY = ({ children }: { children: ReactNode }) => <span style={{ color: '#c9c9c7' }}>{children}</span>
export const ST = ({ children }: { children: ReactNode }) => <span className="italic" style={{ color: '#b3b3b0' }}>{children}</span>
export const CM = ({ children }: { children: ReactNode }) => <span className="italic" style={{ color: '#55555a' }}>{children}</span>
export const FN = ({ children }: { children: ReactNode }) => <span style={{ color: '#d9d9d6' }}>{children}</span>
export const VA = ({ children }: { children: ReactNode }) => <span style={{ color: '#ececea' }}>{children}</span>
export const NU = ({ children }: { children: ReactNode }) => <span style={{ color: '#c9c9c7' }}>{children}</span>
export const AN = ({ children }: { children: ReactNode }) => <span style={{ color: '#9a9a97' }}>{children}</span>
export const PL = ({ children }: { children: ReactNode }) => <span style={{ color: '#7a7a78' }}>{children}</span>

interface LineProps {
  n: number
  children?: ReactNode
  indent?: number
}

export const Line = ({ n, children, indent = 0 }: LineProps) => (
  <div className="flex group min-h-[1.7rem] font-mono">
    <span className="select-none w-10 text-right pr-3 flex-shrink-0 text-xs leading-[1.7rem] tabular-nums text-ink-faint/60 border-r border-line">
      {n}
    </span>
    <span
      className="text-[13px] leading-[1.7rem] group-hover:bg-white/[0.02] w-full whitespace-nowrap text-ink"
      style={{ paddingLeft: `${0.85 + indent * 1.25}rem` }}
    >
      {children}
    </span>
  </div>
)

export const EmptyLine = ({ n }: { n: number }) => <Line n={n} />
