# AquaSmart RP

Demo frontend demonstrativa para apresentação escolar (Fatec). Interface navegável rodando em localhost, sem backend real — todos os dados são fictícios e hardcoded.

## Conceito do Produto

Sistema inteligente de conscientização e monitoramento do consumo de água para cidadãos de Ribeirão Preto em parceria com o SAERP. Três pilares:

1. **Monitoramento pessoal** — usuário acompanha consumo mensal, compara histórico e recebe metas personalizadas.
2. **Alerta comunitário** — morador reporta vazamentos e problemas na rede direto ao SAERP pelo app.
3. **Gamificação com recompensa real** — pontos → selos → desconto no IPTU Verde.

## Stack

- **React + Vite** (setup rápido, hot reload)
- **Tailwind CSS** (UI limpa sem overhead)
- **React Router v6** (navegação entre telas)
- **Recharts** (gráficos de consumo)
- **Lucide React** (ícones)
- Sem backend — dados mockados em `src/data/mockData.js`

## Identidade Visual

| Token | Valor |
|-------|-------|
| Azul primário | `#0066CC` |
| Verde primário | `#16A34A` |
| Azul claro (fundo) | `#F0F9FF` |
| Cards | branco, `rounded-2xl`, `shadow-sm`, borda `#E0F2FE` |
| Tipografia | Inter (Google Fonts) ou sistema |
| Estilo | Clean, moderno, mobile-first, cantos arredondados generosos |

A referência visual é o app da CPFL e o portal do SAERP — institucional, mas amigável.

## Telas (screens)

### Visão Cidadão

| # | Tela | Rota | Descrição |
|---|------|------|-----------|
| 1 | Login | `/` | Splash com logo AquaSmart RP, campo de login fictício |
| 2 | Home | `/home` | Dashboard: consumo do mês, score de economia, alerta IPTU Verde, atalhos |
| 3 | Minhas Faturas | `/faturas` | Histórico anual, gráfico mensal, comparativo, dica personalizada |
| 4 | Reportar Problema | `/reportar` | Formulário de alerta ao SAERP, lista de alertas enviados com status |
| 5 | Gamificação | `/gamificacao` | Pontos, selos, ranking do bairro, barra de progresso para desconto no IPTU |
| 6 | Painel Vila Virgínia | `/painel` | Consumo médio do bairro, litros economizados, metas coletivas, ranking |

Navegação cidadão: barra inferior fixa (BottomNav) com ícones para as 5 telas principais. Login redireciona para Home.

**Botão flutuante de Contato (visão cidadão):** ícone de headset/chat fixo no canto inferior direito (acima do BottomNav) em todas as telas pós-login. Abre um modal com:
- Telefone SAERP: (16) 3911-4000
- WhatsApp (fictício): (16) 99200-1234
- E-mail: atendimento@saerp.com.br
- Emergência 24h: 0800 722 0195
- Seção de Perguntas Frequentes (FAQ):
  - Como funciona o IPTU Verde?
  - Como reportar um vazamento?
  - Como ler meu hidrômetro?
  - Meus pontos expiram?
  - Como funciona a fatura digital?

### Visão SAERP (Admin)

| # | Tela | Rota | Descrição |
|---|------|------|-----------|
| A1 | Dashboard SAERP | `/admin` | Resumo geral: total de chamados abertos, resolvidos hoje, alertas críticos, mapa de calor por rua |
| A2 | Chamados | `/admin/chamados` | Lista completa de chamados com filtros por prioridade, status e data |
| A3 | Detalhe do Chamado | `/admin/chamados/:id` | Dados do chamado, histórico de atualizações, botão de atribuir técnico |

Navegação admin: sidebar lateral (desktop) com logo SAERP e itens: Dashboard, Chamados, (itens futuros em cinza/desabilitados: Mapa, Relatórios, Configurações).

**Botão flutuante de alternância de modo (presente em TODAS as telas pós-login):**
- Pill flutuante no canto superior direito (ou inferior direito acima do contato) com o texto "Visão SAERP" (quando em modo cidadão) e "Visão Cidadão" (quando em modo SAERP).
- Ícone: shield (admin) / person (cidadão).
- Ao clicar, redireciona para `/admin` ou `/home` conforme o modo atual.
- Cor diferenciada no modo admin: laranja/âmbar (`#D97706`) para deixar claro que é uma perspectiva diferente.

### Dados dos Chamados SAERP (fictícios)

| ID | Data | Tipo | Endereço | Prioridade | Status | Técnico |
|----|------|------|----------|------------|--------|---------|
| #0041 | 12/05/2026 | Vazamento visível na via | Rua das Acácias, 380 | Alta | Em atendimento | João R. |
| #0040 | 10/05/2026 | Pressão baixa recorrente | Av. Costábile Romano, 870 | Média | Aguardando técnico | — |
| #0039 | 07/05/2026 | Vazamento no poste de hidrômetro | Rua das Azaleias, 210 | Alta | Aguardando técnico | — |
| #0038 | 02/05/2026 | Falta d'água prolongada | Rua Barão do Amazonas, 55 | Média | Em atendimento | Carlos M. |
| #0037 | 28/04/2026 | Água com cor amarelada | Rua das Orquídeas, 130 | Baixa | Resolvido | Ana P. |
| #0036 | 20/04/2026 | Vazamento calçada | Rua Voluntários de Araraquara, 90 | Alta | Resolvido | João R. |
| #0035 | 15/04/2026 | Bueiro com água brotando | Av. Prof. João Fiusa, 1400 | Alta | Resolvido | Carlos M. |

