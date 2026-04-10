import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from "./app/store"
import {Provider} from "react-redux"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
     <QueryClientProvider client={queryClient}>
    <Provider store={store} >
    <App />
    </Provider>
    </QueryClientProvider>
  </StrictMode>
  </BrowserRouter>
)
