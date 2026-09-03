import { navLinks, phone, phoneHref } from '../data'

export default function Footer() {
  return (
    <footer className="bg-steel-900 border-t border-steel-800 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl text-steel-100">
            G.F <span className="text-ember-500">Steel</span> Technology
          </p>
          <p className="mt-3 font-body text-sm text-steel-400 max-w-xs">
            Iron, steel and building materials supplier in Lagos.
          </p>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-wide text-steel-500 uppercase mb-4">Quick links</h4>
          <ul className="space-y-2">
            {navLinks
              .filter((l) => l.label !== 'Why Us')
              .map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-body text-sm text-steel-400 hover:text-steel-100">
                    {l.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-wide text-steel-500 uppercase mb-4">Contact</h4>
          <a href={phoneHref} className="block font-body text-sm text-steel-400 hover:text-steel-100">
            {phone}
          </a>
          <p className="mt-2 font-body text-sm text-steel-400">
            Ifesowapo Iron Market,
            <br />
            Orile Iganmu, Lagos
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-12 pt-6 border-t border-steel-800 flex flex-col sm:flex-row justify-between gap-2">
        <p className="font-body text-xs text-steel-500">
          &copy; {new Date().getFullYear()} G.F Steel Technology. All rights reserved.
        </p>
        <p className="font-body text-xs text-steel-500">Iron &middot; Steel &middot; Building Materials</p>
      </div>
    </footer>
  )
}
