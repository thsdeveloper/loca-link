import Image from "next/image";
import { HERO_CONTENT, BRAND, WHATSAPP_LINK, SOCIAL_PROOF } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-background.png"
          alt="Brasília conectada com Starlink"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      {/* Gradient orbs for extra depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start mb-6 animate-fade-in">
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="w-3.5 h-3.5 text-accent" />
                  ))}
                </div>
                <span className="text-sm font-medium text-accent">
                  {SOCIAL_PROOF.rating} ({SOCIAL_PROOF.totalReviews} avaliações)
                </span>
              </div>
            </div>

            {/* Secondary Badges */}
            <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start mb-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-700/50 border border-primary-500/30">
                <MapPinIcon className="w-3.5 h-3.5 text-foreground-muted" />
                <span className="text-sm text-foreground-muted">
                  Brasília, DF
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-700/50 border border-primary-500/30">
                <ClockIcon className="w-3.5 h-3.5 text-foreground-muted" />
                <span className="text-sm text-foreground-muted">
                  Retirada imediata
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-700/50 border border-primary-500/30">
                <span className="text-sm text-foreground-muted">
                  DF e Entorno
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
              <span className="text-gradient">{HERO_CONTENT.headline}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-foreground-muted max-w-xl mx-auto lg:mx-0 mb-4 animate-fade-in-up delay-100 leading-relaxed">
              {HERO_CONTENT.subheadline}
            </p>

            {/* Slogan */}
            <p className="text-accent font-medium text-lg mb-6 animate-fade-in-up delay-200">
              {BRAND.slogan}
            </p>

            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-8 animate-fade-in-up delay-250">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm font-medium text-red-400">
                🔥 Apenas {SOCIAL_PROOF.kitsAvailable} kits disponíveis para dezembro
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-lg px-8 py-4 animate-pulse-glow"
                aria-label="Falar no WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Garantir minha reserva
              </a>
              <a
                href="#planos"
                className="btn-outline text-lg px-8 py-4"
              >
                Ver preços
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-600/30 animate-fade-in-up delay-400">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">{SOCIAL_PROOF.eventsCompleted}+</p>
                <p className="text-sm text-foreground-muted">Eventos realizados</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">200 Mbps</p>
                <p className="text-sm text-foreground-muted">Velocidade média</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">{SOCIAL_PROOF.satisfactionRate}%</p>
                <p className="text-sm text-foreground-muted">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated glow effects */}
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl scale-75 animate-glow-pulse" />
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl scale-50 animate-glow-rotate" />

              {/* Orbiting particles */}
              <div className="absolute inset-0 animate-orbit">
                <div className="absolute top-1/2 left-0 w-2 h-2 bg-accent rounded-full blur-sm" />
              </div>
              <div className="absolute inset-0 animate-orbit-reverse">
                <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-accent/70 rounded-full blur-sm" />
              </div>
              <div className="absolute inset-0 animate-orbit-slow">
                <div className="absolute bottom-1/4 right-0 w-1 h-1 bg-white/50 rounded-full" />
              </div>

              {/* Main image with float animation */}
              <div className="relative rounded-3xl overflow-hidden border border-primary-500/30 shadow-2xl animate-float-slow">
                <Image
                  src="https://starlink.com/public-files/Starlink_StandardActuated_500x500.png"
                  alt="Antena Starlink - Equipamento oficial para locação"
                  width={500}
                  height={500}
                  className="object-contain w-full h-full bg-white/5 p-8 animate-subtle-tilt"
                  priority
                />

                {/* Scanning line effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-scan-line" />
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none" />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-background-secondary/90 backdrop-blur-sm rounded-2xl p-4 border border-primary-500/30 animate-float-badge">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                    <div>
                      <p className="text-sm font-medium">Equipamento disponível para locação</p>
                      <p className="text-xs text-foreground-muted">Retirada + Instalação + Suporte inclusos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-400 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
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

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
