import { MessageSquare } from 'lucide-react';

interface FeedbackStatsCardProps {
  label: string;
  count: number;
  type: 'all' | 'unread' | 'read';
  isActive: boolean;
  onClick: () => void;
}

export default function FeedbackStatsCard({ label, count, type, isActive, onClick }: FeedbackStatsCardProps) {
  const colors = {
    all: { bg: 'bg-blue-100', text: 'text-blue-600', count: 'text-gray-900' },
    unread: { bg: 'bg-orange-100', text: 'text-orange-600', count: 'text-orange-600' },
    read: { bg: 'bg-green-100', text: 'text-green-600', count: 'text-green-600' },
  };

  const color = colors[type];

  return (
    <button
      onClick={onClick}
      className={`bg-white rounded-lg shadow-sm p-4 text-left transition hover:shadow-md ${
        isActive ? 'ring-2 ring-[#2A4793]' : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className={`text-2xl font-bold mt-1 ${color.count}`}>{count}</p>
        </div>
        <div className={`${color.bg} w-10 h-10 rounded-lg flex items-center justify-center`}>
          <MessageSquare className={`w-5 h-5 ${color.text}`} />
        </div>
      </div>
    </button>
  );
}
