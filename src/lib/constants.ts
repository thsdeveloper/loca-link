// Configurações de contato
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999";
export const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de saber mais sobre o aluguel de Starlink para meu evento.");
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// Informações da marca
export const BRAND = {
  name: "LocaLink",
  slogan: "Leve internet de verdade para qualquer lugar.",
  description: "Aluguel de Starlink em Brasília e região do DF. Locação de antenas Starlink com retirada imediata, instalação simples e internet de alta velocidade para eventos, casamentos, shows e projetos temporários.",
  location: {
    city: "Brasília",
    state: "DF",
    region: "Distrito Federal e Entorno",
    country: "Brasil",
  },
} as const;

// Paleta de cores
export const COLORS = {
  primary: {
    50: "#e8edec",
    100: "#d1dad9",
    200: "#a3b5b3",
    300: "#76918d",
    400: "#486c67",
    500: "#2b3d3b",
    600: "#202e2c",
    700: "#161f1e",
    800: "#0b0f0f",
    900: "#000000",
  },
  accent: {
    green: "#22c55e",
    greenLight: "#4ade80",
    greenDark: "#16a34a",
  },
} as const;

// Textos do Hero
export const HERO_CONTENT = {
  badge: "Aluguel de Starlink",
  headline: "Aluguel de Starlink em Brasília",
  subheadline: "Alugue Starlink em Brasília e região do DF com retirada imediata. Internet de alta velocidade para seu evento, casamento ou projeto — sem burocracia, sem fidelidade.",
  cta: "Solicitar Orçamento",
} as const;

// Passos do "Como Funciona"
export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Escolha seu evento",
    description: "Informe a data, local e duração do seu evento ou projeto.",
    icon: "calendar",
  },
  {
    step: 2,
    title: "Retire e instale",
    description: "Retire o equipamento e instale no local do seu evento.",
    icon: "truck",
  },
  {
    step: 3,
    title: "Conecte e use",
    description: "É só conectar seus dispositivos e aproveitar a internet.",
    icon: "wifi",
  },
  {
    step: 4,
    title: "Retirada ao final",
    description: "Ao término, retiramos o equipamento sem preocupação.",
    icon: "check",
  },
] as const;

// Benefícios
export const BENEFITS = [
  {
    title: "Internet de verdade",
    description: "Conexão estável e confiável mesmo em lugares remotos, sem depender de infraestrutura local.",
    icon: "globe",
  },
  {
    title: "Alta velocidade",
    description: "Velocidades de 100 a 200 Mbps para streaming, lives e múltiplos dispositivos.",
    icon: "zap",
  },
  {
    title: "Baixa latência",
    description: "Latência de apenas 20-40ms, ideal para videochamadas e transmissões ao vivo.",
    icon: "activity",
  },
  {
    title: "Instalação rápida",
    description: "Equipamento pronto para uso em minutos, sem complicações técnicas.",
    icon: "clock",
  },
  {
    title: "Cobertura nacional",
    description: "Funciona em todo o Brasil, de norte a sul, em qualquer tipo de terreno.",
    icon: "map",
  },
  {
    title: "Suporte dedicado",
    description: "Equipe técnica disponível durante todo o período de locação.",
    icon: "headphones",
  },
] as const;

// Casos de uso
export const USE_CASES = [
  { name: "Shows e festivais", icon: "music" },
  { name: "Casamentos", icon: "heart" },
  { name: "Fazendas e sítios", icon: "home" },
  { name: "Retiros espirituais", icon: "sun" },
  { name: "Congressos e feiras", icon: "users" },
  { name: "Eventos corporativos", icon: "briefcase" },
  { name: "Transmissões ao vivo", icon: "video" },
  { name: "Obras e canteiros", icon: "hard-hat" },
  { name: "Áreas rurais", icon: "tree" },
  { name: "Expedições", icon: "compass" },
] as const;

// Planos de locação
export const PRICING_PLANS = [
  {
    id: "1-day",
    name: "1 Dia",
    description: "Ideal para eventos pontuais e transmissões.",
    featured: false,
  },
  {
    id: "weekend",
    name: "Final de Semana",
    description: "Perfeito para casamentos e festivais de 2-3 dias.",
    featured: true,
  },
  {
    id: "1-week",
    name: "1 Semana",
    description: "Para feiras, congressos e projetos curtos.",
    featured: false,
  },
  {
    id: "1-month",
    name: "1 Mês",
    description: "Obras, projetos temporários e uso prolongado.",
    featured: false,
  },
  {
    id: "custom",
    name: "Personalizado",
    description: "Plano sob medida para grandes eventos e necessidades especiais.",
    featured: false,
    isCustom: true,
  },
] as const;

