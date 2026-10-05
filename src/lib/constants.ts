// ============================================================
// DADOS CENTRALIZADOS DA CLÍNICA (DEMO / VITRINE)
// ============================================================

export const CLINIC = {
  name: "Lumina Odontologia",
  tagline: "Odontologia estética e reabilitação oral de alta performance",
  specialty: "Odontologia Estética",
  founded: 2018,
  address: "Praça dos Girassóis, s/n - Ed. Executive Center, Sala 502",
  city: "Palmas – TO",
  fullAddress: "Praça dos Girassóis, s/n - Sala 502 — Palmas/TO",
  whatsapp: "5563999990000",
  whatsappLink: "https://wa.me/5563999990000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta",
  whatsappDisplay: "(63) 99999-0000",
  email: "contato@luminaodonto.com.br",
  instagram: "https://instagram.com",
  mapsLink:
    "https://www.google.com/maps/search/Pra%C3%A7a+dos+Girass%C3%B3is+Palmas+TO",
  hours: [
    { day: "Segunda a Sexta", time: "08h às 18h" },
    { day: "Sábado", time: "08h às 12h" },
    { day: "Domingo", time: "Fechado" },
  ],
};

export const SERVICES = [
  {
    id: "lentes",
    icon: "Sparkles",
    title: "Lentes de Contato Dental",
    description:
      "Transforme seu sorriso com lentes ultrafinas e naturais, sem desgaste desnecessário. Resultado imediato e duradouro.",
  },
  {
    id: "clareamento",
    icon: "Sun",
    title: "Clareamento Dental",
    description:
      "Dentes até 8 tons mais brancos com tecnologia segura e eficaz. Clareamento a laser ou de consultório personalizado.",
  },
  {
    id: "implantes",
    icon: "Shield",
    title: "Implantes Dentários",
    description:
      "Substitua dentes perdidos com implantes de titânio de alta qualidade. Função e estética idênticas aos dentes naturais.",
  },
  {
    id: "harmonizacao",
    icon: "Heart",
    title: "Harmonização Facial",
    description:
      "Procedimentos estéticos orofaciais para equilibrar os traços do rosto e realçar sua beleza natural.",
  },
  {
    id: "ortodontia",
    icon: "Smile",
    title: "Ortodontia",
    description:
      "Aparelhos modernos e alinhadores estéticos invisíveis para um sorriso perfeitamente alinhado.",
  },
  {
    id: "endodontia",
    icon: "Activity",
    title: "Tratamento de Canal",
    description:
      "Endodontia moderna com tecnologia rotatória e microscopia. Salve seu dente natural com total conforto.",
  },
  {
    id: "atm",
    icon: "Zap",
    title: "Bruxismo & ATM",
    description:
      "Diagnóstico e tratamento da disfunção temporomandibular e bruxismo. Elimine dores e proteja seus dentes.",
  },
  {
    id: "infantil",
    icon: "Star",
    title: "Odontopediatria",
    description:
      "Atendimento especializado e humanizado para crianças, tornando a visita ao dentista uma experiência positiva.",
  },
  {
    id: "protese",
    icon: "Award",
    title: "Próteses & Reabilitação",
    description:
      "Reabilitação oral completa com próteses fixas e sobre implantes. Recupere a função mastigatória e o prazer de sorrir.",
  },
];

export const WHY_US = [
  {
    icon: "Users",
    title: "Equipe Multidisciplinar",
    description:
      "Especialistas em diversas áreas trabalhando integrados para o melhor resultado clínico e estético.",
  },
  {
    icon: "Heart",
    title: "Atendimento Humanizado",
    description:
      "Cada paciente recebe atenção individualizada, com empatia, calma e respeito durante todo o tratamento.",
  },
  {
    icon: "Award",
    title: "Excelência e Precisão",
    description:
      "Protocolos clínicos validados e constante atualização científica para tratamentos previsíveis.",
  },
  {
    icon: "Zap",
    title: "Tecnologia de Ponta",
    description:
      "Equipamentos modernos, escaneamento digital e materiais de última geração para diagnósticos precisos.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ana Carolina S.",
    text: "Fiz minhas lentes de contato dental na clínica e o resultado superou todas as expectativas! A equipe é fantástica, muito atenciosa e detalhista.",
    rating: 5,
    treatment: "Lentes de Contato Dental",
  },
  {
    id: 2,
    name: "Roberto M.",
    text: "Realizei meu implante dentário aqui e fiquei extremamente satisfeito. Atendimento humanizado e sem dor do início ao fim. Recomendo muito!",
    rating: 5,
    treatment: "Implante Dentário",
  },
  {
    id: 3,
    name: "Fernanda L.",
    text: "Clínica maravilhosa e impecável! Fiz clareamento e harmonização facial. Os resultados ficaram super naturais e elegantes.",
    rating: 5,
    treatment: "Clareamento & Harmonização",
  },
  {
    id: 4,
    name: "Carlos Eduardo P.",
    text: "Minha filha sempre teve receio de dentista, mas aqui ela foi tratada com tanto carinho que adorou a experiência e não tem mais medo algum!",
    rating: 5,
    treatment: "Odontopediatria",
  },
];

export const TEAM = [
  {
    id: 1,
    name: "Dra. Sofia Albuquerque",
    specialty: "Ortodontia & Alinhadores Invisíveis",
    cro: "CRO-TO 0000",
    description:
      "Especialista em alinhadores invisíveis e ortodontia estética de alta precisão, focada no conforto e harmonia facial.",
  },
  {
    id: 2,
    name: "Dr. Lucas Menezes",
    specialty: "Implantodontia & Reabilitação Oral",
    cro: "CRO-TO 0000",
    description:
      "Mestre em cirurgia e reabilitações sobre implantes com planejamento digital guiado, devolvendo função mastigatória e autoestima.",
  },
  {
    id: 3,
    name: "Dra. Camila Valença",
    specialty: "Dentística & Harmonização Orofacial",
    cro: "CRO-TO 0000",
    description:
      "Especialista em facetas de porcelana, lentes de contato e procedimentos orofaciais que valorizam a beleza natural do paciente.",
  },
];

export const STATS = [
  { value: "+8", label: "Anos de Excelência" },
  { value: "+4k", label: "Pacientes Atendidos" },
  { value: "9+", label: "Especialidades" },
  { value: "100%", label: "Foco no Paciente" },
];

