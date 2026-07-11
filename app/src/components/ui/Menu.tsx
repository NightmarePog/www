import { MenuIcon } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { NAV, scrollToAnchor } from '@/constants/Nav'

export function Menu() {
  return (
    <Sheet>
      <SheetTrigger
        className="p-2 text-ink-muted hover:text-ink transition-colors cursor-pointer"
        aria-label="Open menu"
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent className="bg-surface border-line">
        <SheetHeader>
          <SheetTitle className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-faint font-normal">
            Index
          </SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {NAV.map(({ title, anchor }) => (
            <SheetClose key={anchor} asChild>
              <button
                onClick={() => scrollToAnchor(anchor)}
                className="px-3 py-3 text-left rounded-md font-mono text-sm uppercase tracking-[0.2em] text-ink-muted hover:text-ink hover:bg-surface-2 transition-colors cursor-pointer"
              >
                {title}
              </button>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
