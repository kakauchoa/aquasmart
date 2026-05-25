import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Filter, ChevronRight, Clock, TrendingUp, CheckCircle } from 'lucide-react'
import { chamadosSaerp } from '../../data/mockData'

function PrioridadeBadge({ prioridade }) {
  const map = {
    Alta: 'bg-red-100 text-red-700',
    Média: 'bg-amber-100 text-amber-700',
    Baixa: 'bg-slate-100 text-slate-600',
  }
  return <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${map[prioridade]}`}>{prioridade}</span>
}

function StatusIcon({ status }) {
  if (status === 'Resolvido') return <CheckCircle size={15} className="text-green-600" />
  if (status === 'Em atendimento') return <TrendingUp size={15} className="text-blue-600" />
  return <Clock size={15} className="text-amber-600" />
}

const todosStatus = ['Todos', 'Aguardando técnico', 'Em atendimento', 'Resolvido']
const todasPrioridades = ['Todas', 'Alta', 'Média', 'Baixa']

export default function AdminChamados() {
  const navigate = useNavigate()
  const [busca, setBusca] = useState('')
  const [statusFiltro, setStatusFiltro] = useState('Todos')
  const [prioridadeFiltro, setPrioridadeFiltro] = useState('Todas')

  const filtrados = chamadosSaerp.filter(c => {
    const matchBusca = !busca || c.id.toLowerCase().includes(busca.toLowerCase()) || c.tipo.toLowerCase().includes(busca.toLowerCase()) || c.endereco.toLowerCase().includes(busca.toLowerCase())
    const matchStatus = statusFiltro === 'Todos' || c.status === statusFiltro
    const matchPrioridade = prioridadeFiltro === 'Todas' || c.prioridade === prioridadeFiltro
    return matchBusca && matchStatus && matchPrioridade
  })

  return (
    <div className="flex-1 bg-[#F8FAFC] p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-5">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Chamados</h1>
          <p className="text-sm text-gray-500 mt-0.5">{filtrados.length} chamados encontrados</p>
        </div>

        {/* Busca */}
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por ID, tipo ou endereço..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]/30 focus:border-[#0066CC]"
          />
        </div>

        {/* Filtros */}
        <div className="flex gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter size={13} className="text-gray-400" />
            <span className="text-xs text-gray-500 font-medium">Status:</span>
          </div>
          {todosStatus.map(s => (
            <button
              key={s}
              onClick={() => setStatusFiltro(s)}
              className={`text-xs px-3 py-1.5 rounded-full font-semibold transition ${statusFiltro === s ? 'bg-[#0066CC] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0066CC]/40'}`}
            >
              {s}
            </button>
          ))}
          <span className="text-xs text-gray-300">|</span>
          {todasPrioridades.map(p => (
            <button
              key={p}
              onClick={() => setPrioridadeFiltro(p)}
              className={`text-xs px-3 py-1.5 rounded-full font-semibold transition ${prioridadeFiltro === p ? 'bg-gray-700 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'}`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Lista */}
        <div className="space-y-2">
          {filtrados.map(c => (
            <button
              key={c.id}
              onClick={() => navigate(`/admin/chamados/${c.id.replace('#', '')}`)}
              className="w-full bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 flex items-center justify-between hover:border-[#0066CC]/30 hover:shadow-md transition text-left"
            >
              <div className="flex items-start gap-4">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  c.status === 'Resolvido' ? 'bg-green-100' :
                  c.status === 'Em atendimento' ? 'bg-blue-100' : 'bg-amber-100'
                }`}>
                  <StatusIcon status={c.status} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-sm font-bold text-gray-500">{c.id}</span>
                    <PrioridadeBadge prioridade={c.prioridade} />
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      c.status === 'Resolvido' ? 'bg-green-100 text-green-700' :
                      c.status === 'Em atendimento' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>{c.status}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{c.tipo}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{c.endereco} · {c.data}</p>
                  {c.tecnico && <p className="text-xs text-[#0066CC] font-medium mt-0.5">Técnico: {c.tecnico}</p>}
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-300 shrink-0" />
            </button>
          ))}
          {filtrados.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <Search size={32} className="mx-auto mb-2 opacity-30" />
              <p className="text-sm">Nenhum chamado encontrado</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
