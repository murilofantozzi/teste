// Mock data para a landing page de pagamentos

export const stats = [
  { value: '100.000+', label: 'Clientes satisfeitos em todo o Brasil' },
  { value: '4.9', label: 'Nota de avaliação do nosso serviço' },
  { value: '98%', label: 'Avaliação dos clientes pelo atendimento' },
  { value: '9.5', label: 'Nota NPS: Você indicaria?' }
];

export const services = [
  {
    id: 1,
    title: 'Parcele seus Boletos',
    description: 'Com até 3 Cartões de Crédito você parcela em até 12 vezes contas como:',
    items: [
      'Contas de Água / Luz',
      'Aluguel / Condomínio / IPTU',
      'Telefone / Internet',
      'IPVA / Multa / Transferência',
      'Faturas e Mensalidades',
      'Mensalidade escolar'
    ],
    cta: 'Parcelar Boletos',
    examples: [
      { value: 'R$ 2.300', status: 'quitado' },
      { value: 'R$ 432', status: 'quitado' },
      { value: 'R$ 997', status: 'quitado' },
      { value: 'R$ 1.829', status: 'quitado' }
    ]
  },
  {
    id: 2,
    title: 'Receba PIX e Pague Parcelado',
    description: 'Inovamos também no PIX! Realize transferências imediatas e parcele o valor em seu cartão de crédito.',
    items: [
      'Receba um PIX na sua conta imediatamente',
      'Pague um QR Code usando seu cartão de crédito',
      'Parcele em até 12x no cartão',
      'Sem burocracia'
    ],
    cta: 'Receber PIX Agora',
    examples: [
      { value: 'R$ 1.200', status: 'recebido' },
      { value: 'R$ 800', status: 'recebido' },
      { value: 'R$ 2.500', status: 'recebido' },
      { value: 'R$ 4.200', status: 'recebido' }
    ]
  }
];

export const howItWorks = [
  {
    step: 1,
    title: 'Faça a simulação do seu jeito',
    description: 'Você pode fazer a simulação sem nenhum custo ou compromisso.'
  },
  {
    step: 2,
    title: 'Informe os dados',
    description: 'Insira os dados pessoais, de contato e os boletos anexados ou dados do PIX. Em seguida, nossa equipe entrará em contato.'
  },
  {
    step: 3,
    title: 'Realize o pagamento',
    description: 'Após o contato pelo WhatsApp, você receberá um link para pagamento e informar seus dados do cartão.'
  },
  {
    step: 4,
    title: 'Quitação de seus boletos',
    description: 'Após a aprovação no cartão, seus boletos serão pagos imediatamente ou você receberá o PIX na sua conta.'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'H.C.S.',
    service: 'Recebeu PIX e pagou parcelado',
    text: 'Conheci através do instagram, no começo desconfiei porém vi que as pessoas que divulgavam o serviço não queimariam sua imagem. Então decidi fazer meu primeiro pagamento, e deu super certo. Quando me aperto está sempre disponível. Indico muito o serviço, 100% confiável.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=H.C.S'
  },
  {
    id: 2,
    name: 'B.A.Z.',
    service: 'Quitou seu boleto',
    text: 'Achei a proposta muito interessante. Utilizei os serviços e recomendo! Atendimento ágil, fácil, sem burocracias e agradável. Fiquei satisfeita e resolvi o que precisava no mesmo dia. Pode confiar sem preocupações.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=B.A.Z'
  },
  {
    id: 3,
    name: 'S.A.R.',
    service: 'Quitou seu boleto',
    text: 'Minha experiência foi muito positiva e satisfatória. Atendimento imediato e minhas contas pagas rapidamente. Super indico e pretendo usar os serviços da empresa de novo.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=S.A.R'
  },
  {
    id: 4,
    name: 'M.S.R.A.',
    service: 'Quitou boletos',
    text: 'Ter conhecido esta plataforma foi uma das melhores coisas que me aconteceu. Como muita gente eu estava me afogando em contas. O atendimento é muito bom, cordial e rápido, o que me poupa tempo e dinheiro.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=M.S.R.A'
  }
];

export const benefits = [
  {
    id: 1,
    title: 'Parcelamento simples e acessível',
    description: 'Transforme suas contas em parcelas suaves, pague sem juros altos e organize suas finanças.'
  },
  {
    id: 2,
    title: 'Pagamento rápido e seguro',
    description: 'Pagamento de boletos com código de barras ou via PIX na sua conta.'
  },
  {
    id: 3,
    title: 'Sem burocracia',
    description: 'Não exigimos grandes processos, o que garante agilidade e praticidade.'
  }
];

export const faqs = [
  {
    id: 1,
    question: 'A plataforma é confiável?',
    answer: 'Sim, totalmente confiável. Durante a operação existem diversas etapas de segurança como criptografia de ponta a ponta, análise antifraude e mecanismos avançados para assegurar a segurança dos seus dados.'
  },
  {
    id: 2,
    question: 'Qual o prazo para meus boletos serem pagos ou o valor do PIX na minha conta?',
    answer: 'Após a aprovação da operação no seu cartão, imediatamente realizamos o pagamento.'
  },
  {
    id: 3,
    question: 'Quais os tipos de boleto posso parcelar?',
    answer: 'Qualquer boleto com código de barras. Ex: Fatura do cartão de crédito, água, luz, condomínio, aluguel, financiamentos, mensalidades escolares, IPTU, IPVA, multas, plano de saúde, outros…'
  },
  {
    id: 4,
    question: 'É necessário ter cartão de crédito?',
    answer: 'Sim, todas as operações são totalmente através do cartão de crédito.'
  },
  {
    id: 5,
    question: 'Atende apenas online?',
    answer: 'Sim, atendemos 100% online para sua comodidade. Nosso time está disponível via WhatsApp e chat para auxiliar em todas as etapas.'
  }
];