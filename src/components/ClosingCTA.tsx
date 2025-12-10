import { BRAND, WHATSAPP_LINK, SOCIAL_PROOF } from "@/lib/constants";

export function ClosingCTA() {
  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary to-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm text-accent mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {SOCIAL_PROOF.eventsCompleted}+ eventos realizados com sucesso
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Seu evento merece{" "}
            <span className="text-gradient">internet de verdade</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-4">
            Não deixe uma conexão ruim estragar um momento especial. Reserve agora e garanta WiFi de alta velocidade para seu evento.
          </p>

          {/* Slogan */}
          <p className="text-accent font-medium text-lg mb-6">
            {BRAND.slogan}
          </p>

          {/* Urgency */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-10">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-medium text-red-400">
              🔥 Alta demanda em dezembro - Reserve com antecedência!
            </span>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xl px-10 py-5 inline-flex animate-pulse-glow"
              aria-label="Falar no WhatsApp"
            >
              <WhatsAppIcon className="w-7 h-7" />
              Garantir minha reserva agora
            </a>
          </div>

          {/* Trust elements */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-foreground-muted">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-accent" />
              <span>Orçamento em 2 min</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-accent" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-accent" />
              <span>Cancelamento flexível</span>
            </div>
          </div>

          {/* Trust text */}
          <p className="mt-8 text-sm text-foreground-muted">
            Brasília e Entorno • Retirada Imediata • {SOCIAL_PROOF.rating}★ de {SOCIAL_PROOF.totalReviews} avaliações
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
