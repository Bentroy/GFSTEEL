import { useEffect, useState } from 'react'
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
        scrolled ? 'bg-steel-950/95 backdrop-blur border-b border-steel-700' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#home" className="font-display text-2xl tracking-tight text-steel-100">
          G.F <span className="text-ember-500">Steel</span> Technology
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-body text-sm text-steel-300">
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
          className="hidden lg:inline-flex items-center rounded-sm bg-ember-600 hover:bg-ember-500 text-white px-5 py-2.5 text-sm font-medium transition-colors"
        >
          Request a Quote
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-steel-100 p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-steel-950 border-t border-steel-700 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-steel-300 hover:text-steel-100 font-body text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-sm bg-ember-600 text-white px-5 py-3 text-sm font-medium"
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  )
}
