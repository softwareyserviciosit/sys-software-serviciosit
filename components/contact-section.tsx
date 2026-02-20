"use client"

import { useState } from "react"
import { Mail, Send, MessageCircle, Linkedin } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FFD700]">
            Contacto
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hablemos de tu Proyecto
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Contanos sobre tu idea o necesidad y te respondemos a la brevedad
            con una propuesta personalizada.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col justify-center gap-6 lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFD700]/10">
                <Mail className="h-5 w-5 text-[#FFD700]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Correo Electrónico
                </p>
                <a
                  href="mailto:softwareyserviciosit@gmail.com"
                  className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  softwareyserviciosit@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFD700]/10">
                <MessageCircle className="h-5 w-5 text-[#FFD700]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/5493876150875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  +54 9 387 615-0875
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFD700]/10">
                <Linkedin className="h-5 w-5 text-[#FFD700]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/company/sys-software-servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  SyS Software y Servicios
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Si tenés un desafío tecnológico,{" "}
                <span className="font-semibold text-[#FFD700]">escribinos</span>.
                Estamos acá para escuchar tus necesidades y comenzar a trabajar juntos.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/5 p-12 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FFD700]/20">
                  <Send className="h-6 w-6 text-[#FFD700]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Mensaje enviado
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Gracias por tu consulta. Te respondemos a la brevedad.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-xl border border-border bg-card p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-[#FFD700] focus:outline-none focus:ring-1 focus:ring-[#FFD700]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Correo
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@correo.com"
                      className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-[#FFD700] focus:outline-none focus:ring-1 focus:ring-[#FFD700]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Contame sobre tu proyecto o necesidad..."
                    className="resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-[#FFD700] focus:outline-none focus:ring-1 focus:ring-[#FFD700]"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFD700] px-7 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-[#f0c800] hover:shadow-md"
                >
                  Enviar Mensaje
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
