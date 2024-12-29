import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { OrderProvider } from './context/OrderContext'; // OrderProvider'ı import et

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OrderProvider> {/* Global durum yönetimi için sarmalayıcı */}
      <App />
    </OrderProvider>
  </StrictMode>,
);
