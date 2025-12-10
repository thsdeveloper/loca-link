import {
  Header,
  Hero,
  HowItWorks,
  Benefits,
  Testimonials,
  UseCases,
  Pricing,
  TrustBadges,
  FAQ,
  ClosingCTA,
  WhatsAppButton,
  Footer,
} from "@/components";
import { BRAND, SEO } from "@/lib/constants";

// JSON-LD Structured Data for LocalBusiness - Brasília DF
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SEO.url}/#organization`,
  name: `${BRAND.name} - Aluguel de Starlink Brasília`,
  alternateName: ["LocaLink Brasília", "Starlink Brasília", "Aluguel Starlink DF"],
  description: SEO.description,
  url: SEO.url,
  image: `${SEO.url}${SEO.image}`,
  telephone: "+55 61 99999-9999",
  email: "contato@localink.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Brasília",
    addressLocality: "Brasília",
    addressRegion: "DF",
    postalCode: "70000-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -15.7801,
    longitude: -47.9292,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Brasília",
      "@id": "https://www.wikidata.org/wiki/Q2844",
    },
    {
      "@type": "State",
      name: "Distrito Federal",
    },
    {
      "@type": "AdministrativeArea",
      name: "Entorno do Distrito Federal",
    },
    {
      "@type": "City",
      name: "Valparaíso de Goiás",
    },
    {
      "@type": "City",
      name: "Águas Lindas de Goiás",
    },
    {
      "@type": "City",
      name: "Luziânia",
    },
    {
      "@type": "City",
      name: "Formosa",
    },
  ],
  serviceType: [
    "Aluguel de Starlink em Brasília",
    "Locação de Starlink DF",
    "Internet para eventos Brasília",
    "WiFi para casamentos Brasília",
    "Internet via satélite Distrito Federal",
    "Starlink temporário Brasília",
  ],
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "Dinheiro, Cartão de Crédito, Cartão de Débito, PIX, Transferência Bancária",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "22:00",
  },
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planos de Aluguel Starlink Brasília",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aluguel Starlink 1 Dia - Brasília",
        },
        areaServed: { "@type": "City", name: "Brasília" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aluguel Starlink Final de Semana - Brasília",
        },
        areaServed: { "@type": "City", name: "Brasília" },
      },
    ],
  },
};

// JSON-LD for Service - Brasília
const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Aluguel de Starlink em Brasília DF",
  description: "Serviço de locação de internet Starlink em Brasília e Distrito Federal. Alugue por dia, final de semana, semana ou mês. Retirada imediata em Brasília.",
  provider: {
    "@type": "LocalBusiness",
    name: BRAND.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brasília",
      addressRegion: "DF",
      addressCountry: "BR",
    },
  },
  serviceType: "Aluguel de Internet via Satélite",
  category: "Internet para Eventos",
  areaServed: [
    { "@type": "City", name: "Brasília" },
    { "@type": "State", name: "Distrito Federal" },
    { "@type": "City", name: "Taguatinga" },
    { "@type": "City", name: "Ceilândia" },
    { "@type": "City", name: "Águas Claras" },
    { "@type": "City", name: "Samambaia" },
    { "@type": "City", name: "Gama" },
    { "@type": "City", name: "Planaltina" },
    { "@type": "City", name: "Sobradinho" },
    { "@type": "City", name: "Valparaíso de Goiás" },
    { "@type": "City", name: "Luziânia" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planos de Aluguel Starlink Brasília",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aluguel Starlink 1 Dia - Brasília DF",
          description: "Ideal para eventos pontuais e transmissões em Brasília",
        },
        areaServed: { "@type": "City", name: "Brasília" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aluguel Starlink Final de Semana - Brasília DF",
          description: "Perfeito para casamentos e festivais em Brasília e DF",
        },
        areaServed: { "@type": "City", name: "Brasília" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aluguel Starlink 1 Semana - Brasília DF",
          description: "Para feiras, congressos e projetos em Brasília",
        },
        areaServed: { "@type": "City", name: "Brasília" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aluguel Starlink 1 Mês - Brasília DF",
          description: "Obras e projetos temporários em Brasília e região",
        },
        areaServed: { "@type": "City", name: "Brasília" },
      },
    ],
  },
};

// JSON-LD for FAQ - Brasília
const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Onde posso alugar Starlink em Brasília?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A LocaLink oferece aluguel de Starlink em Brasília, DF com retirada imediata. Atendemos todo o Distrito Federal, Entorno e região de Goiás. Entre em contato pelo WhatsApp para reservar.",
      },
    },
    {
      "@type": "Question",
      name: "Precisa ter energia elétrica no local?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, o equipamento Starlink precisa de uma tomada comum (110V ou 220V). Se seu evento em Brasília não tiver energia, podemos indicar parceiros que fornecem geradores.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona em área rural do DF ou muito remota?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! O Starlink funciona perfeitamente em áreas rurais de Brasília, fazendas no entorno do DF e regiões remotas de Goiás. Funciona via satélite, basta ter visão aberta do céu.",
      },
    },
    {
      "@type": "Question",
      name: "Como é feita a retirada em Brasília?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Você retira o equipamento diretamente em Brasília, DF. A instalação é super simples: a antena precisa ficar em local com visão clara do céu. Em poucos minutos você já está conectado!",
      },
    },
    {
      "@type": "Question",
      name: "Qual velocidade de internet posso esperar em Brasília?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Starlink oferece velocidades entre 100 e 200 Mbps em Brasília e região, com latência de 20 a 40ms. Ideal para eventos, streaming, videochamadas e múltiplos dispositivos.",
      },
    },
    {
      "@type": "Question",
      name: "Posso usar para fazer lives em eventos em Brasília?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Com certeza! A baixa latência e alta velocidade do Starlink são perfeitas para transmissões ao vivo de eventos em Brasília, shows e casamentos no DF.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês atendem em Brasília e região?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Estamos localizados em Brasília, DF e atendemos todo o Distrito Federal, Entorno e cidades como Valparaíso, Águas Lindas, Luziânia, Formosa e região. Retirada imediata!",
      },
    },
    {
      "@type": "Question",
      name: "E se der algum problema durante o evento em Brasília?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oferecemos suporte técnico durante todo o período de locação em Brasília e DF. Nossa equipe está pronta para ajudar remotamente ou presencialmente na região.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <UseCases />
        <Pricing />
        <TrustBadges />
        <FAQ />
        <ClosingCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
