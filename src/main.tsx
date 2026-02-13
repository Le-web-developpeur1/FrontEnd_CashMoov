import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ConversationsProvider } from './contexts/ConversationsContext';
import { NotifProvider } from './contexts/NotifContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <ConversationsProvider>
    <NotifProvider>
      <App />
    </NotifProvider>
  </ConversationsProvider>
);
