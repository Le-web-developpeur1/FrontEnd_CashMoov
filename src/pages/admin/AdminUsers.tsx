import { useState, useEffect } from 'react';
import { usersAPI } from '@/utils/api';
import { Users, Plus, Edit, Trash2, Search } from 'lucide-react';
import UserFormModal from '@/components/modals/UserFormModal';
import DeleteConfirmModal from '@/components/modals/DeleteConfirmModal';

interface User {
  slug: string;
  first_name: string;
  last_name: string;
  email: string;
  address: string | null;
  user_type: string;
}

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [userToDelete, setUserToDelete] = useState<{ slug: string; name: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await usersAPI.getAll();
      const usersList = Array.isArray(data) ? data : (data.results || []);
      setUsers(usersList);
    } catch (error) {
      alert('Erreur lors du chargement des utilisateurs');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (formData: any) => {
    try {
      if (editingUser) {
        await usersAPI.update(editingUser.slug, {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          address: formData.address || undefined,
        });
        alert('Utilisateur mis à jour avec succès');
      } else {
        await usersAPI.create(formData);
        alert('Utilisateur créé avec succès');
      }
      
      loadUsers();
      setShowFormModal(false);
      setEditingUser(null);
    } catch (error: any) {
      alert(error.message || 'Erreur lors de l\'opération');
    }
  };

  const handleDeleteConfirm = async (password: string) => {
    if (!userToDelete) return;
    
    try {
      await usersAPI.delete(userToDelete.slug, password);
      alert('Utilisateur supprimé avec succès');
      loadUsers();
    } catch (error: any) {
      alert(error.message || 'Mot de passe incorrect ou erreur');
      throw error;
    }
  };

  const openFormModal = (user?: User) => {
    setEditingUser(user || null);
    setShowFormModal(true);
  };

  const openDeleteModal = (slug: string, name: string) => {
    setUserToDelete({ slug, name });
    setShowDeleteModal(true);
  };

  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2A4793]"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion des utilisateurs</h1>
          <p className="text-gray-600">{users.length} utilisateur(s)</p>
        </div>
        <button
          onClick={() => openFormModal()}
          className="bg-[#2A4793] text-white px-6 py-3 rounded-lg hover:bg-[#1f356d] transition flex items-center gap-2 font-medium"
        >
          <Plus className="w-5 h-5" />
          Nouvel utilisateur
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un utilisateur..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Utilisateur</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Adresse</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                  <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  Aucun utilisateur trouvé
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.slug} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#2A4793] rounded-full flex items-center justify-center text-white font-semibold">
                        {user.first_name.charAt(0)}{user.last_name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {user.first_name} {user.last_name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 text-gray-600">{user.address || '-'}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openFormModal(user)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="Modifier"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => openDeleteModal(user.slug, `${user.first_name} ${user.last_name}`)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <UserFormModal
        isOpen={showFormModal}
        onClose={() => {
          setShowFormModal(false);
          setEditingUser(null);
        }}
        onSubmit={handleFormSubmit}
        editingUser={editingUser}
      />

      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setUserToDelete(null);
        }}
        onConfirm={handleDeleteConfirm}
        userName={userToDelete?.name || ''}
      />
    </div>
  );
}
