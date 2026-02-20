import {
  Code2,
  Smartphone,
  Settings2,
  Wrench,
  ShieldCheck,
  Gauge,
  Workflow,
  Bot,
  Database,
} from "lucide-react"

const services = [
  {
    category: "Desarrollo de Software",
    description:
      "Creamos soluciones a medida que impulsan tu negocio con tecnologia moderna y escalable.",
    items: [
      {
        icon: Code2,
        title: "Aplicaciones Web",
        description:
          "Desarrollo de aplicaciones web modernas, responsivas y de alto rendimiento.",
      },
      {
        icon: Smartphone,
        title: "Aplicaciones Moviles",
        description:
          "Apps nativas y multiplataforma para iOS y Android adaptadas a tu negocio.",
      },
      {
        icon: Settings2,
        title: "Soluciones Personalizadas",
        description:
          "Software a medida que se integra perfectamente con tus procesos existentes.",
      },
    ],
  },
  {
    category: "Mantenimiento IT",
    description:
      "Mantenemos tu infraestructura tecnologica funcionando de forma optima y segura.",
    items: [
      {
        icon: Wrench,
        title: "Soporte Tecnico",
        description:
          "Asistencia tecnica confiable y rapida para resolver cualquier incidencia.",
      },
      {
        icon: Gauge,
        title: "Optimizacion de Sistemas",
        description:
          "Mejora del rendimiento y la eficiencia de tus sistemas e infraestructura.",
      },
      {
        icon: ShieldCheck,
        title: "Seguridad",
        description:
          "Proteccion integral de tus datos y sistemas contra amenazas digitales.",
      },
    ],
  },
  {
    category: "Integración y Automatización",
    description:
      "Automatizamos tus procesos de negocio integrando herramientas como n8n, IA y gestión de datos.",
    items: [
      {
        icon: Workflow,
        title: "Automatización de Procesos",
        description:
          "Implementación de flujos de trabajo con n8n para conectar tus apps y optimizar tareas.",
      },
      {
        icon: Bot,
        title: "Soluciones con IA",
        description:
          "Integración de inteligencia artificial para potenciar tu negocio y la toma de decisiones.",
      },
      {
        icon: Database,
        title: "Carga Automática de Datos",
        description:
          "Sistemas eficientes para la carga, procesamiento y gestión automatizada de información.",
      },
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-secondary px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FFD700]">
            Productos y Servicios
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Servicios integrales de tecnologia, desde el desarrollo hasta el
            mantenimiento, con la atencion de un equipo dedicado.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16">
          {services.map((group) => (
            <div key={group.category}>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-secondary-foreground">
                  {group.category}
                </h3>
                <p className="mt-1 text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-background p-7 transition-all hover:border-[#FFD700]/40 hover:shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFD700]/10">
                      <item.icon className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <h4 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
