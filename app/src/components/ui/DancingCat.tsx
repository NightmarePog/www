import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Each move is 5 lines; the routine below plays them in order
const MOVES = {
  left: String.raw`  ♪
\  /\_/\
 \( ^w^ )
   |   |\_
   /   \   ~`,
  up: String.raw`      ♫
 \ /\_/\ /
  ( owo )
   |   |
  _/   \_  ~`,
  right: String.raw`          ♪
    /\_/\  /
   ( ^w^ )/
  _/|   |
 ~  /   \ `,
  jump: String.raw` *    ♫    *
    /\_/\
   ( >w< )
   /|___|\
    ^   ^  ~`,
  tired: String.raw`
    /\_/\
   ( -w- ) z z
    |   |
   (__|__)~`,
}

const ROUTINE: (keyof typeof MOVES)[] = [
  'left',
  'up',
  'right',
  'up',
  'left',
  'jump',
  'right',
  'jump',
]
// Horizontal sway per beat, in characters
const SWAY = [0, 2, 4, 6, 4, 2]
const FLOOR = '=-'
const BEATS = 32
const TEMPO_MS = 200

const tone = (char: string) => {
  if ('♪♫'.includes(char)) return 'text-syn-type'
  if (char === '*') return 'text-syn-prop'
  if (char === '~') return 'text-syn-kw'
  if ('^owz><-'.includes(char)) return 'text-ice'
  return 'text-ink'
}

// Colour runs of same-class characters instead of one span per char
const Colored = ({ text }: { text: string }) => {
  const runs: { cls: string; text: string }[] = []
  for (const char of text) {
    const cls = tone(char)
    const last = runs[runs.length - 1]
    if (last && last.cls === cls) last.text += char
    else runs.push({ cls, text: char })
  }
  return (
    <>
      {runs.map((run, i) => (
        <span key={i} className={run.cls}>
          {run.text}
        </span>
      ))}
    </>
  )
}

// The hidden `purr` program from the contact terminal
export const DancingCat = () => {
  const reduceMotion = useReducedMotion()
  const [beat, setBeat] = useState(0)
  const done = reduceMotion || beat >= BEATS

  useEffect(() => {
    if (done) return
    const t = setTimeout(() => setBeat((b) => b + 1), TEMPO_MS)
    return () => clearTimeout(t)
  }, [beat, done])

  const frame = MOVES[done ? 'tired' : ROUTINE[beat % ROUTINE.length]]
  const pad = ' '.repeat(done ? 2 : SWAY[beat % SWAY.length])
  const floor = Array.from({ length: 20 }, (_, i) => FLOOR[(i + beat) % 2]).join('')

  return (
    <div className="my-2" aria-label="An ASCII cat dancing">
      <pre aria-hidden className="leading-tight">
        {frame.split('\n').map((line, i) => (
          <div key={i}>
            <Colored text={pad + line} />
          </div>
        ))}
        <div className={done ? 'text-ink-faint' : beat % 2 ? 'text-syn-prop' : 'text-syn-fn'}>
          {floor}
        </div>
      </pre>
      <p className={`mt-1 ${done ? 'text-ink-muted' : 'text-syn-prop'}`}>
        {done ? 'the cat is tired. purr.' : `purr${'.'.repeat((beat % 3) + 1)} ♪`}
      </p>
    </div>
  )
}
