import { useNavigate, useLocation } from 'react-router-dom'
import { Shield, User } from 'lucide-react'

export default function ModeSwitchFAB() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isAdmin = pathname.startsWith('/admin')

  return (
    <button
      onClick={() => navigate(isAdmin ? '/home' : '/admin')}
      className={`fixed top-3 right-3 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md transition-all ${
        isAdmin
          ? 'bg-amber-500 text-white'
          : 'bg-white text-[#0066CC] border border-[#0066CC]'
      }`}
    >
      {isAdmin ? <User size={14} /> : <Shield size={14} />}
      {isAdmin ? 'Visão Cidadão' : 'Visão SAERP'}
    </button>
  )
}