**Lógica de prioridade (exibida como badge colorido):**
- `Alta` — vermelho: vazamento visível, perda estimada > 500 L/h, requer técnico imediato
- `Média` — âmbar: pressão baixa, falta d'água, estimativa necessária
- `Baixa` — cinza-azul: qualidade da água, reclamações sem urgência

**Cards de destaque no Dashboard SAERP:**
- Chamados abertos: 4
- Aguardando técnico: 2 (destacado em âmbar — ação necessária)
- Resolvidos esta semana: 3
- Rua com maior volume de chamados: Rua das Acácias (3 ocorrências nos últimos 90 dias)
- Estimativa de perda total em aberto: ~1.800 L/h

## Estrutura de Arquivos

```
AquaSmart RP/
├── CLAUDE.md
├── package.json
├── vite.config.js
├── tailwind.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── mockData.js              # todos os dados fictícios centralizados
    ├── components/
    │   ├── BottomNav.jsx            # navegação inferior (visão cidadão)
    │   ├── Header.jsx               # cabeçalho com avatar e notificações
    │   ├── Card.jsx                 # card base reutilizável
    │   ├── ModeSwitchFAB.jsx        # botão flutuante de alternância cidadão↔SAERP
    │   ├── ContactModal.jsx         # modal de contatos e FAQ (cidadão)
    │   └── admin/
    │       └── AdminSidebar.jsx     # sidebar lateral da visão SAERP
    └── screens/
        ├── Login.jsx
        ├── Home.jsx
        ├── Faturas.jsx
        ├── Reportar.jsx
        ├── Gamificacao.jsx
        ├── Painel.jsx
        └── admin/
            ├── AdminDashboard.jsx   # dashboard SAERP
            ├── AdminChamados.jsx    # lista de chamados
            └── AdminChamadoDetalhe.jsx  # detalhe do chamado
```

## Usuário Demo

| Campo | Valor |
|-------|-------|
| Nome | Carlos Eduardo Mendes |
| Endereço | Rua das Acácias, 412 — Vila Virgínia, Ribeirão Preto |
| Matrícula | 0847-2 |
| Hidrômetro | 28471-A |
| CPF (mascarado) | ***.284.912-** |

## Dados de Consumo (fictícios)

Leitura no dia **08**, vencimento no dia **20**. Consumo em m³.

| Mês | Consumo (m³) | Valor (R$) | Status |
|-----|-------------|------------|--------|
| Jan/2025 | 14 | 87,40 | Pago |
| Fev/2025 | 13 | 81,20 | Pago |
| Mar/2025 | 15 | 93,80 | Pago |
| Abr/2025 | 12 | 75,10 | Pago |
| Mai/2025 | 14 | 87,40 | Pago |
| Jun/2025 | 11 | 68,90 | Pago |
| Jul/2025 | 13 | 81,20 | Pago |
| Ago/2025 | 16 | 100,10 | Pago |
| Set/2025 | 13 | 81,20 | Pago |
| Out/2025 | 12 | 75,10 | Pago |
| Nov/2025 | 14 | 87,40 | Pago |
| Dez/2025 | 15 | 93,80 | Pago |
| Jan/2026 | 13 | 81,20 | Pago |
| Fev/2026 | 12 | 75,10 | Pago |
| Mar/2026 | 11 | 68,90 | Pago |
| Abr/2026 | 10 | 62,60 | Pago |
| Mai/2026 | 9 | 56,30 | Em aberto (vence 20/06) |

Média 2025: 13,5 m³/mês | Média 2026 (até mai): 11 m³/mês → queda de ~18%.

## Narrativa de Gamificação (demo)

- **847 pontos** acumulados
- **Selos conquistados:** "Primeira Economia", "Guardião da Gota", "Vila Verde"
- **Posição no ranking:** 3º do bairro (de 312 participantes)
- **Meta IPTU Verde:** economizar 15% vs. 2025 → usuário está em 18% → meta batida
- **Projeção exibida:** "Parabéns! Você já garantiu 8% de desconto no IPTU 2027. Continue assim para atingir 10%."
- **Próximo desafio:** "Reduza mais 2m³ até julho e conquiste o selo Aqua Gold"

## Alertas SAERP (fictícios)

| Data | Tipo | Local | Status |
|------|------|-------|--------|
| 12/04/2026 | Vazamento na calçada | Rua das Acácias, 380 | Em atendimento |
| 03/02/2026 | Falta d'água | Av. Costábile Romano, 1200 | Resolvido |

## Painel Comunitário — Vila Virgínia (fictícios)

| Indicador | Valor |
|-----------|-------|
| Participantes cadastrados | 312 moradores |
| Consumo médio do bairro | 13,2 m³/mês |
| Litros economizados em 2026 | 284.000 L |
| Meta coletiva 2026 | -15% vs. 2025 |
| Progresso da meta | 9% (em andamento) |
| 1º no ranking sustentável | Rua das Azaleias |

## ODS Relacionados

ODS 4 (Educação), ODS 6 (Água Limpa), ODS 11 (Cidades Sustentáveis), ODS 12 (Consumo Responsável), ODS 17 (Parcerias).

## Contexto da Apresentação

- Banca: professores da Fatec Ribeirão Preto
- Tema: Soluções Ecoinovadoras
- Unidade-piloto: Vila Virgínia (proximidade com a Fatec)
- Demo roda em localhost, navegada ao vivo no computador do apresentador
- Não há backend — toda interação é visual/simulada
