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
    title: "Nunca mais passe vergonha",
    description: "Chega de WiFi travando na hora da live ou dos stories. Internet estável mesmo em lugares sem cobertura.",
    icon: "globe",
  },
  {
    title: "Velocidade de verdade",
    description: "Até 200 Mbps para streaming, lives e centenas de convidados conectados ao mesmo tempo.",
    icon: "zap",
  },
  {
    title: "Zero travamento em lives",
    description: "Latência de apenas 20-40ms. Perfeito para videochamadas, transmissões ao vivo e jogos online.",
    icon: "activity",
  },
  {
    title: "Pronto em 5 minutos",
    description: "Sem técnico, sem complicação. Conecte, aponte pro céu e pronto. Qualquer um consegue instalar.",
    icon: "clock",
  },
  {
    title: "Funciona em qualquer lugar",
    description: "Fazenda, sítio, praia, montanha... Se tem céu, tem internet. Cobertura em todo o Brasil.",
    icon: "map",
  },
  {
    title: "Suporte na hora H",
    description: "Problemas no dia do evento? Nossa equipe resolve por WhatsApp ou vai até você se precisar.",
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
    subtitle: "Evento pontual",
    description: "Ideal para eventos pontuais, apresentações e transmissões de curta duração.",
    price: "150",
    priceUnit: "/dia",
    featured: false,
    badge: null,
    isCustom: false,
    features: [
      { text: "Internet até 200 Mbps", included: true },
      { text: "1 antena Starlink", included: true },
      { text: "Suporte via WhatsApp", included: true },
      { text: "Manual de instalação", included: true },
      { text: "Retirada em Brasília", included: true },
      { text: "Cabeamento extra", included: false },
    ],
  },
  {
    id: "weekend",
    name: "Final de Semana",
    subtitle: "Sexta a Domingo",
    description: "Perfeito para casamentos, festivais e eventos de 2-3 dias.",
    price: "350",
    priceUnit: "/3 dias",
    featured: true,
    badge: "Mais popular",
    isCustom: false,
    features: [
      { text: "Internet até 200 Mbps", included: true },
      { text: "1 antena Starlink", included: true },
      { text: "Suporte 24h por WhatsApp", included: true },
      { text: "Manual + vídeo tutorial", included: true },
      { text: "Retirada em Brasília", included: true },
      { text: "10m de cabo extra", included: true },
    ],
  },
  {
    id: "1-week",
    name: "1 Semana",
    subtitle: "7 dias corridos",
    description: "Para feiras, congressos, filmagens e projetos curtos.",
    price: "600",
    priceUnit: "/semana",
    featured: false,
    badge: "Economia",
    isCustom: false,
    features: [
      { text: "Internet até 200 Mbps", included: true },
      { text: "1 antena Starlink", included: true },
      { text: "Suporte prioritário", included: true },
      { text: "Kit completo instalação", included: true },
      { text: "Retirada em Brasília", included: true },
      { text: "20m de cabo extra", included: true },
    ],
  },
  {
    id: "1-month",
    name: "1 Mês",
    subtitle: "30 dias corridos",
    description: "Obras, projetos temporários, home office rural e uso prolongado.",
    price: "1.200",
    priceUnit: "/mês",
    featured: false,
    badge: "Melhor custo",
    isCustom: false,
    features: [
      { text: "Internet até 200 Mbps", included: true },
      { text: "1 antena Starlink", included: true },
      { text: "Suporte técnico dedicado", included: true },
      { text: "Kit profissional", included: true },
      { text: "Entrega em Brasília", included: true },
      { text: "Tripé ou suporte incluso", included: true },
    ],
  },
  {
    id: "custom",
    name: "Personalizado",
    subtitle: "Sob medida",
    description: "Plano customizado para grandes eventos, múltiplas antenas e necessidades especiais.",
    price: null,
    priceUnit: null,
    featured: false,
    badge: "Enterprise",
    isCustom: true,
    features: [
      { text: "Múltiplas antenas", included: true },
      { text: "Cobertura expandida", included: true },
      { text: "Técnico no local", included: true },
      { text: "Instalação profissional", included: true },
      { text: "Contrato flexível", included: true },
      { text: "SLA garantido", included: true },
    ],
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
  {
    question: "Posso cancelar ou alterar a reserva?",
    answer: "Sim! Oferecemos flexibilidade total. Você pode cancelar ou alterar sua reserva com até 48h de antecedência sem custo adicional. Para alterações de última hora, entre em contato que faremos o possível para ajudar.",
  },
  {
    question: "Qual a garantia do equipamento?",
    answer: "O equipamento é 100% original Starlink e testado antes de cada locação. Em caso de qualquer defeito técnico, substituímos o equipamento sem custo adicional ou devolvemos seu dinheiro.",
  },
  {
    question: "Vocês emitem nota fiscal?",
    answer: "Sim! Emitimos nota fiscal para todos os serviços de locação. Ideal para empresas e eventos corporativos que precisam de documentação fiscal.",
  },
  {
    question: "Posso pagar parcelado ou via PIX?",
    answer: "Aceitamos PIX, cartão de crédito (até 3x sem juros), cartão de débito e transferência bancária. Para reservas maiores, oferecemos condições especiais de parcelamento.",
  },
] as const;

// Estatísticas de prova social
export const SOCIAL_PROOF = {
  eventsCompleted: 127,
  rating: 4.9,
  totalReviews: 127,
  satisfactionRate: 98,
  kitsAvailable: 5,
} as const;

// Depoimentos de clientes
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Carlos Eduardo",
    role: "Noivo",
    event: "Casamento",
    location: "Fazenda Santa Clara, Pirenópolis",
    avatar: "CE",
    rating: 5,
    text: "Nosso casamento foi numa fazenda sem internet. Com o Starlink da LocaLink, fizemos live para família que não pôde vir e os convidados amaram poder postar stories em tempo real!",
  },
  {
    id: 2,
    name: "Fernanda Almeida",
    role: "Produtora de Eventos",
    event: "Festival de Música",
    location: "Chapada dos Veadeiros",
    avatar: "FA",
    rating: 5,
    text: "Já usei em 3 festivais diferentes. A instalação é super rápida e a internet aguenta centenas de pessoas conectadas. Virou item obrigatório nos meus eventos.",
  },
  {
    id: 3,
    name: "Roberto Nascimento",
    role: "Engenheiro Civil",
    event: "Obra de Construção",
    location: "Zona Rural de Formosa",
    avatar: "RN",
    rating: 5,
    text: "Precisávamos de internet na obra para enviar projetos e fazer videochamadas. O plano mensal foi perfeito. Instalação em 5 minutos e velocidade excelente.",
  },
  {
    id: 4,
    name: "Juliana Costa",
    role: "Influencer",
    event: "Retiro de Bem-estar",
    location: "Sítio em Alto Paraíso",
    avatar: "JC",
    rating: 5,
    text: "Organizei um retiro e precisava fazer lives durante o evento. Internet estável, baixa latência, zero travamento. Meus seguidores nem acreditaram que eu estava no meio do mato!",
  },
  {
    id: 5,
    name: "Marcos Vinícius",
    role: "Diretor Técnico",
    event: "Congresso Empresarial",
    location: "Centro de Convenções Brasília",
    avatar: "MV",
    rating: 5,
    text: "Mesmo com a internet do local, contratamos o Starlink como backup. Foi a melhor decisão - usamos para transmissão principal e funcionou perfeitamente.",
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

