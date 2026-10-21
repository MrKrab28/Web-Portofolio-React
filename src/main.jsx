import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
// import PreLoader from './components/Preloader.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PreLoader /> */}
    <App />
  </StrictMode>,
)
