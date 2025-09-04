import { StrictMode,createContext,useState,useEffect  } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ResumeScreen from './pages/resume/ResumeScreen.jsx';
import HomeScreen from './pages/home/HomeScreen.jsx';
import NavBar from './Navbar.jsx';
import ContactMeScreen from './pages/contact-me/ContactMeScreen.jsx';
import { DeviceContext } from './context/DeviceContext.jsx';
import CertificatesScreen from './pages/certificates/CertificatesScreen.jsx';
import PortofolioScreen from './pages/portofolio/PortofolioScreen.jsx';
import { PortofolioDetailScreen } from './pages/portofolio-detail/PortofolioDetailScreen.jsx';
import { ScreenContext } from './context/ScreenContext..jsx';


const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showNavBar, setShowNavBar] = useState(true);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width <= 768;


  return (
    <ScreenContext.Provider value={[showNavBar,setShowNavBar]}>
      <DeviceContext.Provider value={{ isMobile }}>
        <BrowserRouter basename='/'>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/resume" element={<ResumeScreen />} />
            <Route path="/contact-me" element={<ContactMeScreen />} />
            <Route path="/portofolio" element={<PortofolioScreen/>} />
            <Route path="/certificates" element={<CertificatesScreen/>} />
            <Route path="/portfolio-details" element={<PortofolioDetailScreen/>} />
          </Routes>
        </BrowserRouter>
      </DeviceContext.Provider>
    </ScreenContext.Provider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
