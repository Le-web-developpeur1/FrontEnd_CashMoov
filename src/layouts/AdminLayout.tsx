import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Users, LogOut, Menu, X, Mail } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { to: '/admin/users', icon: Users, label: 'Utilisateurs' },
    { to: '/admin/feedback', icon: Mail, label: 'Messages clients' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      
      <motion.aside 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex lg:flex-col w-64 bg-[#2A4793] text-white"
      >
        <div className="p-6 border-b border-[#1f356d]">
          <h2 className="text-2xl font-bold text-[#F7CE47]">Cash Moov</h2>
          <p className="text-sm mt-2 opacity-90">Admin Panel</p>
          <p className="text-xs mt-1 opacity-75">{user?.last_name} {user?.first_name}</p>
        </div>

        <nav className="flex-1 py-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.to}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-3 transition ${
                    isActive
                      ? 'bg-[#1f356d] border-l-4 border-[#F7CE47]'
                      : 'hover:bg-[#1f356d]'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <motion.button
          whileHover={{ backgroundColor: '#1f356d' }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="flex items-center gap-3 px-6 py-4 transition border-t border-[#1f356d]"
        >
          <LogOut className="w-5 h-5" />
          Déconnexion
        </motion.button>
      </motion.aside>

      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" 
              onClick={() => setSidebarOpen(false)}
            >
              <motion.aside 
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "spring", damping: 25 }}
                className="w-64 h-full bg-[#2A4793] text-white" 
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-[#1f356d] flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-[#F7CE47]">Cash Moov</h2>
                    <p className="text-xs mt-1 opacity-75">{user?.last_name} {user?.first_name}</p>
                  </div>
                  <button onClick={() => setSidebarOpen(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="py-6">
                  {menuItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setSidebarOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-6 py-3 transition ${
                          isActive
                            ? 'bg-[#1f356d] border-l-4 border-[#F7CE47]'
                            : 'hover:bg-[#1f356d]'
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </NavLink>
                  ))}
                </nav>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-6 py-4 hover:bg-[#1f356d] transition border-t border-[#1f356d] absolute bottom-0 w-full"
                >
                  <LogOut className="w-5 h-5" />
                  Déconnexion
                </button>
              </motion.aside>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col overflow-hidden">
        
        <motion.header 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-sm px-6 py-4 flex items-center justify-between lg:justify-end"
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4">
            <NavLink to="/admin/profile" className="text-right hover:opacity-80 transition">
              <p className="text-sm font-medium text-gray-900">{user?.last_name} {user?.first_name}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.user_type}</p>
            </NavLink>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-[#2A4793] rounded-full flex items-center justify-center text-white font-semibold"
            >
              {user?.last_name.charAt(0).toUpperCase()} {user?.first_name.charAt(0).toUpperCase()}
            </motion.div>
          </div>
        </motion.header>

        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 overflow-y-auto p-6"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}
