export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline text-2xl font-bold tracking-tight ${className}`}>
      <span className="inline-block w-2.5 h-2.5 bg-[#FFD700] mr-0.5 translate-y-[-1px]" />
      <span className="text-foreground">SyS</span>
    </span>
  )
}
