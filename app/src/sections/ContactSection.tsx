import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Prompt, Terminal } from '@/components/ui/Terminal'
import { DancingCat } from '@/components/ui/DancingCat'
import { EMAIL, SOCIALS } from '@/constants/Nav'
import { editorLineReveal, viewport } from '@/lib/motion'

const CWD = '~/contact'
const GITHUB = SOCIALS.find((s) => s.label === 'GitHub')!.href
const LINKEDIN = SOCIALS.find((s) => s.label === 'LinkedIn')!.href
const BUTTONS = ['email', 'github', 'linkedin', 'help'] as const

// Everything `help` lists. The purr easter egg stays out on purpose.
const HELP: [string, string][] = [
  ['email', 'open your mail app with my address'],
  ['copy', 'copy my email to the clipboard'],
  ['github', 'open my GitHub'],
  ['linkedin', 'open my LinkedIn'],
  ['whoami', 'print the current user'],
  ['ls [-a]', 'list files (-a shows hidden ones)'],
  ['sudo su', 'become root'],
  ['exit', 'leave the root shell'],
  ['clear', 'clear the screen'],
  ['help', 'show this list'],
]

const Ext = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target={href.startsWith('mailto:') ? undefined : '_blank'}
    rel="noopener noreferrer"
    className="link-line text-syn-str hover:text-ice"
  >
    {children}
  </a>
)

// TOML pieces, highlighted the way bat would
const Section = ({ name }: { name: string }) => (
  <>
    <span className="text-syn-punct">[</span>
    <span className="text-syn-type font-medium">{name}</span>
    <span className="text-syn-punct">]</span>
  </>
)

const Pair = ({ k, children }: { k: string; children: ReactNode }) => (
  <>
    <span className="text-syn-fn">{k}</span>
    <span className="text-syn-punct"> = </span>
    {children}
  </>
)

const Str = ({ children }: { children: ReactNode }) => (
  <span className="text-syn-str">"{children}"</span>
)

const TOML: ReactNode[] = [
  <Section name="me" />,
  <Pair k="name">
    <Str>Lukáš Erl</Str>
  </Pair>,
  <Pair k="looking_for">
    <Str>part-time job or internship next to school</Str>
  </Pair>,
  <Pair k="where">
    <Str>on-site in the Czech Republic, or remote</Str>
  </Pair>,
  <Pair k="status">
    <Str>open to work</Str>
  </Pair>,
  null,
  <Section name="links" />,
  <Pair k="email">
    <span className="text-syn-str">"</span>
    <Ext href={`mailto:${EMAIL}`}>{EMAIL}</Ext>
    <span className="text-syn-str">"</span>
  </Pair>,
  <Pair k="github">
    <span className="text-syn-str">"</span>
    <Ext href={GITHUB}>github.com/NightmarePog</Ext>
    <span className="text-syn-str">"</span>
  </Pair>,
  <Pair k="linkedin">
    <span className="text-syn-str">"</span>
    <Ext href={LINKEDIN}>linkedin.com/in/lukáš-erl-7011102a6</Ext>
    <span className="text-syn-str">"</span>
  </Pair>,
]

const BatRule = ({ joint }: { joint: string }) => (
  <div aria-hidden className="text-syn-comment flex overflow-hidden whitespace-nowrap select-none">
    <span className="w-14 shrink-0">{'─'.repeat(7)}</span>
    <span>{joint}</span>
    <span className="overflow-hidden">{'─'.repeat(200)}</span>
  </div>
)

const BatOutput = () => (
  <div className="my-1">
    <BatRule joint="┬" />
    <div className="flex">
      <span className="text-syn-comment w-14 shrink-0 select-none" />
      <span className="text-syn-comment select-none">│</span>
      <span className="pl-3">
        <span className="text-ink-faint">File: </span>
        <span className="text-ink font-semibold">contact.toml</span>
        <span className="text-ink-faint ml-4 hidden sm:inline">Size: 312 B</span>
      </span>
    </div>
    <BatRule joint="┼" />
    {TOML.map((line, i) => (
      <motion.div key={i} variants={editorLineReveal} className="flex">
        <span className="text-syn-comment w-14 shrink-0 pr-4 text-right tabular-nums select-none">
          {i + 1}
        </span>
        <span className="text-syn-comment select-none">│</span>
        <span className="min-w-0 pl-3 break-words">{line}</span>
      </motion.div>
    ))}
    <BatRule joint="┴" />
  </div>
)

const intro = [
  <Prompt key="p1" cwd={CWD}>
    <span>whoami</span>
  </Prompt>,
  <p key="o1" className="text-ink">
    Lukáš Erl <span className="text-ink-faint">(NightmarePog)</span>
  </p>,
  <div key="gap" className="h-3" />,
  <Prompt key="p2" cwd={CWD}>
    <span>
      <span className="text-syn-fn">bat</span> contact.toml
    </span>
  </Prompt>,
  <BatOutput key="bat" />,
  <div key="gap2" className="h-3" />,
  <p key="hint" className="text-syn-comment italic">
    # type help, or click a command below
  </p>,
]

