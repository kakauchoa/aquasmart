import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import { Trophy, Star, Target, TrendingUp, Crown } from 'lucide-react'
import Header from '../components/Header'
import { gamificacao, rankingBairro } from '../data/mockData'

const progressoIPTU = (gamificacao.metaIptu.atual / 20) * 100

export default function Gamificacao() {
  return (
    <div className="min-h-screen">
      <Header title="Pontos & Selos" />

      <div className="px-4 lg:px-8 pt-4 pb-6 space-y-4 lg:max-w-5xl lg:mx-auto">
        {/* Pontos + Meta (desktop: lado a lado) */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 space-y-4 lg:space-y-0">
          {/* Pontos hero */}
          <div className="bg-gradient-to-br from-[#0066CC] to-[#004A99] rounded-2xl p-5 shadow text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
            <Trophy size={32} className="text-yellow-300 mx-auto mb-2" />
            <p className="text-blue-200 text-xs font-medium">Seus pontos AquaSmart</p>
            <p className="text-white font-extrabold text-6xl mt-1">{gamificacao.pontos}</p>
            <p className="text-blue-300 text-xs mt-1">3º lugar no ranking da Vila Virgínia</p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="bg-white/20 rounded-full px-3 py-1 text-xs text-white font-medium flex items-center gap-1">
                <Star size={11} className="text-yellow-300" fill="currentColor" />
                {gamificacao.ranking}º de {gamificacao.totalParticipantes}
              </div>
            </div>
          </div>

          {/* Meta IPTU Verde */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E0F2FE]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🌿</span>
              <p className="font-bold text-gray-800 text-sm">Meta IPTU Verde 2027</p>
              <span className="ml-auto text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">META BATIDA!</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="65%" outerRadius="100%" data={[{ value: progressoIPTU, fill: '#16A34A' }]} startAngle={90} endAngle={-270}>
                    <RadialBar dataKey="value" cornerRadius={10} background={{ fill: '#f0fdf4' }} />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Economia alcançada</span>
                  <span className="font-bold text-[#16A34A]">{gamificacao.metaIptu.atual}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                  <div className="bg-[#16A34A] h-2 rounded-full" style={{ width: `${Math.min(progressoIPTU, 100)}%` }} />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Você garantiu <span className="font-bold text-[#0066CC]">{gamificacao.metaIptu.desconto}% de desconto</span> no IPTU 2027. Continue para atingir {gamificacao.metaIptu.proximo}%.
                </p>
              </div>
            </div>

            <div className="mt-3 bg-[#F0F9FF] rounded-xl px-3 py-2.5 flex items-start gap-2">
              <Target size={15} className="text-[#0066CC] shrink-0 mt-0.5" />
              <p className="text-xs text-[#0066CC] font-medium">{gamificacao.proximoDesafio}</p>
            </div>
          </div>
        </div>

        {/* Selos */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 px-1">Selos conquistados</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {gamificacao.selos.map((selo, i) => (
              <div
                key={i}
                className={`rounded-2xl p-4 shadow-sm border text-center ${
                  selo.conquistado ? 'bg-white border-[#E0F2FE]' : 'bg-gray-50 border-gray-100 opacity-50'
                }`}
              >
                <div className="text-3xl mb-2">{selo.icone}</div>
                <p className={`text-xs font-bold ${selo.conquistado ? 'text-gray-800' : 'text-gray-400'}`}>{selo.nome}</p>
                {!selo.conquistado && selo.desafio && (
                  <p className="text-[10px] text-gray-400 mt-1 leading-tight">{selo.desafio}</p>
                )}
                {selo.conquistado && (
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Star size={10} className="text-yellow-400" fill="currentColor" />
                    <p className="text-[10px] text-yellow-600 font-semibold">Conquistado</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ranking bairro */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 px-1">Ranking da Vila Virgínia</p>
          <div className="bg-white rounded-2xl shadow-sm border border-[#E0F2FE] overflow-hidden">
            {rankingBairro.map((pessoa, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-4 py-3 ${i < rankingBairro.length - 1 ? 'border-b border-gray-50' : ''} ${pessoa.isUser ? 'bg-[#F0F9FF]' : ''}`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  pessoa.posicao === 1 ? 'bg-yellow-100 text-yellow-700' :
                  pessoa.posicao === 2 ? 'bg-gray-100 text-gray-600' :
                  pessoa.posicao === 3 ? 'bg-orange-100 text-orange-700' : 'bg-gray-50 text-gray-500'
                }`}>
                  {pessoa.posicao === 1 ? <Crown size={13} className="text-yellow-600" /> : pessoa.posicao}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold truncate ${pessoa.isUser ? 'text-[#0066CC]' : 'text-gray-800'}`}>
                    {pessoa.nome} {pessoa.isUser && '(você)'}
                  </p>
                  <p className="text-xs text-gray-400 truncate">{pessoa.rua}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-gray-800">{pessoa.pontos}</p>
                  <div className="flex items-center justify-end gap-1 text-green-600">
                    <TrendingUp size={10} />
                    <p className="text-[10px] font-semibold">{pessoa.economia}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
