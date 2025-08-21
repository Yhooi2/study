import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloAppProvider } from './apollo/ApolloAppProvider.tsx'
import App from './App.tsx'
import { Toaster } from './components/ui/sonner.tsx'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloAppProvider>
    <App />
    <Toaster richColors closeButton />
    </ApolloAppProvider>
  </StrictMode>,
)
