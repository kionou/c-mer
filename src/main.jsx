import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from "@/components/ui/provider"
// import { defaultSystem } from "@chakra-ui/react"
// import { theme } from './theme.js'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider > 
      <App />
    </Provider>
  </StrictMode>
);
