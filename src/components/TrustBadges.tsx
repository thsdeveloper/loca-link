import { TRUST_BADGES, SOCIAL_PROOF } from "@/lib/constants";

export function TrustBadges() {
  return (
    <section id="confianca" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background-secondary" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm text-accent mb-4">
            <StarIcon className="w-4 h-4" />
            {SOCIAL_PROOF.rating}★ de {SOCIAL_PROOF.totalReviews} avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Por que confiar na LocaLink
          </h2>
          <p className="text-lg text-foreground-muted max-w-xl mx-auto">
            Mais de {SOCIAL_PROOF.eventsCompleted} eventos realizados com {SOCIAL_PROOF.satisfactionRate}% de satisfação
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.title}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-background/50 border border-primary-500/20 card-hover"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300">
                <BadgeIcon icon={badge.icon} className="w-8 h-8 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">{badge.title}</h3>
              <p className="text-sm text-foreground-muted">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Additional trust elements */}
        <div className="mt-16 pt-12 border-t border-primary-500/20">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground-muted">Equipamentos originais Starlink</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground-muted">Garantia de funcionamento</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground-muted">Sem burocracia</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground-muted">{SOCIAL_PROOF.eventsCompleted}+ eventos realizados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function BadgeIcon({ icon, className }: { icon: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    "shield-check": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    rocket: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    headphones: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    "map-pin": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  };

  return <>{icons[icon] || icons["shield-check"]}</>;
}

