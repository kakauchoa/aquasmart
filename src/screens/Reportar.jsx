import { useState } from 'react'
import { AlertTriangle, CheckCircle, Clock, MapPin, Camera, Send } from 'lucide-react'
import Header from '../components/Header'
import { alertasEnviados } from '../data/mockData'

const tiposProblema = [
  'Vazamento na calçada / via',
  'Vazamento no hidrômetro',
  'Falta d\'água',
  'Pressão baixa',
  'Água com cor / odor anormal',
  'Bueiro com água brotando',
  'Outro',
]

export default function Reportar() {
  const [tipo, setTipo] = useState('')
  const [enviado, setEnviado] = useState(false)

  function handleEnviar(e) {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 3000)
  }

  return (
    <div className="min-h-screen">
      <Header title="Reportar Problema" />

      <div className="px-4 lg:px-8 pt-4 pb-6 lg:max-w-5xl lg:mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-6 space-y-4 lg:space-y-0">
          {/* Formulário */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E0F2FE]">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={18} className="text-amber-500" />
              <p className="font-bold text-gray-800">Novo alerta ao SAERP</p>
            </div>

            <form onSubmit={handleEnviar} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Tipo de problema *</label>
                <select
                  value={tipo}
                  onChange={e => setTipo(e.target.value)}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]/30 focus:border-[#0066CC] bg-white"
                >
                  <option value="">Selecione o tipo...</option>
                  {tiposProblema.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Endereço da ocorrência *</label>
                <div className="relative">
                  <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    defaultValue="Rua das Acácias, 380"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]/30 focus:border-[#0066CC]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Descrição</label>
                <textarea
                  rows={4}
                  placeholder="Descreva o problema com detalhes..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]/30 focus:border-[#0066CC] resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full border-2 border-dashed border-gray-200 rounded-xl py-3 flex items-center justify-center gap-2 text-sm text-gray-400 font-medium hover:border-[#0066CC]/30 transition"
              >
                <Camera size={16} />
                Adicionar foto (opcional)
              </button>

              <button
                type="submit"
                className="w-full bg-[#0066CC] text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-[#0055AA] transition active:scale-95"
              >
                <Send size={15} />
                Enviar alerta ao SAERP
              </button>
            </form>

            {enviado && (
              <div className="mt-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-2 text-green-700 text-sm font-semibold">
                <CheckCircle size={16} />
                Alerta enviado! O SAERP foi notificado.
              </div>
            )}
          </div>

          {/* Alertas enviados */}
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 px-1 mt-4 lg:mt-0">Meus alertas enviados</p>
            <div className="space-y-2">
              {alertasEnviados.map(alerta => (
                <div key={alerta.id} className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-[#E0F2FE]">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${alerta.status === 'Resolvido' ? 'bg-green-100' : 'bg-amber-100'}`}>
                        {alerta.status === 'Resolvido'
                          ? <CheckCircle size={15} className="text-green-600" />
                          : <Clock size={15} className="text-amber-600" />
                        }
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{alerta.tipo}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{alerta.local}</p>
                        <p className="text-xs text-gray-400">{alerta.data}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${alerta.status === 'Resolvido' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {alerta.status}
                    </span>
                  </div>
                </div>
              ))}

              {/* Info card */}
              <div className="bg-[#F0F9FF] border border-[#E0F2FE] rounded-2xl px-4 py-3 mt-2">
                <p className="text-xs font-bold text-[#0066CC] mb-1">Como funciona?</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Ao enviar um alerta, o SAERP recebe a notificação em tempo real. Um técnico será designado para avaliação. Você pode acompanhar o status aqui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
