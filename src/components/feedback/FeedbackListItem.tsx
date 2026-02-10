import { Mail, Phone, Eye, Trash2 } from 'lucide-react';

interface Feedback {
  slug: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  message?: string;
  created_at?: string;
  is_read?: boolean;
}

interface FeedbackListItemProps {
  feedback: Feedback;
  onView: (feedback: Feedback) => void;
  onDelete: (slug: string) => void;
}

export default function FeedbackListItem({ feedback, onView, onDelete }: FeedbackListItemProps) {
  return (
    <div
      className={`p-4 hover:bg-gray-50 transition ${
        !feedback.is_read ? 'bg-orange-50/30' : ''
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <div className="w-10 h-10 bg-[#2A4793] rounded-full flex items-center justify-center text-white font-semibold text-sm">
            {feedback.first_name.charAt(0).toUpperCase()}
            {feedback.last_name.charAt(0).toUpperCase()}
          </div>
          {!feedback.is_read && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 text-sm">
                {feedback.first_name} {feedback.last_name}
              </h3>
              {!feedback.is_read && (
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
                  Nouveau
                </span>
              )}
            </div>
            {feedback.created_at && (
              <span className="text-xs text-gray-500">
                {new Date(feedback.created_at).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs text-gray-600 mb-2">
            <div className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              <span className="truncate">{feedback.email}</span>
            </div>
            {feedback.phone_number && (
              <div className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{feedback.phone_number}</span>
              </div>
            )}
          </div>

          {feedback.message && (
            <p className="text-sm text-gray-700 line-clamp-2">
              {feedback.message}
            </p>
          )}
        </div>

        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => onView(feedback)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
            title="Voir le message"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(feedback.slug)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
            title="Supprimer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
