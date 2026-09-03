import { useState } from 'react'
import { phone, phoneHref } from '../data'

const initialState = {
  name: '',
  company: '',
  phone: '',
  material: '',
  quantity: '',
  notes: '',
}

export default function QuoteForm() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire this up to your backend, form service (e.g. Formspree),
    // or an email API. For now it just confirms locally.
    setSubmitted(true)
  }

  return (
    <section id="quote" className="bg-steel-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="font-body text-sm tracking-wide text-ember-400 mb-3">Request a quote</p>
          <h2 className="font-display text-4xl sm:text-5xl text-steel-100 leading-tight">
            Tell us what you need.
          </h2>
          <p className="mt-4 font-body text-steel-400 max-w-md">
            Share a few details and the team at G.F Steel Technology will get
            back to you.
          </p>
          <a href={phoneHref} className="mt-6 inline-block font-display text-2xl text-ember-500">
            {phone}
          </a>
        </div>

        <div>
          {submitted ? (
            <div className="border border-steel-700 p-8">
              <h3 className="font-display text-2xl text-steel-100">Thanks — request received.</h3>
              <p className="mt-2 font-body text-sm text-steel-400">
                The team will be in touch about pricing and availability.
              </p>
              <button
                onClick={() => {
                  setForm(initialState)
                  setSubmitted(false)
                }}
                className="mt-6 font-body text-sm text-ember-500 border-b border-ember-500 pb-0.5"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Full Name*"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                full
              />
              <Field
                label="Company / Business Name"
                name="company"
                value={form.company}
                onChange={handleChange}
                full
              />
              <Field
                label="Phone Number*"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
              <Field
                label="Material Required*"
                name="material"
                value={form.material}
                onChange={handleChange}
                required
              />
              <Field
                label="Quantity"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
              />
              <div className="sm:col-span-2">
                <label className="block font-body text-xs text-steel-400 mb-1.5">
                  Additional Requirements
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-steel-950 border border-steel-700 focus:border-ember-500 outline-none px-4 py-3 font-body text-sm text-steel-100 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="sm:col-span-2 mt-2 inline-flex items-center justify-center rounded-sm bg-ember-600 hover:bg-ember-500 text-white px-7 py-3.5 font-body font-medium transition-colors"
              >
                Request Quote
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, required, full }) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label className="block font-body text-xs text-steel-400 mb-1.5">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-steel-950 border border-steel-700 focus:border-ember-500 outline-none px-4 py-3 font-body text-sm text-steel-100 transition-colors"
      />
    </div>
  )
}
