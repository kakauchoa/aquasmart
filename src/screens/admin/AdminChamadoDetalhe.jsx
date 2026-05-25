import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, MapPin, User, Calendar, Clock, CheckCircle, AlertTriangle, UserCheck } from 'lucide-react'
import { chamadosSaerp } from '../../data/mockData'

function PrioridadeBadge({ prioridade }) {
  const map = {
    Alta: 'bg-red-100 text-red-700 border border-red-200',
    Média: 'bg-amber-100 text-amber-700 border border-amber-200',
    Baixa: 'bg-slate-100 text-slate-600 border border-slate-200',
  }
  return <span className={`text-xs font-bold px-3 py-1 rounded-full ${map[prioridade]}`}>{prioridade} Prioridade</span>
}

const tecnicos = ['João R.', 'Carlos M.', 'Ana P.', 'Marcos T.']

export default function AdminChamadoDetalhe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const chamado = chamadosSaerp.find(c => c.id === `#${id}`)
  const [tecnicoSelecionado, setTecnicoSelecionado] = useState(chamado?.tecnico || '')
  const [atribuido, setAtribuido] = useState(!!chamado?.tecnico)

  if (!chamado) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        <p>Chamado não encontrado</p>
      </div>
    )
  }

  function handleAtribuir() {
    if (tecnicoSelecionado) setAtribuido(true)
  }

  const statusColor = {
    'Resolvido': 'bg-green-100 text-green-700',
    'Em atendimento': 'bg-blue-100 text-blue-700',
    'Aguardando técnico': 'bg-amber-100 text-amber-700',
  }

  return (
    <div className="flex-1 bg-[#F8FAFC] p-6 overflow-y-auto">
      <div className="max-w-2xl mx-auto space-y-5">
        <button
          onClick={() => navigate('/admin/chamados')}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition"
        >
          <ArrowLeft size={16} />
          Voltar para Chamados
        </button>

        {/* Header chamado */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <p className="text-xs font-bold text-gray-400 mb-1">{chamado.id}</p>
              <h2 className="text-xl font-extrabold text-gray-900">{chamado.tipo}</h2>
            </div>
            <PrioridadeBadge prioridade={chamado.prioridade} />
          </div>

          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${statusColor[chamado.status]}`}>
            {chamado.status}
          </span>

          <div className="space-y-2.5">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <MapPin size={15} className="text-gray-400 shrink-0" />
              <span>{chamado.endereco}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Calendar size={15} className="text-gray-400 shrink-0" />
              <span>Aberto em {chamado.data}</span>
            </div>
            {chamado.tecnico && (
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <User size={15} className="text-gray-400 shrink-0" />
                <span>Técnico responsável: <strong>{chamado.tecnico}</strong></span>
              </div>
            )}
          </div>

          {chamado.descricao && (
            <div className="mt-4 bg-gray-50 rounded-xl p-3">
              <p className="text-xs font-semibold text-gray-500 mb-1">Descrição</p>
              <p className="text-sm text-gray-700">{chamado.descricao}</p>
            </div>
          )}
        </div>

        {/* Atribuir técnico */}
        {chamado.status !== 'Resolvido' && (
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <UserCheck size={16} className="text-[#0066CC]" />
              <p className="font-bold text-gray-800">Atribuir técnico</p>
            </div>
            <div className="flex gap-3">
              <select
                value={tecnicoSelecionado}
                onChange={e => { setTecnicoSelecionado(e.target.value); setAtribuido(false) }}
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]/30 bg-white"
              >
                <option value="">Selecione o técnico...</option>
                {tecnicos.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <button
                onClick={handleAtribuir}
                disabled={!tecnicoSelecionado}
                className="bg-[#0066CC] text-white font-bold px-5 py-2.5 rounded-xl text-sm disabled:opacity-40 hover:bg-[#0055AA] transition"
              >
                {atribuido ? 'Atribuído ✓' : 'Atribuir'}
              </button>
            </div>
            {atribuido && (
              <div className="mt-2 flex items-center gap-2 text-green-600 text-xs font-semibold">
                <CheckCircle size={13} />
                Técnico {tecnicoSelecionado} designado com sucesso
              </div>
            )}
          </div>
        )}

        {/* Histórico */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={16} className="text-gray-400" />
            <p className="font-bold text-gray-800">Histórico de atualizações</p>
          </div>
          <div className="space-y-4">
            {chamado.historico.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full shrink-0 mt-0.5 ${i === 0 ? 'bg-[#0066CC]' : 'bg-gray-200'}`} />
                  {i < chamado.historico.length - 1 && <div className="w-0.5 flex-1 bg-gray-100 mt-1" />}
                </div>
                <div className="pb-3">
                  <p className="text-xs text-gray-400 font-medium">{item.data}</p>
                  <p className="text-sm text-gray-700 mt-0.5">{item.acao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
