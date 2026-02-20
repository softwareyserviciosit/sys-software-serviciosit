import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Logo className="text-xl" />
        <p className="text-sm text-muted-foreground">
          {"Copyright \u00A9"} {new Date().getFullYear()}{" "}
          <span className="inline-flex items-baseline">
            <span className="inline-block w-1.5 h-1.5 bg-[#FFD700] mr-0.5" />
            SyS
          </span>{" "}
          Software y Servicios IT.
        </p>
      </div>
    </footer>
  )
}
