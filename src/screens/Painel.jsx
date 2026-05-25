import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { Users, Droplets, Leaf, Target, TrendingDown, Crown } from 'lucide-react'
import Header from '../components/Header'
import { painelBairro, rankingBairro } from '../data/mockData'

const dadosBairro = [
  { rua: 'Azaleias', media: 14.2, economia: 23 },
  { rua: 'Orquídeas', media: 15.8, economia: 18 },
  { rua: 'Acácias', media: 16.1, economia: 15 },
  { rua: 'C. Romano', media: 19.2, economia: 5 },
  { rua: 'Bromélias', media: 18.7, economia: 8 },
]

export default function Painel() {
  return (
    <div className="min-h-screen">
      <Header title="Painel Vila Virgínia" />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#16A34A] to-[#15803d] px-5 lg:px-8 pt-5 pb-8">
        <div className="lg:max-w-5xl lg:mx-auto">
          <p className="text-green-200 text-xs font-medium mb-1">Unidade-piloto AquaSmart RP</p>
          <p className="text-white font-extrabold text-xl">Vila Virgínia</p>
          <p className="text-green-200 text-xs mb-4">Ribeirão Preto, SP</p>

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
            <div className="bg-white/15 rounded-xl p-3 text-center">
              <p className="text-white font-extrabold text-xl">{painelBairro.participantes}</p>
              <p className="text-green-200 text-[10px] font-medium mt-0.5">moradores</p>
            </div>
            <div className="bg-white/15 rounded-xl p-3 text-center">
              <p className="text-white font-extrabold text-xl">{painelBairro.consumoMedio}</p>
              <p className="text-green-200 text-[10px] font-medium mt-0.5">m³ médio/mês</p>
            </div>
            <div className="bg-white/15 rounded-xl p-3 text-center">
              <p className="text-white font-extrabold text-xl">{(painelBairro.litrosEconomizados / 1000).toFixed(0)}k</p>
              <p className="text-green-200 text-[10px] font-medium mt-0.5">litros ec. 2026</p>
            </div>
            <div className="hidden lg:block bg-white/15 rounded-xl p-3 text-center">
              <p className="text-white font-extrabold text-xl">{painelBairro.progressoMeta}%</p>
              <p className="text-green-200 text-[10px] font-medium mt-0.5">meta coletiva</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 -mt-4 space-y-4 lg:max-w-5xl lg:mx-auto pb-6">
        {/* Meta coletiva */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E0F2FE]">
          <div className="flex items-center gap-2 mb-3">
            <Target size={16} className="text-[#0066CC]" />
            <p className="font-bold text-gray-800 text-sm">Meta coletiva 2026</p>
            <span className="ml-auto text-xs font-medium text-gray-500">-{painelBairro.metaColetiva}% vs 2025</span>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>Progresso do bairro</span>
            <span className="font-bold text-[#0066CC]">{painelBairro.progressoMeta}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
            <div
              className="bg-gradient-to-r from-[#0066CC] to-[#16A34A] h-3 rounded-full relative"
              style={{ width: `${(painelBairro.progressoMeta / painelBairro.metaColetiva) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#0066CC] rounded-full shadow" />
            </div>
          </div>
          <p className="text-xs text-gray-500 text-right">{painelBairro.progressoMeta}% de {painelBairro.metaColetiva}% alcançados</p>

          <div className="mt-3 flex items-center gap-2 bg-[#F0F9FF] rounded-xl px-3 py-2">
            <Leaf size={14} className="text-[#16A34A]" />
            <p className="text-xs text-gray-600">
              <span className="font-bold text-[#16A34A]">{(painelBairro.litrosEconomizados).toLocaleString('pt-BR')} litros</span> economizados coletivamente em 2026
            </p>
          </div>
        </div>

        {/* Gráfico + Ranking (desktop: lado a lado) */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 space-y-4 lg:space-y-0">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E0F2FE]">
            <p className="text-sm font-bold text-gray-800 mb-1">Consumo médio por rua</p>
            <p className="text-xs text-gray-400 mb-4">m³/mês em 2026</p>
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={dadosBairro} margin={{ top: 0, right: 5, left: -15, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="rua" tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} domain={[0, 22]} />
                <Tooltip
                  formatter={(v) => [`${v} m³`, 'Média']}
                  contentStyle={{ borderRadius: 12, border: '1px solid #E0F2FE', fontSize: 12 }}
                />
                <Bar dataKey="media" radius={[6, 6, 0, 0]}>
                  {dadosBairro.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.rua === 'Azaleias' ? '#16A34A' : entry.rua === 'Acácias' ? '#0066CC' : '#93c5fd'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center gap-4 mt-2 justify-center">
              <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                <div className="w-2.5 h-2.5 rounded bg-[#16A34A]" /> <span>1º lugar</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                <div className="w-2.5 h-2.5 rounded bg-[#0066CC]" /> <span>Você (Acácias)</span>
              </div>
            </div>
          </div>

          {/* Ranking */}
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 px-1">Ranking sustentável</p>
            <div className="bg-white rounded-2xl shadow-sm border border-[#E0F2FE] overflow-hidden">
              {dadosBairro.sort((a, b) => b.economia - a.economia).map((rua, i) => (
                <div key={i} className={`flex items-center gap-3 px-4 py-3 ${i < dadosBairro.length - 1 ? 'border-b border-gray-50' : ''} ${rua.rua === 'Acácias' ? 'bg-[#F0F9FF]' : ''}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i === 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-50 text-gray-500'}`}>
                    {i === 0 ? <Crown size={13} className="text-yellow-600" /> : i + 1}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-semibold ${rua.rua === 'Acácias' ? 'text-[#0066CC]' : 'text-gray-800'}`}>
                      Rua das {rua.rua} {rua.rua === 'Acácias' ? '(você)' : ''}
                    </p>
                    <p className="text-xs text-gray-400">{rua.media} m³/mês médio</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingDown size={12} />
                    <p className="text-sm font-bold">{rua.economia}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ODS */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E0F2FE]">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">ODS Relacionados</p>
          <div className="flex gap-2 flex-wrap">
            {['ODS 4', 'ODS 6', 'ODS 11', 'ODS 12', 'ODS 17'].map(ods => (
              <span key={ods} className="bg-[#F0F9FF] border border-[#E0F2FE] text-[#0066CC] text-xs font-bold px-3 py-1 rounded-full">{ods}</span>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">Educação · Água Limpa · Cidades Sustentáveis · Consumo Responsável · Parcerias</p>
        </div>
      </div>
    </div>
  )
}
