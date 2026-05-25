import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Droplets, Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => navigate('/home'), 900)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0066CC] to-[#004A99] flex flex-col items-center justify-center px-6 py-10">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-4">
            <Droplets size={42} className="text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">AquaSmart RP</h1>
          <p className="text-blue-200 text-sm mt-1">Monitoramento inteligente de água</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-12 h-0.5 bg-blue-400/40 rounded" />
            <span className="text-blue-300 text-xs font-medium">em parceria com SAERP</span>
            <div className="w-12 h-0.5 bg-blue-400/40 rounded" />
          </div>
        </div>

        <form onSubmit={handleLogin} className="bg-white rounded-3xl p-6 shadow-2xl space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Matrícula ou CPF</label>
            <input
              type="text"
              defaultValue="0847-2"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]/30 focus:border-[#0066CC] transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Senha</label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                defaultValue="••••••"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC]/30 focus:border-[#0066CC] transition pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0066CC] text-white font-bold py-3.5 rounded-xl text-sm transition hover:bg-[#0055AA] active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {loading ? (
              <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
            ) : null}
            {loading ? 'Entrando...' : 'Entrar'}
          </button>

          <p className="text-center text-xs text-[#0066CC] font-medium cursor-pointer hover:underline">
            Esqueci minha senha
          </p>
        </form>

        <p className="text-center text-blue-300 text-xs mt-6">
          Versão 2.1.0 · Ribeirão Preto, SP
        </p>
      </div>
    </div>
  )
}
