import { Link, useLocation } from 'react-router-dom'
import { Home, FileText, AlertTriangle, Trophy, BarChart2, Droplets } from 'lucide-react'
import { usuario } from '../data/mockData'

const items = [
  { to: '/home', icon: Home, label: 'Início' },
  { to: '/faturas', icon: FileText, label: 'Faturas' },
  { to: '/reportar', icon: AlertTriangle, label: 'Reportar' },
  { to: '/gamificacao', icon: Trophy, label: 'Pontos' },
  { to: '/painel', icon: BarChart2, label: 'Bairro' },
]

export default function BottomNav() {
  const { pathname } = useLocation()

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-56 bg-white border-r border-gray-100 shadow-sm z-30">
        <div className="px-5 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0066CC] rounded-lg flex items-center justify-center">
              <Droplets size={18} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-[#0066CC] text-sm leading-tight">AquaSmart RP</p>
              <p className="text-[10px] text-gray-400 font-medium">Ribeirão Preto</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {items.map(({ to, icon: Icon, label }) => {
            const active = pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active ? 'bg-[#E0F2FE] text-[#0066CC]' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={18} strokeWidth={active ? 2.5 : 1.8} />
                <span>{label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="px-4 py-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0066CC] flex items-center justify-center text-white text-xs font-bold shrink-0">
              {usuario.avatar}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-700 truncate">{usuario.nome.split(' ').slice(0, 2).join(' ')}</p>
              <p className="text-[10px] text-gray-400">Mat. {usuario.matricula}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-40">
        <div className="flex">
          {items.map(({ to, icon: Icon, label }) => {
            const active = pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`flex-1 flex flex-col items-center py-2 gap-0.5 text-xs font-medium transition-colors ${
                  active ? 'text-[#0066CC]' : 'text-gray-400'
                }`}
              >
                <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
                <span>{label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
