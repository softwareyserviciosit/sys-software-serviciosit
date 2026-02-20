import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      {/* Subtle decorative accent */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-[#FFD700]/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">

        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          <span className="inline-flex items-baseline">
            <span className="inline-block w-3 h-3 bg-[#FFD700] mr-1 sm:w-4 sm:h-4 translate-y-[-2px]" />
            <span></span>
          </span>{" "}
          Software y Servicios IT
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Soluciones de desarrollo y mantenimiento IT a medida, respaldadas por
          un equipo de profesionales.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#FFD700] px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-[#f0c800] hover:shadow-md"
          >
            Consulta Gratuita
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  )
}
