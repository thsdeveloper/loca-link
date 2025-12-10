import { BENEFITS } from "@/lib/constants";

export function Benefits() {
  return (
    <section id="beneficios" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-700/50 border border-primary-500/30 text-sm text-accent mb-4">
            Por que escolher a LocaLink
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Benefícios exclusivos
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Internet de verdade onde você precisa, quando você precisa
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BENEFITS.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-background-secondary/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-primary-500/20 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
                <BenefitIcon icon={benefit.icon} className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-foreground-muted leading-relaxed">{benefit.description}</p>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitIcon({ icon, className }: { icon: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    globe: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    zap: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    activity: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    clock: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    map: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    ),
    headphones: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  };

  return <>{icons[icon] || icons.globe}</>;
}

