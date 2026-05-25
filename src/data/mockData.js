export const usuario = {
  nome: 'Carlos Eduardo Mendes',
  endereco: 'Rua das Acácias, 412 — Vila Virgínia, Ribeirão Preto',
  matricula: '0847-2',
  hidrometro: '28471-A',
  cpf: '***.284.912-**',
  avatar: 'CE',
}

export const consumo = [
  { mes: 'Jan/25', consumo: 18, valor: 110.80, status: 'Pago' },
  { mes: 'Fev/25', consumo: 17, valor: 104.30, status: 'Pago' },
  { mes: 'Mar/25', consumo: 19, valor: 117.30, status: 'Pago' },
  { mes: 'Abr/25', consumo: 16, valor: 97.90, status: 'Pago' },
  { mes: 'Mai/25', consumo: 18, valor: 110.80, status: 'Pago' },
  { mes: 'Jun/25', consumo: 15, valor: 91.40, status: 'Pago' },
  { mes: 'Jul/25', consumo: 17, valor: 104.30, status: 'Pago' },
  { mes: 'Ago/25', consumo: 21, valor: 133.50, status: 'Pago' },
  { mes: 'Set/25', consumo: 17, valor: 104.30, status: 'Pago' },
  { mes: 'Out/25', consumo: 16, valor: 97.90, status: 'Pago' },
  { mes: 'Nov/25', consumo: 18, valor: 110.80, status: 'Pago' },
  { mes: 'Dez/25', consumo: 19, valor: 117.30, status: 'Pago' },
  { mes: 'Jan/26', consumo: 16, valor: 97.90, status: 'Pago' },
  { mes: 'Fev/26', consumo: 15, valor: 91.40, status: 'Pago' },
  { mes: 'Mar/26', consumo: 14, valor: 84.90, status: 'Pago' },
  { mes: 'Abr/26', consumo: 14, valor: 84.90, status: 'Pago' },
  { mes: 'Mai/26', consumo: 13, valor: 78.40, status: 'Em aberto' },
]

export const gamificacao = {
  pontos: 847,
  selos: [
    { nome: 'Primeira Economia', icone: '💧', conquistado: true },
    { nome: 'Guardião da Gota', icone: '🛡️', conquistado: true },
    { nome: 'Vila Verde', icone: '🌿', conquistado: true },
    { nome: 'Aqua Gold', icone: '🏅', conquistado: false, desafio: 'Reduza mais 2m³ até julho' },
  ],
  ranking: 3,
  totalParticipantes: 312,
  metaIptu: { percentual: 15, atual: 18, desconto: 8, proximo: 10 },
  proximoDesafio: 'Reduza mais 2m³ até julho e conquiste o selo Aqua Gold',
}

export const rankingBairro = [
  { posicao: 1, nome: 'Ana Carolina S.', rua: 'Rua das Azaleias', pontos: 1240, economia: '28%' },
  { posicao: 2, nome: 'Roberto Lima', rua: 'Rua das Orquídeas', pontos: 1180, economia: '24%' },
  { posicao: 3, nome: 'Carlos E. M.', rua: 'Rua das Acácias', pontos: 847, economia: '18%', isUser: true },
  { posicao: 4, nome: 'Patrícia Alves', rua: 'Av. C. Romano', pontos: 820, economia: '16%' },
  { posicao: 5, nome: 'Marcos Souza', rua: 'Rua das Bromélias', pontos: 791, economia: '14%' },
]

export const painelBairro = {
  participantes: 312,
  consumoMedio: 16.8,
  litrosEconomizados: 284000,
  metaColetiva: 15,
  progressoMeta: 9,
  liderRanking: 'Rua das Azaleias',
}

export const alertasEnviados = [
  { id: 1, data: '12/04/2026', tipo: 'Vazamento na calçada', local: 'Rua das Acácias, 380', status: 'Em atendimento' },
  { id: 2, data: '03/02/2026', tipo: 'Falta d\'água', local: 'Av. Costábile Romano, 1200', status: 'Resolvido' },
]

