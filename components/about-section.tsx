import { Users, Award, Handshake } from "lucide-react"

const highlights = [
  {
    icon: Users,
    title: "Respaldo SyS",
    description:
      "SyS brinda soluciones integrales asumiendo la responsabilidad total de cada proyecto. Tu tecnología, garantizada por nosotros.",
  },
  {
    icon: Award,
    title: "Calidad Profesional",
    description:
      "Un equipo con formacion solida en sistemas e informática, con experiencia en proyectos reales y tecnologias actuales.",
  },
  {
    icon: Handshake,
    title: "Compromiso Total",
    description:
      "Cada proyecto recibe nuestra atencion completa. Tu exito es la prioridad de todo el equipo.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FFD700]">
            Sobre nosotros
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Somos un equipo de profesionales de la informatica dedicados
            a ofrecer servicios personalizados y de alta calidad. Nuestro enfoque
            combina la solidez tecnica con un trato cercano y directo, asegurando
            que cada solucion se adapte perfectamente a las necesidades de
            nuestros clientes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-[#FFD700]/40 hover:shadow-sm"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFD700]/10">
                <item.icon className="h-5 w-5 text-[#FFD700]" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
