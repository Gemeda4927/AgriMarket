export function Stats() {
  const stats = [
    { value: "50K+", label: "Active Farmers", sublabel: "Across 12 countries" },
    { value: "2M+", label: "Livestock Tracked", sublabel: "Real-time monitoring" },
    { value: "85%", label: "Yield Increase", sublabel: "Average improvement" },
    { value: "$12M+", label: "Revenue Generated", sublabel: "For our farmers" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
