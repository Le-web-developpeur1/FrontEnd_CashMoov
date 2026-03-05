import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ConversationsProvider } from './contexts/ConversationsContext';
import { NotifProvider } from './contexts/NotifContext';
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <ConversationsProvider>
      <NotifProvider>
        <App />
      </NotifProvider>
    </ConversationsProvider>
  </HelmetProvider>
);
