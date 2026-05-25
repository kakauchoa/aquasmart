import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { FileText, TrendingDown, Lightbulb, ChevronRight } from 'lucide-react'
import Header from '../components/Header'
import { consumo } from '../data/mockData'

const ultimos12 = consumo.slice(-12)
const media2025 = (consumo.slice(0, 12).reduce((s, c) => s + c.consumo, 0) / 12).toFixed(1)
const media2026 = (consumo.slice(12).reduce((s, c) => s + c.consumo, 0) / consumo.slice(12).length).toFixed(1)
const reducao = Math.abs(((Number(media2026) - Number(media2025)) / Number(media2025)) * 100).toFixed(0)

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white rounded-xl shadow-lg border border-[#E0F2FE] px-3 py-2">
      <p className="text-xs font-bold text-gray-700">{label}</p>
      <p className="text-sm font-extrabold text-[#0066CC]">{payload[0].value} m³</p>
    </div>
  )
}

export default function Faturas() {
  const mesAberto = consumo[consumo.length - 1]

  return (
    <div className="min-h-screen">
      <Header title="Minhas Faturas" />

      {/* Fatura em aberto — hero */}
      <div className="bg-gradient-to-r from-[#0066CC] to-[#004A99] px-5 lg:px-8 pt-5 pb-8">
        <div className="lg:max-w-5xl lg:mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-6">
            <div className="flex items-center justify-between mb-0 lg:mb-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-blue-200 text-xs font-medium">Fatura em aberto</p>
                  <span className="bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full">EM ABERTO</span>
                </div>
                <p className="text-white font-extrabold text-3xl lg:text-4xl">R$ {mesAberto.valor.toFixed(2).replace('.', ',')}</p>
                <p className="text-blue-200 text-xs mt-0.5">{mesAberto.mes} · {mesAberto.consumo} m³ · vence 20/06</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 lg:mt-0">
              <div className="bg-white/15 rounded-2xl px-5 py-3 text-center">
                <p className="text-blue-200 text-xs">Média 2025</p>
                <p className="text-white font-bold text-xl">{media2025} m³</p>
              </div>
              <div className="bg-white/15 rounded-2xl px-5 py-3 text-center">
                <p className="text-blue-200 text-xs">Média 2026</p>
                <p className="text-white font-bold text-xl">{media2026} m³</p>
                <p className="text-green-300 text-xs font-bold">-{reducao}%</p>
              </div>
              <button className="bg-white text-[#0066CC] font-bold text-sm px-5 py-3 rounded-xl hidden lg:block">
                Pagar agora
              </button>
            </div>
          </div>
          <button className="mt-4 bg-white text-[#0066CC] font-bold text-sm px-5 py-2.5 rounded-xl lg:hidden">
            Pagar agora
          </button>
        </div>
      </div>

      <div className="px-4 lg:px-8 -mt-4 space-y-4 lg:max-w-5xl lg:mx-auto pb-6">
        {/* Gráfico + dica (desktop: lado a lado) */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E0F2FE] lg:col-span-2">
            <p className="text-sm font-bold text-gray-800 mb-1">Consumo últimos 12 meses</p>
            <p className="text-xs text-gray-400 mb-4">m³ por mês — linha verde = média 2025 ({media2025} m³)</p>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={ultimos12} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorConsume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0066CC" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#0066CC" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="mes" tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} domain={[10, 24]} />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine y={Number(media2025)} stroke="#16A34A" strokeDasharray="4 2" strokeWidth={1.5} />
                <Area type="monotone" dataKey="consumo" stroke="#0066CC" strokeWidth={2.5} fill="url(#colorConsume)" dot={false} activeDot={{ r: 5, fill: '#0066CC' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-3">
            {/* Comparativo (mobile) */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E0F2FE] text-center lg:hidden">
                <p className="text-xs text-gray-400 font-medium">Média 2025</p>
                <p className="text-2xl font-extrabold text-gray-700 mt-1">{media2025} <span className="text-sm font-medium text-gray-400">m³</span></p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E0F2FE] text-center lg:hidden">
                <p className="text-xs text-gray-400 font-medium">Média 2026</p>
                <p className="text-2xl font-extrabold text-[#0066CC] mt-1">{media2026} <span className="text-sm font-medium text-gray-400">m³</span></p>
                <div className="flex items-center justify-center gap-1 mt-0.5 text-[#16A34A]">
                  <TrendingDown size={12} />
                  <p className="text-xs font-bold">-{reducao}%</p>
                </div>
              </div>
            </div>

            {/* Dica */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Lightbulb size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-amber-800">Dica personalizada</p>
                <p className="text-xs text-amber-700 mt-0.5">Agosto/25 foi seu mês de maior consumo (21 m³ — 20% acima da média anual). Verifique torneiras pingando ou descarga com vazamento constante.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Histórico */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 px-1">Histórico completo</p>
          <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-2 lg:space-y-0">
            {[...consumo].reverse().map((item, i) => (
              <div key={i} className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-[#E0F2FE] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${item.status === 'Pago' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                    <FileText size={14} className={item.status === 'Pago' ? 'text-green-600' : 'text-yellow-600'} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{item.mes}</p>
                    <p className="text-xs text-gray-400">{item.consumo} m³</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-800">R$ {item.valor.toFixed(2).replace('.', ',')}</p>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${item.status === 'Pago' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {item.status}
                    </span>
                  </div>
                  <ChevronRight size={14} className="text-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
