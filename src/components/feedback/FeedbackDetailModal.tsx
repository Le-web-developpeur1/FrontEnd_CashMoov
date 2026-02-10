import { Mail, Phone, Trash2, X } from 'lucide-react';

interface Feedback {
  slug: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  message?: string;
  created_at?: string;
}

interface FeedbackDetailModalProps {
  feedback: Feedback | null;
  loading: boolean;
  onClose: () => void;
  onDelete: (slug: string) => void;
}

export default function FeedbackDetailModal({ feedback, loading, onClose, onDelete }: FeedbackDetailModalProps) {
  if (!feedback) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6 border-b flex items-center justify-between sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">
            Message de {feedback.first_name} {feedback.last_name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            disabled={loading}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {loading ? (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2A4793] mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des détails...</p>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <p className="text-gray-900">
                  {feedback.first_name} {feedback.last_name}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <a 
                  href={`mailto:${feedback.email}`}
                  className="text-[#2A4793] hover:underline flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {feedback.email}
                </a>
              </div>

              {feedback.phone_number && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <a 
                    href={`tel:${feedback.phone_number}`}
                    className="text-[#2A4793] hover:underline flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    {feedback.phone_number}
                  </a>
                </div>
              )}

              {feedback.created_at && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date de réception
                  </label>
                  <p className="text-gray-900">
                    {new Date(feedback.created_at).toLocaleDateString('fr-FR', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              )}
            </div>

            {feedback.message && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-gray-900 whitespace-pre-wrap">
                    {feedback.message}
                  </p>
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-4 border-t">
              <a
                href={`mailto:${feedback.email}`}
                onClick={(e) => {
                  if (!feedback.email) {
                    e.preventDefault();
                    alert('Email non disponible');
                  }
                }}
                className="flex-1 bg-[#2A4793] text-white px-6 py-3 rounded-lg hover:bg-[#1f356d] transition font-medium text-center flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Répondre par email
              </a>
              <button
                onClick={() => {
                  if (feedback.email) {
                    navigator.clipboard.writeText(feedback.email);
                    alert(`Email copié: ${feedback.email}`);
                  }
                }}
                className="px-6 py-3 border border-[#2A4793] text-[#2A4793] rounded-lg hover:bg-blue-50 transition font-medium flex items-center gap-2"
                title="Copier l'email"
              >
                <Mail className="w-5 h-5" />
                Copier
              </button>
              <button
                onClick={() => {
                  if (!feedback.slug) {
                    alert('Erreur: Impossible de supprimer, slug manquant');
                    return;
                  }
                  onDelete(feedback.slug);
                }}
                className="px-6 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition font-medium flex items-center gap-2"
              >
                <Trash2 className="w-5 h-5" />
                Supprimer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