export const ContactSection = () => {
  const [history, setHistory] = useState<ReactNode[]>([])
  const [input, setInput] = useState('')
  const [root, setRoot] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Keep the prompt in view after a command; skip the initial mount so the page doesn't jump
  useEffect(() => {
    if (history.length) scrollRef.current?.scrollIntoView({ block: 'nearest' })
  }, [history])

  const run = async (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    if (cmd === 'clear') {
      setHistory([])
      return
    }

    let output: ReactNode
    switch (cmd) {
      case '':
        output = null
        break
      case 'email':
        window.location.href = `mailto:${EMAIL}`
        output = <span className="text-ink-muted">opening your mail app…</span>
        break
      case 'copy':
        try {
          await navigator.clipboard.writeText(EMAIL)
          output = <span className="text-syn-str">copied {EMAIL} to clipboard</span>
        } catch {
          output = <span className="text-syn-kw">clipboard blocked, the address is {EMAIL}</span>
        }
        break
      case 'github':
      case 'linkedin':
        window.open(cmd === 'github' ? GITHUB : LINKEDIN, '_blank', 'noopener')
        output = <span className="text-ink-muted">opening {cmd} in a new tab…</span>
        break
      case 'help':
        output = (
          <div className="my-1">
            {HELP.map(([name, desc]) => (
              <p key={name} className="flex">
                <span className="text-syn-fn w-24 shrink-0">{name}</span>
                <span className="text-ink-muted">{desc}</span>
              </p>
            ))}
          </div>
        )
        break
      case 'ls':
        output = <span className="text-ink-muted">contact.toml</span>
        break
      case 'ls -a':
      case 'ls -la':
        output = root ? (
          <span className="text-ink-muted">
            . .. contact.toml <span className="text-syn-str font-semibold">.purr*</span>
          </span>
        ) : (
          <span className="text-ink-muted">. .. contact.toml</span>
        )
        break
      case 'whoami':
        output = <span className="text-ink">{root ? 'root' : 'nightmarepog'}</span>
        break
      case 'su':
      case 'sudo su':
      case 'sudo -i':
        output = root ? (
          <span className="text-ink-muted">already root.</span>
        ) : (
          <span className="text-syn-kw">root shell. look around, maybe ls -a.</span>
        )
        setRoot(true)
        break
      case 'exit':
        output = root ? null : <span className="text-ink-muted">nice try, the tab stays open.</span>
        setRoot(false)
        break
      case 'purr':
      case './purr':
      case './.purr':
      case '.purr':
        output = root ? (
          <DancingCat />
        ) : (
          <span className="text-syn-kw">permission denied: purr</span>
        )
        break
      default:
        output = (
          <span className="text-syn-kw">
            command not found: {cmd}. <span className="text-ink-muted">try help</span>
          </span>
        )
    }

    setHistory((h) => [
      ...h,
      <div key={h.length}>
        <Prompt cwd={CWD} root={root}>
          <span>{raw}</span>
        </Prompt>
        {output && <div>{output}</div>}
      </div>,
    ])
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    run(input)
    setInput('')
  }

  return (
    <section id="contact" className="px-6 pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Contact" />

        <Terminal
          title="~/contact — zsh"
          onBodyClick={() => inputRef.current?.focus({ preventScroll: true })}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } } }}
          >
            {intro.map((line, i) => (
              <motion.div key={i} variants={editorLineReveal}>
                {line}
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-3">{history}</div>

          <form onSubmit={submit} className="mt-1">
            <Prompt cwd={CWD} root={root}>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Terminal command"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                className="caret-ice text-ink min-w-0 flex-1 bg-transparent outline-none focus-visible:outline-none"
              />
            </Prompt>
          </form>
          <div ref={scrollRef} />

          <div className="border-line mt-5 flex flex-wrap gap-2 border-t pt-4">
            {BUTTONS.map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  run(cmd)
                }}
                className="border-line text-ink-muted hover:border-ice-line hover:bg-ice-soft hover:text-ice cursor-pointer border px-2.5 py-0.5 text-xs transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </Terminal>
      </div>

      <footer className="border-line bg-surface -mx-6 mt-32 border-t font-mono text-[11px]">
        <div className="text-ink-faint mx-auto flex h-8 max-w-7xl items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-4">
            <span className="text-ice">⎇ main</span>
            <span>© {new Date().getFullYear()} Lukáš Erl</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/NightmarePog/www"
              target="_blank"
              rel="noopener noreferrer"
              className="link-line hover:text-ink-muted"
            >
              source
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}
