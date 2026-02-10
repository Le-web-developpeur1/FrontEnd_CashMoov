import { useState, useEffect } from 'react';
import { Search, MessageSquare } from 'lucide-react';
import { feedbackAPI } from '@/utils/api';
import FeedbackStatsCard from '@/components/feedback/FeedbackStatsCard';
import FeedbackListItem from '@/components/feedback/FeedbackListItem';
import FeedbackDetailModal from '@/components/feedback/FeedbackDetailModal';

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

// Clé localStorage pour stocker les messages lus
const READ_MESSAGES_KEY = 'cashmoov_read_messages';

// Fonctions helper pour gérer le localStorage
const getReadMessages = (): string[] => {
  try {
    const stored = localStorage.getItem(READ_MESSAGES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const markMessageAsRead = (slug: string) => {
  const readMessages = getReadMessages();
  if (!readMessages.includes(slug)) {
    readMessages.push(slug);
    localStorage.setItem(READ_MESSAGES_KEY, JSON.stringify(readMessages));
  }
};

export default function AdminFeedback() {
  const [searchQuery, setSearchQuery] = useState('');
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null);
  const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await feedbackAPI.getAll();
            
      // Récupérer les messages lus depuis localStorage
      const readMessages = getReadMessages();
      
      // Ajouter le statut is_read à chaque message
      const feedbacksWithReadStatus = (Array.isArray(data) ? data : data.results || []).map((feedback: Feedback) => ({
        ...feedback,
        is_read: readMessages.includes(feedback.slug)
      }));
      
      setFeedbacks(feedbacksWithReadStatus);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredFeedbacks = feedbacks.filter((feedback) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      feedback.first_name.toLowerCase().includes(searchLower) ||
      feedback.last_name.toLowerCase().includes(searchLower) ||
      feedback.email.toLowerCase().includes(searchLower) ||
      feedback.message?.toLowerCase().includes(searchLower);
    
    const matchesFilter = 
      filter === 'all' ||
      (filter === 'read' && feedback.is_read) ||
      (filter === 'unread' && !feedback.is_read);
    
    return matchesSearch && matchesFilter;
  });

  const handleOpenMessage = async (feedback: Feedback) => {
    try {
      setLoadingDetails(true);
      
 
      const fullDetails = await feedbackAPI.getById(feedback.slug);
      
      // Ajouter le slug du feedback de la liste si absent dans la réponse
      const detailsWithSlug = {
        ...fullDetails,
        slug: fullDetails.slug || feedback.slug 
      };
      
      setSelectedFeedback(detailsWithSlug);
      
      // Marquer comme lu si ce n'est pas déjà le cas
      if (!feedback.is_read) {
        // Sauvegarder dans localStorage
        markMessageAsRead(feedback.slug);
        
        // Mettre à jour l'état local
        setFeedbacks(feedbacks.map(f => 
          f.slug === feedback.slug ? { ...f, is_read: true } : f
        ));
      }
    } catch (err: any) {
      alert('Erreur lors du chargement des détails: ' + err.message);
    } finally {
      setLoadingDetails(false);
    }
  };

  const stats = {
    total: feedbacks.length,
    unread: feedbacks.filter(f => !f.is_read).length,
    read: feedbacks.filter(f => f.is_read).length,
  };

  const handleDelete = async (slug: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) {
      try {
       
         await feedbackAPI.delete(slug);
        
        if (selectedFeedback?.slug === slug) {
          setSelectedFeedback(null);
        }
        
        // Recharger la liste depuis le backend pour être sûr
        await loadFeedbacks();
        
        alert('Message supprimé avec succès');
      } catch (err: any) {        
        if (err.message.includes('No Feedback matches')) {
          alert('Ce message n\'existe plus dans la base de données. La liste va être actualisée.');
          await loadFeedbacks();
        } else {
          alert('Erreur lors de la suppression: ' + err.message);
        }
      }
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Messages clients</h1>
        <p className="text-sm text-gray-600 mt-1">
          Gérez les messages reçus via le formulaire de contact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <FeedbackStatsCard
          label="Total"
          count={stats.total}
          type="all"
          isActive={filter === 'all'}
          onClick={() => setFilter('all')}
        />
        <FeedbackStatsCard
          label="Non lus"
          count={stats.unread}
          type="unread"
          isActive={filter === 'unread'}
          onClick={() => setFilter('unread')}
        />
        <FeedbackStatsCard
          label="Lus"
          count={stats.read}
          type="read"
          isActive={filter === 'read'}
          onClick={() => setFilter('read')}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher par nom, email ou message..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none"
          />
        </div>
      </div>

      {loading ? (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2A4793] mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des messages...</p>
        </div>
      ) : error ? (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <MessageSquare className="w-16 h-16 text-red-300 mx-auto mb-4" />
          <p className="text-red-600">{error}</p>
        </div>
      ) : filteredFeedbacks.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">
            {feedbacks.length === 0 
              ? 'Aucun message reçu pour le moment' 
              : 'Aucun message trouvé'}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-100">
            {filteredFeedbacks.map((feedback) => (
              <FeedbackListItem
                key={feedback.slug}
                feedback={feedback}
                onView={handleOpenMessage}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}

      <FeedbackDetailModal
        feedback={selectedFeedback}
        loading={loadingDetails}
        onClose={() => setSelectedFeedback(null)}
        onDelete={handleDelete}
      />
    </div>
  );
}
