import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from './App.jsx'
// src/main.jsx
import { BrowserRouter } from "react-router-dom";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <ToastContainer/> 
    </BrowserRouter>
  </StrictMode>
      
);
