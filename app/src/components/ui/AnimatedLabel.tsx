import { useState, useEffect } from 'react'

const labels = [
  'Full Stack Developer',
  'Linux User',
  'Cat Lover',
  'Language Creator',
  'Space Enthusiast',
  'Game Developer',
  'Cybersecurity Junior',
]

export const AnimatedLabel = ({ color = '#ececea', className = '' }: { color?: string; className?: string }) => {
  const [displayed, setDisplayed] = useState('')
  const [idx, setIdx] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')

  useEffect(() => {
    const target = labels[idx]
    if (phase === 'typing') {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75)
        return () => clearTimeout(t)
      } else {
        setPhase('pausing')
      }
    } else if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('deleting'), 2200)
      return () => clearTimeout(t)
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
        return () => clearTimeout(t)
      } else {
        setIdx((i) => (i + 1) % labels.length)
        setPhase('typing')
      }
    }
  }, [displayed, phase, idx])

  return (
    <span className={`inline-block ${className}`} style={{ color, minWidth: '18ch' }}>
      {displayed}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1em',
          background: color,
          marginLeft: '1px',
          verticalAlign: 'middle',
          animation: 'blink 1s step-end infinite',
        }}
      />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  )
}
