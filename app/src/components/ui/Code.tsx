import type { ReactNode } from 'react'

// Syntax colours come from the --color-syn-* tokens in index.css
export const KW = ({ children }: { children: ReactNode }) => (
  <span className="text-syn-kw font-medium">{children}</span>
)
export const TY = ({ children }: { children: ReactNode }) => (
  <span className="text-syn-type">{children}</span>
)
export const ST = ({ children }: { children: ReactNode }) => (
  <span className="text-syn-str">{children}</span>
)
export const CM = ({ children }: { children: ReactNode }) => (
  <span className="text-syn-comment italic">{children}</span>
)
export const FN = ({ children }: { children: ReactNode }) => (
  <span className="text-syn-fn">{children}</span>
)
export const VA = ({ children }: { children: ReactNode }) => (
  <span className="text-ink">{children}</span>
)
export const NU = ({ children }: { children: ReactNode }) => (
  <span className="text-syn-num">{children}</span>
)
export const AN = ({ children }: { children: ReactNode }) => (
  <span className="text-syn-prop">{children}</span>
)
export const PL = ({ children }: { children: ReactNode }) => (
  <span className="text-syn-punct">{children}</span>
)

interface LineProps {
  n: number
  children?: ReactNode
  indent?: number
  // Soft-wrap long prose lines (markdown) instead of scrolling horizontally
  wrap?: boolean
}

export const Line = ({ n, children, indent = 0, wrap = false }: LineProps) => (
  <div className="group flex min-h-[1.7rem] font-mono">
    <span className="text-ink-faint/60 border-line w-10 flex-shrink-0 border-r pr-3 text-right text-xs leading-[1.7rem] tabular-nums select-none">
      {n}
    </span>
    <span
      className={`text-ink w-full text-[13px] leading-[1.7rem] group-hover:bg-white/[0.02] ${wrap ? 'pr-5 whitespace-normal' : 'whitespace-nowrap'}`}
      style={{ paddingLeft: `${0.85 + indent * 1.25}rem` }}
    >
      {children}
    </span>
  </div>
)

export const EmptyLine = ({ n }: { n: number }) => <Line n={n} />
