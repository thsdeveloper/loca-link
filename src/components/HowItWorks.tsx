import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background-secondary" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-700/50 border border-primary-500/30 text-sm text-accent mb-4">
            Simples e rápido
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Como funciona
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Em apenas 4 passos, você tem internet de alta velocidade no seu evento
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative group"
            >
              {/* Connector line */}
              {index < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent z-0" />
              )}

              {/* Card */}
              <div className="relative bg-background-tertiary/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20 card-hover h-full">
                {/* Step number */}
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-xl font-bold text-accent">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary-700/50 flex items-center justify-center mb-4">
                  <StepIcon icon={step.icon} className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-foreground-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepIcon({ icon, className }: { icon: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    calendar: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    truck: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    wifi: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
    check: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  };

  return <>{icons[icon] || icons.check}</>;
}

