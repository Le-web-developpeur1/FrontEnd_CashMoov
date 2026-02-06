import { useState } from 'react';
import { Plus, Edit, Trash2, X, Upload } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description?: string;
}

export default function AdminPartners() {
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: '1',
      name: 'Orange Money',
      logo: '/partners/orange.png',
      description: 'Partenaire de paiement mobile',
    },
    {
      id: '2',
      name: 'MTN Mobile Money',
      logo: '/partners/mtn.png',
      description: 'Service de transfert d\'argent',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    description: '',
  });

  const handleOpenModal = (partner?: Partner) => {
    if (partner) {
      setEditingPartner(partner);
      setFormData({
        name: partner.name,
        logo: partner.logo,
        description: partner.description || '',
      });
    } else {
      setEditingPartner(null);
      setFormData({ name: '', logo: '', description: '' });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPartner(null);
    setFormData({ name: '', logo: '', description: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingPartner) {
      setPartners(partners.map(p => 
        p.id === editingPartner.id 
          ? { ...p, ...formData }
          : p
      ));
    } else {
      const newPartner: Partner = {
        id: Date.now().toString(),
        ...formData,
      };
      setPartners([...partners, newPartner]);
    }

    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce partenaire ?')) {
      setPartners(partners.filter(p => p.id !== id));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion des partenaires</h1>
          <p className="text-gray-600 mt-2">{partners.length} partenaire(s)</p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="bg-[#2A4793] text-white px-6 py-3 rounded-lg hover:bg-[#1f356d] transition flex items-center gap-2 font-medium"
        >
          <Plus className="w-5 h-5" />
          Ajouter un partenaire
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<div class="text-gray-400 text-4xl font-bold">${partner.name.charAt(0)}</div>`;
                  }}
                />
              ) : (
                <div className="text-gray-400 text-4xl font-bold">
                  {partner.name.charAt(0)}
                </div>
              )}
            </div>

            <h3 className="font-bold text-gray-900 text-lg mb-2">{partner.name}</h3>

            {partner.description && (
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {partner.description}
              </p>
            )}

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleOpenModal(partner)}
                className="flex-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition flex items-center justify-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Modifier
              </button>
              <button
                onClick={() => handleDelete(partner.id)}
                className="flex-1 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition flex items-center justify-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">

            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingPartner ? 'Modifier le partenaire' : 'Ajouter un partenaire'}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom du partenaire
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL du logo
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.logo}
                    onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none"
                    placeholder="https://example.com/logo.png"
                    required
                  />
                  <button
                    type="button"
                    className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition flex items-center gap-2"
                    title="Upload (à implémenter)"
                  >
                    <Upload className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Entrez l'URL du logo ou uploadez une image
                </p>
              </div>

              {formData.logo && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aperçu
                  </label>
                  <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img
                      src={formData.logo}
                      alt="Aperçu"
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="text-red-500 text-sm">Image invalide</div>';
                      }}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (optionnel)
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none resize-none"
                  placeholder="Brève description du partenaire..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#2A4793] text-white px-6 py-3 rounded-lg hover:bg-[#1f356d] transition font-medium"
                >
                  {editingPartner ? 'Modifier' : 'Ajouter'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
