import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './screens/Login'
import Home from './screens/Home'
import Faturas from './screens/Faturas'
import Reportar from './screens/Reportar'
import Gamificacao from './screens/Gamificacao'
import Painel from './screens/Painel'
import AdminDashboard from './screens/admin/AdminDashboard'
import AdminChamados from './screens/admin/AdminChamados'
import AdminChamadoDetalhe from './screens/admin/AdminChamadoDetalhe'
import BottomNav from './components/BottomNav'
import ModeSwitchFAB from './components/ModeSwitchFAB'
import ContactModal from './components/ContactModal'
import AdminSidebar from './components/admin/AdminSidebar'

function CitizenLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F0F9FF]">
      <BottomNav />
      <div className="lg:pl-56 pb-20 lg:pb-0">
        {children}
      </div>
      <ContactModal />
      <ModeSwitchFAB />
    </div>
  )
}

function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      {children}
      <ModeSwitchFAB />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<CitizenLayout><Home /></CitizenLayout>} />
        <Route path="/faturas" element={<CitizenLayout><Faturas /></CitizenLayout>} />
        <Route path="/reportar" element={<CitizenLayout><Reportar /></CitizenLayout>} />
        <Route path="/gamificacao" element={<CitizenLayout><Gamificacao /></CitizenLayout>} />
        <Route path="/painel" element={<CitizenLayout><Painel /></CitizenLayout>} />

        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/chamados" element={<AdminLayout><AdminChamados /></AdminLayout>} />
        <Route path="/admin/chamados/:id" element={<AdminLayout><AdminChamadoDetalhe /></AdminLayout>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
