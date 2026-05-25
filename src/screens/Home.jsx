import { useNavigate } from 'react-router-dom'
import { Droplets, TrendingDown, Leaf, AlertTriangle, Trophy, BarChart2, ChevronRight, Zap } from 'lucide-react'
import Header from '../components/Header'
import { usuario, consumo } from '../data/mockData'

const mesAtual = consumo[consumo.length - 1]
const mesAnterior = consumo[consumo.length - 2]
const variacao = (((mesAtual.consumo - mesAnterior.consumo) / mesAnterior.consumo) * 100).toFixed(0)

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">
      <Header title="Início" />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0066CC] to-[#004A99] px-5 lg:px-8 pt-5 pb-8">
        <div className="lg:max-w-5xl lg:mx-auto">
          <p className="text-blue-200 text-xs font-medium mb-1">Olá, {usuario.nome.split(' ')[0]} 👋</p>
          <p className="text-white/80 text-xs mb-4">{usuario.endereco}</p>

          <div className="lg:grid lg:grid-cols-3 lg:gap-4">
            <div className="bg-white/15 backdrop-blur rounded-2xl px-5 py-4 flex items-center justify-between lg:col-span-2">
              <div>
                <p className="text-blue-200 text-xs font-medium">Consumo — {mesAtual.mes}</p>
                <div className="flex items-end gap-1 mt-1">
                  <span className="text-white font-extrabold text-4xl">{mesAtual.consumo}</span>
                  <span className="text-blue-200 text-sm mb-1">m³</span>
                </div>
                <p className="text-blue-200 text-xs mt-0.5">R$ {mesAtual.valor.toFixed(2).replace('.', ',')} · {mesAtual.status}</p>
              </div>
              <div className="text-right">
                <div className={`flex items-center gap-1 justify-end text-sm font-bold ${Number(variacao) < 0 ? 'text-green-300' : 'text-red-300'}`}>
                  <TrendingDown size={16} />
                  {Number(variacao) < 0 ? variacao : `+${variacao}`}%
                </div>
                <p className="text-blue-300 text-xs mt-0.5">vs {mesAnterior.mes}</p>
              </div>
            </div>

            <div className="hidden lg:flex bg-white/15 backdrop-blur rounded-2xl px-5 py-4 flex-col justify-center">
              <p className="text-blue-200 text-xs font-medium mb-1">Próxima leitura</p>
              <p className="text-white font-bold text-xl">08/06/2026</p>
              <p className="text-blue-300 text-xs mt-0.5">Vencimento: 20/06 · Hidrômetro {usuario.hidrometro}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 -mt-4 space-y-4 lg:max-w-5xl lg:mx-auto pb-6">
        {/* Score + IPTU Verde */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E0F2FE]">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={15} className="text-[#0066CC]" />
              <p className="text-xs font-semibold text-gray-500">Score Economia</p>
            </div>
            <p className="text-3xl font-extrabold text-[#0066CC]">847</p>
            <p className="text-xs text-gray-400 mt-0.5">pontos acumulados</p>
          </div>

          <div className="bg-gradient-to-br from-[#16A34A] to-[#15803d] rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Leaf size={15} className="text-green-200" />
              <p className="text-xs font-semibold text-green-100">IPTU Verde</p>
            </div>
            <p className="text-3xl font-extrabold text-white">8%</p>
            <p className="text-xs text-green-200 mt-0.5">desconto garantido</p>
          </div>

          <div className="hidden lg:block bg-white rounded-2xl p-4 shadow-sm border border-[#E0F2FE]">
            <div className="flex items-center gap-2 mb-2">
              <Trophy size={15} className="text-yellow-500" />
              <p className="text-xs font-semibold text-gray-500">Ranking</p>
            </div>
            <p className="text-3xl font-extrabold text-gray-800">3º</p>
            <p className="text-xs text-gray-400 mt-0.5">de 312 participantes</p>
          </div>

          <div className="hidden lg:block bg-white rounded-2xl p-4 shadow-sm border border-[#E0F2FE]">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown size={15} className="text-[#16A34A]" />
              <p className="text-xs font-semibold text-gray-500">Redução 2026</p>
            </div>
            <p className="text-3xl font-extrabold text-[#16A34A]">18%</p>
            <p className="text-xs text-gray-400 mt-0.5">vs média 2025</p>
          </div>
        </div>

        {/* Meta batida */}
        <div className="bg-green-50 border border-green-200 rounded-2xl px-4 py-3 flex items-start gap-3">
          <div className="w-8 h-8 bg-[#16A34A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
            <Leaf size={16} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-green-800">Meta IPTU Verde batida! 🎉</p>
            <p className="text-xs text-green-700 mt-0.5">Você economizou 18% vs 2025 (meta: 15%). Continue assim para atingir 10% de desconto no IPTU 2027.</p>
          </div>
        </div>

        {/* Leitura próxima (mobile only — desktop mostrada no hero) */}
        <div className="lg:hidden bg-white rounded-2xl px-4 py-3 shadow-sm border border-[#E0F2FE] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Droplets size={18} className="text-[#0066CC]" />
            <div>
              <p className="text-xs font-semibold text-gray-700">Próxima leitura</p>
              <p className="text-xs text-gray-400">Hidrômetro {usuario.hidrometro}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-[#0066CC]">08/06</p>
            <p className="text-xs text-gray-400">vence 20/06</p>
          </div>
        </div>

        {/* Atalhos */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 px-1">Acesso rápido</p>
          <div className="space-y-2 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-3">
            {[
              { icon: AlertTriangle, label: 'Reportar problema', sub: '2 alertas enviados', color: 'text-amber-500', to: '/reportar' },
              { icon: Trophy, label: 'Meus pontos e selos', sub: '3 selos conquistados', color: 'text-[#0066CC]', to: '/gamificacao' },
              { icon: BarChart2, label: 'Painel do bairro', sub: 'Vila Virgínia — 312 moradores', color: 'text-[#16A34A]', to: '/painel' },
            ].map(({ icon: Icon, label, sub, color, to }) => (
              <button
                key={to}
                onClick={() => navigate(to)}
                className="w-full bg-white rounded-2xl px-4 py-3 shadow-sm border border-[#E0F2FE] flex items-center justify-between hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className={color} />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-800">{label}</p>
                    <p className="text-xs text-gray-400">{sub}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-gray-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
