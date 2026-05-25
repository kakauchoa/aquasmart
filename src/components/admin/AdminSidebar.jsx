import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, AlertTriangle, Map, BarChart2, Settings, Droplets } from 'lucide-react'

const items = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', enabled: true },
  { to: '/admin/chamados', icon: AlertTriangle, label: 'Chamados', enabled: true },
  { to: null, icon: Map, label: 'Mapa', enabled: false },
  { to: null, icon: BarChart2, label: 'Relatórios', enabled: false },
  { to: null, icon: Settings, label: 'Configurações', enabled: false },
]

export default function AdminSidebar() {
  const { pathname } = useLocation()

  return (
    <aside className="w-56 bg-white border-r border-gray-100 min-h-screen flex flex-col shadow-sm shrink-0">
      <div className="px-5 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0066CC] rounded-lg flex items-center justify-center">
            <Droplets size={18} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-[#0066CC] text-sm leading-tight">AquaSmart</p>
            <p className="text-[10px] text-gray-400 font-medium">Painel SAERP</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {items.map(({ to, icon: Icon, label, enabled }) => {
          const active = to && (pathname === to || (to !== '/admin' && pathname.startsWith(to)))
          if (!enabled) {
            return (
              <div
                key={label}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-300 cursor-not-allowed text-sm"
              >
                <Icon size={18} />
                <span>{label}</span>
              </div>
            )
          }
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                active
                  ? 'bg-[#E0F2FE] text-[#0066CC]'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon size={18} strokeWidth={active ? 2.5 : 1.8} />
              <span>{label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="px-4 py-4 border-t border-gray-100">
        <p className="text-[10px] text-gray-400 text-center">SAERP — Sistema de Água e Esgoto</p>
        <p className="text-[10px] text-gray-300 text-center">Ribeirão Preto</p>
      </div>
    </aside>
  )
}
