"use client";

import { useState, useEffect, useCallback } from "react";
import { PRICING_PLANS, WHATSAPP_LINK } from "@/lib/constants";

export function Pricing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const totalPlans = PRICING_PLANS.length;

  const getVisibleCards = useCallback(() => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newVisibleCards = getVisibleCards();
      setVisibleCards(newVisibleCards);
      // Ajusta o índice se necessário quando a tela muda de tamanho
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, totalPlans - newVisibleCards)));
    };

    handleResize(); // Executa na montagem
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getVisibleCards, totalPlans]);

  const maxIndex = Math.max(0, totalPlans - visibleCards);
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const goNext = () => {
    if (canGoNext) {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    }
  };

  const goPrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // Calcula a largura de cada card baseado no número de cards visíveis
  const getCardWidth = () => {
    switch (visibleCards) {
      case 1: return "100%";
      case 2: return "calc(50% - 10px)";
      case 3: return "calc(33.333% - 14px)";
      case 4: return "calc(25% - 15px)";
      default: return "calc(25% - 15px)";
    }
  };

  // Calcula o deslocamento do carrossel
  const getTranslateX = () => {
    const gapSize = 20; // gap-5 = 20px
    const cardWidthPercent = 100 / visibleCards;
    const gapOffset = (gapSize * currentIndex) / visibleCards;
    return `calc(-${currentIndex * cardWidthPercent}% - ${currentIndex * gapSize}px + ${gapOffset}px)`;
  };

  return (
    <section id="planos" className="section-padding relative overflow-hidden">
      {/* Background com gradiente mais elaborado */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Orbs de gradiente animados */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-primary-400/15 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-primary-600/30 border border-accent/30 text-sm text-accent mb-6 animate-float-badge">
            <SparklesIcon className="w-4 h-4" />
            Flexibilidade total
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Planos de <span className="text-gradient">locação</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-6">
            Escolha o período ideal para seu evento. Todos os planos incluem equipamento original Starlink e suporte técnico.
          </p>

          {/* Value Comparison Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-accent/10 border border-accent/20">
            <div className="text-left">
              <p className="text-xs text-foreground-muted">Comprar um Starlink</p>
              <p className="text-lg font-bold text-foreground-muted line-through">R$ 2.500+</p>
            </div>
            <div className="w-px h-10 bg-accent/30" />
            <div className="text-left">
              <p className="text-xs text-accent">Alugar com a LocaLink</p>
              <p className="text-lg font-bold text-accent">A partir de R$ 150</p>
            </div>
            <div className="ml-2 px-3 py-1 rounded-full bg-accent text-background text-xs font-bold">
              94% mais barato
            </div>
          </div>
        </div>

        {/* Carrossel Container */}
        <div className="relative px-8 lg:px-16">
          {/* Botão Anterior */}
          <button
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label="Ver plano anterior"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${canGoPrev
                ? "bg-accent/20 border-2 border-accent/50 text-accent hover:bg-accent/30 hover:border-accent hover:scale-110 cursor-pointer shadow-lg shadow-accent/20"
                : "bg-primary-800/50 border border-primary-600/30 text-foreground-muted/30 cursor-not-allowed"
              }`}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* Botão Próximo */}
          <button
            onClick={goNext}
            disabled={!canGoNext}
            aria-label="Ver próximo plano"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${canGoNext
                ? "bg-accent/20 border-2 border-accent/50 text-accent hover:bg-accent/30 hover:border-accent hover:scale-110 cursor-pointer shadow-lg shadow-accent/20"
                : "bg-primary-800/50 border border-primary-600/30 text-foreground-muted/30 cursor-not-allowed"
              }`}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Cards Container com overflow hidden */}
          <div className="overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / visibleCards)}% - ${currentIndex * 20}px))`,
              }}
            >
              {PRICING_PLANS.map((plan, index) => (
                <div
                  key={plan.id}
                  className="flex-shrink-0 group relative rounded-3xl overflow-hidden transition-all duration-500"
                  style={{
                    width: getCardWidth(),
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Card background com glassmorphism */}
                  <div className={`absolute inset-0 ${plan.featured
                      ? "bg-gradient-to-b from-accent/20 via-accent/10 to-accent/5"
                      : "bg-gradient-to-b from-primary-700/60 via-primary-800/40 to-background-secondary/80"
                    }`} />
                  <div className="absolute inset-0 backdrop-blur-sm" />

                  {/* Borda com gradiente */}
                  <div className={`absolute inset-0 rounded-3xl ${plan.featured
                      ? "bg-gradient-to-b from-accent/50 via-accent/30 to-accent/10 p-[2px]"
                      : "bg-gradient-to-b from-primary-500/40 via-primary-600/20 to-transparent p-[1px]"
                    }`}>
                    <div className="absolute inset-[1px] rounded-3xl bg-background-secondary/90" />
                  </div>

                  {/* Badge superior */}
                  {plan.badge && (
                    <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-20">
                      <div className={`px-4 py-1.5 rounded-b-xl text-xs font-bold uppercase tracking-wider ${plan.featured
                          ? "bg-accent text-background shadow-lg shadow-accent/30"
                          : "bg-primary-600 text-accent border-x border-b border-primary-500/30"
                        }`}>
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  {/* Conteúdo do card */}
                  <div className="relative z-10 p-6 pt-8 flex flex-col h-full min-h-[540px]">
                    {/* Ícone e nome */}
                    <div className="text-center mb-4">
                      <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${plan.featured
                          ? "bg-accent/20 border-2 border-accent/40 shadow-lg shadow-accent/20"
                          : "bg-primary-700/70 border border-primary-500/30 group-hover:border-accent/30"
                        }`}>
                        <PlanIcon plan={plan.id} className={`w-8 h-8 ${plan.featured ? "text-accent" : "text-accent"}`} />
                      </div>

                      <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                      <p className="text-xs text-foreground-muted uppercase tracking-wider">{plan.subtitle}</p>
                    </div>

                    {/* Preço */}
                    <div className="text-center mb-6">
                      {plan.price ? (
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-sm text-foreground-muted">R$</span>
                          <span className={`text-4xl font-black ${plan.featured ? "text-accent" : "text-foreground"}`}>
                            {plan.price}
                          </span>
                          <span className="text-sm text-foreground-muted">{plan.priceUnit}</span>
                        </div>
                      ) : (
                        <div className="flex items-baseline justify-center">
                          <span className="text-2xl font-bold text-accent">Sob consulta</span>
                        </div>
                      )}
                      <p className="text-xs text-foreground-muted mt-2 line-clamp-2">{plan.description}</p>
                    </div>

                    {/* Divider decorativo */}
                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className={`w-full border-t ${plan.featured ? "border-accent/30" : "border-primary-500/30"}`} />
                      </div>
                      <div className="relative flex justify-center">
                        <span className={`px-3 text-xs ${plan.featured ? "text-accent bg-accent/10" : "text-foreground-muted bg-background-secondary"} rounded-full`}>
                          Incluído
                        </span>
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-3 flex-grow mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          {feature.included ? (
                            <CheckIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? "text-accent" : "text-accent/80"}`} />
                          ) : (
                            <XIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-foreground-muted/50" />
                          )}
                          <span className={`text-sm ${feature.included ? "text-foreground" : "text-foreground-muted/50 line-through"}`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 group/btn ${plan.featured
                          ? "bg-accent text-background hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
                          : "bg-primary-600 hover:bg-primary-500 text-foreground border border-primary-500/30 hover:border-accent/30"
                        }`}
                    >
                      <WhatsAppIcon className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
                      {plan.isCustom ? "Falar com especialista" : "Contratar agora"}
                    </a>
                  </div>

                  {/* Efeito de hover glow */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${plan.featured
                      ? "bg-accent/5 shadow-[inset_0_0_60px_rgba(34,197,94,0.1)]"
                      : "bg-accent/3 shadow-[inset_0_0_40px_rgba(34,197,94,0.05)]"
                    }`} />

                  {/* Brilho no topo ao hover */}
                  <div className={`absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${plan.featured
                      ? "bg-gradient-to-r from-transparent via-accent to-transparent"
                      : "bg-gradient-to-r from-transparent via-accent/50 to-transparent"
                    }`} />

                  {/* Indicador de plano em destaque */}
                  {plan.featured && (
                    <div className="absolute -inset-[1px] rounded-3xl border-2 border-accent/40 pointer-events-none" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de página */}
          {maxIndex > 0 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-primary-600 hover:bg-primary-500 w-2.5"
                    }`}
                  aria-label={`Ir para página ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom note aprimorado */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 rounded-2xl bg-primary-800/50 border border-primary-600/30">
            <div className="flex items-center gap-2">
              <TruckIcon className="w-5 h-5 text-accent" />
              <span className="text-sm text-foreground-muted">Retirada imediata</span>
            </div>
            <div className="h-4 w-px bg-primary-600/50 hidden sm:block" />
            <div className="flex items-center gap-2">
              <ToolIcon className="w-5 h-5 text-accent" />
              <span className="text-sm text-foreground-muted">Instalação simples</span>
            </div>
            <div className="h-4 w-px bg-primary-600/50 hidden sm:block" />
            <div className="flex items-center gap-2">
              <HeadphonesIcon className="w-5 h-5 text-accent" />
              <span className="text-sm text-foreground-muted">Suporte incluso</span>
            </div>
          </div>
          <p className="text-foreground-muted/70 text-sm mt-4">
            * Valores sujeitos a disponibilidade. Consulte condições especiais para eventos de longa duração.
          </p>
        </div>
      </div>
    </section>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
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
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function ToolIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function HeadphonesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0118 0v6" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
    </svg>
  );
}

function PlanIcon({ plan, className }: { plan: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    "1-day": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    weekend: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 10h18" />
        <path d="M9 16l2 2 4-4" />
      </svg>
    ),
    "1-week": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
        <path d="M16 18h.01" />
      </svg>
    ),
    "1-month": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
        <path d="M17 14h-6" />
        <path d="M13 18H7" />
        <path d="M7 14h.01" />
        <path d="M17 18h.01" />
      </svg>
    ),
    custom: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  };

  return <>{icons[plan] || icons.custom}</>;
}
