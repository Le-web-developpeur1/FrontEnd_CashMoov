import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { User, Mail, Lock, Save, AlertCircle, CheckCircle } from 'lucide-react';
import { profileAPI } from '@/utils/api';

export default function ProfilePage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'info' | 'email' | 'password'>('info');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const [profileForm, setProfileForm] = useState({
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    address: user?.address || '',
  });

  const [emailForm, setEmailForm] = useState({
    new_email: '',
    current_password: '',
  });

  const [passwordForm, setPasswordForm] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  });

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await profileAPI.updateProfile(profileForm);
      setSuccess('Profil mis à jour avec succès !');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await profileAPI.changeEmail(emailForm.new_email, emailForm.current_password);
      setSuccess('Email modifié avec succès ! Veuillez vous reconnecter.');
      setEmailForm({ new_email: '', current_password: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (passwordForm.new_password !== passwordForm.confirm_password) {
      setError('Les mots de passe ne correspondent pas');
      setLoading(false);
      return;
    }

    if (passwordForm.new_password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères');
      setLoading(false);
      return;
    }

    try {
      await profileAPI.changePassword(passwordForm.current_password, passwordForm.new_password);
      setSuccess('Mot de passe modifié avec succès !');
      setPasswordForm({ current_password: '', new_password: '', confirm_password: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Mon profil</h1>
        <p className="text-gray-600 mt-2">Gérer vos informations personnelles</p>
      </div>

      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 px-6 py-4 font-medium transition ${
              activeTab === 'info'
                ? 'text-[#2A4793] border-b-2 border-[#2A4793]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <User className="w-5 h-5 inline-block mr-2" />
            Informations personnelles
          </button>
          <button
            onClick={() => setActiveTab('email')}
            className={`flex-1 px-6 py-4 font-medium transition ${
              activeTab === 'email'
                ? 'text-[#2A4793] border-b-2 border-[#2A4793]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Mail className="w-5 h-5 inline-block mr-2" />
            Changer l'email
          </button>
          <button
            onClick={() => setActiveTab('password')}
            className={`flex-1 px-6 py-4 font-medium transition ${
              activeTab === 'password'
                ? 'text-[#2A4793] border-b-2 border-[#2A4793]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Lock className="w-5 h-5 inline-block mr-2" />
            Changer le mot de passe
          </button>
        </div>
      </div>

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          <p className="text-green-700 text-sm">{success}</p>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-md p-6">
        {activeTab === 'info' && (
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  value={profileForm.first_name}
                  onChange={(e) => setProfileForm({ ...profileForm, first_name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  value={profileForm.last_name}
                  onChange={(e) => setProfileForm({ ...profileForm, last_name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email actuel
              </label>
              <input
                type="email"
                value={user?.email}
                disabled
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600"
              />
              <p className="text-xs text-gray-500 mt-1">
                Pour changer votre email, utilisez l'onglet "Changer l'email"
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse (optionnel)
              </label>
              <textarea
                value={profileForm.address}
                onChange={(e) => setProfileForm({ ...profileForm, address: e.target.value })}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2A4793] text-white px-6 py-3 rounded-lg hover:bg-[#1f356d] transition font-medium flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Save className="w-5 h-5" />
              {loading ? 'Enregistrement...' : 'Enregistrer les modifications'}
            </button>
          </form>
        )}

        {activeTab === 'email' && (
          <form onSubmit={handleChangeEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email actuel
              </label>
              <input
                type="email"
                value={user?.email}
                disabled
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nouvel email
              </label>
              <input
                type="email"
                value={emailForm.new_email}
                onChange={(e) => setEmailForm({ ...emailForm, new_email: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe actuel
              </label>
              <input
                type="password"
                value={emailForm.current_password}
                onChange={(e) => setEmailForm({ ...emailForm, current_password: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Confirmez votre identité avec votre mot de passe actuel
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2A4793] text-white px-6 py-3 rounded-lg hover:bg-[#1f356d] transition font-medium flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Mail className="w-5 h-5" />
              {loading ? 'Modification...' : 'Changer l\'email'}
            </button>
          </form>
        )}

        {activeTab === 'password' && (
          <form onSubmit={handleChangePassword} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe actuel
              </label>
              <input
                type="password"
                value={passwordForm.current_password}
                onChange={(e) => setPasswordForm({ ...passwordForm, current_password: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                value={passwordForm.new_password}
                onChange={(e) => setPasswordForm({ ...passwordForm, new_password: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Minimum 8 caractères
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirmer le nouveau mot de passe
              </label>
              <input
                type="password"
                value={passwordForm.confirm_password}
                onChange={(e) => setPasswordForm({ ...passwordForm, confirm_password: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2A4793] text-white px-6 py-3 rounded-lg hover:bg-[#1f356d] transition font-medium flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Lock className="w-5 h-5" />
              {loading ? 'Modification...' : 'Changer le mot de passe'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