// Selos de confiança
export const TRUST_BADGES = [
  {
    title: "Equipamentos Originais",
    description: "Antenas Starlink genuínas e certificadas",
    icon: "shield-check",
  },
  {
    title: "Retirada Imediata",
    description: "Retire agora em Brasília, DF",
    icon: "rocket",
  },
  {
    title: "Suporte Total",
    description: "Assistência técnica durante todo o evento",
    icon: "headphones",
  },
  {
    title: "Brasília e Entorno",
    description: "Atendemos DF, Goiás e região",
    icon: "map-pin",
  },
] as const;

// FAQ
export const FAQ_ITEMS = [
  {
    question: "Precisa ter energia elétrica no local?",
    answer: "Sim, o equipamento Starlink precisa de uma tomada comum (110V ou 220V). Se seu evento não tiver energia, podemos indicar parceiros que fornecem geradores.",
  },
  {
    question: "Funciona em área rural ou muito remota?",
    answer: "Sim! O Starlink foi projetado exatamente para isso. Funciona via satélite, então não depende de torres de celular ou cabos de internet. Basta ter visão aberta do céu.",
  },
  {
    question: "Como é feita a instalação?",
    answer: "Você retira o equipamento conosco e faz a instalação no local. A antena precisa ficar em um local com visão clara do céu. Em poucos minutos você já está conectado. É super simples!",
  },
  {
    question: "Qual velocidade de internet posso esperar?",
    answer: "O Starlink oferece velocidades entre 100 e 200 Mbps, com latência de 20 a 40ms. Ideal para streaming, videochamadas e múltiplos dispositivos conectados.",
  },
  {
    question: "Posso usar para fazer lives e transmissões?",
    answer: "Com certeza! A baixa latência e alta velocidade do Starlink são perfeitas para transmissões ao vivo em plataformas como YouTube, Instagram e Twitch.",
  },
  {
    question: "Vocês atendem em Brasília e região?",
    answer: "Sim! Estamos localizados em Brasília, DF e atendemos todo o Distrito Federal, Entorno e cidades de Goiás como Valparaíso, Águas Lindas, Luziânia, Formosa, Planaltina de Goiás e região. Retirada imediata em Brasília!",
  },
  {
    question: "E se der algum problema durante o evento?",
    answer: "Oferecemos suporte técnico durante todo o período de locação. Em caso de qualquer problema, nossa equipe está pronta para ajudar remotamente ou presencialmente.",
  },
] as const;

// SEO
export const SEO = {
  title: "Aluguel de Starlink em Brasília DF | LocaLink - Internet para Eventos",
  description: "Aluguel de Starlink em Brasília e DF. Locação de internet via satélite para eventos, casamentos, shows e projetos. Retirada imediata em Brasília. Internet de alta velocidade 100-200 Mbps. Ligue agora!",
  keywords: [
    // Principais - Brasília
    "aluguel de starlink brasília",
    "starlink brasília",
    "locação starlink brasília",
    "aluguel starlink df",
    "starlink distrito federal",
    "alugar starlink brasília",
    // Eventos em Brasília
    "internet para eventos brasília",
    "wifi para eventos brasília",
    "internet para casamento brasília",
    "internet para festas brasília",
    "internet para shows brasília",
    "internet para congressos brasília",
    // Região
    "starlink entorno df",
    "aluguel starlink goiás",
    "internet via satélite brasília",
    "internet rural brasília",
    "internet fazenda df",
    // Gerais com localização
    "locação internet evento brasília",
    "aluguel internet temporária brasília",
    "starlink temporário brasília",
    "internet portátil brasília df",
    // Long tail
    "onde alugar starlink em brasília",
    "aluguel de antena starlink brasília",
    "starlink para evento em brasília",
    "internet satélite aluguel brasília",
  ],
  url: "https://localink.com.br",
  image: "/og-image.jpg",
  location: {
    city: "Brasília",
    state: "DF",
    country: "Brasil",
    region: "Centro-Oeste",
  },
} as const;

