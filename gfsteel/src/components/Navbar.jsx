import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-steel-950/95 backdrop-blur border-b border-steel-700' : 'bg-steel-950'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center bg-ember-600 font-display font-black text-white text-sm">
            GF
          </span>
          <span className="font-display font-bold tracking-tight text-steel-100 uppercase text-lg">
            G.F <span className="text-ember-500">Steel</span> Technology
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-body text-xs font-medium uppercase tracking-wide text-steel-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-steel-100 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#quote"
          className="hidden lg:inline-flex items-center gap-2 bg-ember-600 hover:bg-ember-500 text-white px-5 py-2.5 text-xs font-body font-semibold uppercase tracking-wide transition-colors"
        >
          Request a Quote
          <ArrowRight size={14} strokeWidth={2.5} />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-steel-100 p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-steel-950 border-t border-steel-700 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-steel-300 hover:text-steel-100 font-body text-sm font-medium uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-ember-600 text-white px-5 py-3 text-xs font-body font-semibold uppercase tracking-wide"
          >
            Request a Quote
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </div>
      )}
    </header>
  )
}