export const chamadosSaerp = [
  {
    id: '#0041',
    data: '12/05/2026',
    tipo: 'Vazamento visível na via',
    endereco: 'Rua das Acácias, 380',
    prioridade: 'Alta',
    status: 'Em atendimento',
    tecnico: 'João R.',
    descricao: 'Vazamento intenso na calçada próximo ao poste 48. Estimativa de perda: 600 L/h. Área molhada de aproximadamente 3m².',
    historico: [
      { data: '12/05/2026 08:14', acao: 'Chamado aberto pelo cidadão via app' },
      { data: '12/05/2026 09:02', acao: 'Chamado recebido e classificado como Alta prioridade' },
      { data: '12/05/2026 10:30', acao: 'Técnico João R. designado para atendimento' },
    ],
  },
  {
    id: '#0040',
    data: '10/05/2026',
    tipo: 'Pressão baixa recorrente',
    endereco: 'Av. Costábile Romano, 870',
    prioridade: 'Média',
    status: 'Aguardando técnico',
    tecnico: null,
    descricao: 'Morador relata queda de pressão diária entre 07h e 09h. Problema ocorre há 2 semanas.',
    historico: [
      { data: '10/05/2026 11:45', acao: 'Chamado aberto pelo cidadão via app' },
      { data: '10/05/2026 13:00', acao: 'Chamado recebido e classificado como Média prioridade' },
    ],
  },
  {
    id: '#0039',
    data: '07/05/2026',
    tipo: 'Vazamento no poste de hidrômetro',
    endereco: 'Rua das Azaleias, 210',
    prioridade: 'Alta',
    status: 'Aguardando técnico',
    tecnico: null,
    descricao: 'Vazamento no ramal de abastecimento do hidrômetro. Água brotando pelo calçamento.',
    historico: [
      { data: '07/05/2026 07:22', acao: 'Chamado aberto pelo cidadão via app' },
      { data: '07/05/2026 08:10', acao: 'Chamado recebido e classificado como Alta prioridade' },
    ],
  },
  {
    id: '#0038',
    data: '02/05/2026',
    tipo: 'Falta d\'água prolongada',
    endereco: 'Rua Barão do Amazonas, 55',
    prioridade: 'Média',
    status: 'Em atendimento',
    tecnico: 'Carlos M.',
    descricao: 'Interrupção no fornecimento por mais de 18 horas. Família com idoso e criança.',
    historico: [
      { data: '02/05/2026 14:00', acao: 'Chamado aberto pelo cidadão via app' },
      { data: '02/05/2026 15:30', acao: 'Chamado recebido e classificado como Média prioridade' },
      { data: '03/05/2026 09:00', acao: 'Técnico Carlos M. designado para atendimento' },
    ],
  },
  {
    id: '#0037',
    data: '28/04/2026',
    tipo: 'Água com cor amarelada',
    endereco: 'Rua das Orquídeas, 130',
    prioridade: 'Baixa',
    status: 'Resolvido',
    tecnico: 'Ana P.',
    descricao: 'Água apresentando coloração amarelada ao abrir a torneira. Problema relatado por 3 moradores do mesmo trecho.',
    historico: [
      { data: '28/04/2026 16:00', acao: 'Chamado aberto pelo cidadão via app' },
      { data: '29/04/2026 08:00', acao: 'Técnica Ana P. realizou visita e coletou amostra' },
      { data: '30/04/2026 12:00', acao: 'Chamado encerrado — sedimentação normal após manutenção da rede' },
    ],
  },
  {
    id: '#0036',
    data: '20/04/2026',
    tipo: 'Vazamento calçada',
    endereco: 'Rua Voluntários de Araraquara, 90',
    prioridade: 'Alta',
    status: 'Resolvido',
    tecnico: 'João R.',
    descricao: 'Vazamento volumoso na calçada próximo à entrada do imóvel.',
    historico: [
      { data: '20/04/2026 09:00', acao: 'Chamado aberto pelo cidadão via app' },
      { data: '20/04/2026 11:00', acao: 'Técnico João R. atendeu e realizou reparo emergencial' },
      { data: '20/04/2026 14:00', acao: 'Chamado encerrado — vazamento contido' },
    ],
  },
  {
    id: '#0035',
    data: '15/04/2026',
    tipo: 'Bueiro com água brotando',
    endereco: 'Av. Prof. João Fiusa, 1400',
    prioridade: 'Alta',
    status: 'Resolvido',
    tecnico: 'Carlos M.',
    descricao: 'Água brotando pelo bueiro na via, possível rompimento de adutora.',
    historico: [
      { data: '15/04/2026 06:30', acao: 'Chamado aberto pelo cidadão via app' },
      { data: '15/04/2026 07:45', acao: 'Equipe designada — prioridade máxima' },
      { data: '15/04/2026 16:00', acao: 'Chamado encerrado — adutora reparada' },
    ],
  },
]

export const dashboardSaerp = {
  chamadosAbertos: 4,
  aguardandoTecnico: 2,
  resolvidosSemana: 3,
  ruaMaisOcorrencias: 'Rua das Acácias',
  ocorrenciasRua: 3,
  estimativaPerda: '~1.800 L/h',
}
