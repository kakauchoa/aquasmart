import { useNavigate } from 'react-router-dom'
import { AlertTriangle, CheckCircle, Clock, Droplets, MapPin, TrendingUp, ChevronRight } from 'lucide-react'
import { dashboardSaerp, chamadosSaerp } from '../../data/mockData'

const abertos = chamadosSaerp.filter(c => c.status !== 'Resolvido').slice(0, 3)

function PrioridadeBadge({ prioridade }) {
  const map = {
    Alta: 'bg-red-100 text-red-700',
    Média: 'bg-amber-100 text-amber-700',
    Baixa: 'bg-slate-100 text-slate-600',
  }
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${map[prioridade]}`}>
      {prioridade}
    </span>
  )
}

export default function AdminDashboard() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 bg-[#F8FAFC] p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Dashboard SAERP</h1>
          <p className="text-sm text-gray-500 mt-0.5">Ribeirão Preto · Vila Virgínia · atualizado agora</p>
        </div>

        {/* Cards indicadores */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle size={16} className="text-red-600" />
              </div>
              <p className="text-xs font-semibold text-gray-500">Chamados abertos</p>
            </div>
            <p className="text-3xl font-extrabold text-gray-900">{dashboardSaerp.chamadosAbertos}</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <Clock size={16} className="text-amber-600" />
              </div>
              <p className="text-xs font-semibold text-gray-500">Aguardando técnico</p>
            </div>
            <p className="text-3xl font-extrabold text-amber-600">{dashboardSaerp.aguardandoTecnico}</p>
            <p className="text-[10px] text-amber-500 font-medium mt-0.5">ação necessária</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle size={16} className="text-green-600" />
              </div>
              <p className="text-xs font-semibold text-gray-500">Resolvidos esta semana</p>
            </div>
            <p className="text-3xl font-extrabold text-green-700">{dashboardSaerp.resolvidosSemana}</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Droplets size={16} className="text-blue-600" />
              </div>
              <p className="text-xs font-semibold text-gray-500">Perda estimada</p>
            </div>
            <p className="text-2xl font-extrabold text-[#0066CC]">{dashboardSaerp.estimativaPerda}</p>
          </div>
        </div>

        {/* Alerta hotspot */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex items-start gap-3">
          <div className="w-9 h-9 bg-amber-400 rounded-full flex items-center justify-center shrink-0">
            <MapPin size={18} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-amber-800">Rua com maior volume de chamados</p>
            <p className="text-sm text-amber-700 mt-0.5">
              <span className="font-extrabold">{dashboardSaerp.ruaMaisOcorrencias}</span> — {dashboardSaerp.ocorrenciasRua} ocorrências nos últimos 90 dias. Recomenda-se inspeção preventiva da rede.
            </p>
          </div>
        </div>

        {/* Chamados recentes */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="font-bold text-gray-800">Chamados em aberto</p>
            <button
              onClick={() => navigate('/admin/chamados')}
              className="text-xs text-[#0066CC] font-semibold flex items-center gap-1 hover:underline"
            >
              Ver todos <ChevronRight size={13} />
            </button>
          </div>
          <div className="space-y-2">
            {abertos.map(c => (
              <button
                key={c.id}
                onClick={() => navigate(`/admin/chamados/${c.id.replace('#', '')}`)}
                className="w-full bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100 flex items-center justify-between hover:border-[#0066CC]/30 transition text-left"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${c.status === 'Aguardando técnico' ? 'bg-amber-100' : 'bg-blue-100'}`}>
                    {c.status === 'Aguardando técnico'
                      ? <Clock size={15} className="text-amber-600" />
                      : <TrendingUp size={15} className="text-blue-600" />
                    }
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-sm font-bold text-gray-700">{c.id}</p>
                      <PrioridadeBadge prioridade={c.prioridade} />
                    </div>
                    <p className="text-sm text-gray-800">{c.tipo}</p>
                    <p className="text-xs text-gray-400">{c.endereco} · {c.data}</p>
                  </div>
                </div>
                <ChevronRight size={15} className="text-gray-300 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
