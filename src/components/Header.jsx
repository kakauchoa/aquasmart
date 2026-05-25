import { Bell } from 'lucide-react'
import { usuario } from '../data/mockData'

export default function Header({ title }) {
  return (
    <header className="bg-white border-b border-[#E0F2FE] px-4 lg:px-8 py-3 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 lg:hidden rounded-full bg-[#0066CC] flex items-center justify-center text-white text-xs font-bold shrink-0">
          {usuario.avatar}
        </div>
        <span className="font-semibold lg:font-bold text-gray-800 text-sm lg:text-xl">{title}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden lg:block text-sm text-gray-500 font-medium">
          {usuario.nome.split(' ').slice(0, 2).join(' ')} · Mat. {usuario.matricula}
        </span>
        <div className="relative">
          <Bell size={20} className="text-gray-500" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center font-bold">1</span>
        </div>
      </div>
    </header>
  )
}
