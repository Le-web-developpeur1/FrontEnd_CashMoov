import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'
import AdminLayout from './layouts/AdminLayout'
import AssistantLayout from './layouts/AssistantLayout'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './utils/ProtectedRoute'
import ScrollToTop from './ScrollToTop'

import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import ServicesParticuliers from './pages/ServicesParticuliers'
import ServicesEntreprises from './pages/ServicesEntreprises'
// import DownloadApp from './pages/DownloadApp'
import NotreReseau from './pages/NotreReseau'
import NotFound from './pages/NotFound'

import Login from './pages/auth/Login'

import AdminDashboard from './pages/admin/AdminDashboard'
import AdminConversations from './pages/admin/AdminConversations'
import AdminTestimonials from './pages/admin/AdminTestimonials'
import AdminPartners from './pages/admin/AdminPartners'

import AssistantDashboard from './pages/assistant/AssistantDashboard'
import AssistantConversations from './pages/assistant/AssistantConversations'
import AssistantChat from './pages/assistant/AssistantChat'

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/services-particuliers' element={<ServicesParticuliers />} />
            <Route path='/services-entreprises' element={<ServicesEntreprises />} />
            <Route path='/contact' element={<ContactPage />} />
            {/* <Route path='/telecharger-app' element={<DownloadApp />} /> */}
            <Route path='/notre-reseau' element={<NotreReseau />} />
            <Route path='*' element={<NotFound />} />
          </Route>

          <Route path='/admin/login' element={<Login />} />

          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route element={<AdminLayout />}>
              <Route path='/admin/dashboard' element={<AdminDashboard />} />
              <Route path='/admin/conversations' element={<AdminConversations />} />
              <Route path='/admin/testimonials' element={<AdminTestimonials />} />
              <Route path='/admin/partners' element={<AdminPartners />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['assistant']} />}>
            <Route element={<AssistantLayout />}>
              <Route path='/assistant/dashboard' element={<AssistantDashboard />} />
              <Route path='/assistant/conversations' element={<AssistantConversations />} />
              <Route path='/assistant/chat/:id' element={<AssistantChat />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App
