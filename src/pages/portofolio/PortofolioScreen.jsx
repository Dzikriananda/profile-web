import PortofolioCalorieGuru from '../../assets/images/portofolio-1.png';
import PortofolioBirdGuard from '../../assets/images/portofolio-2.png';
import PortofolioSentimentDashboard from '../../assets/images/portofolio-3.webp';
import PortofolioPersonalFlutterSite from '../../assets/images/portofolio-4.png';
import PortofolioSuwlit from '../../assets/images/portofolio-suwlit.png';
import PortofolioSync2Play from  '../../assets/images/portofolio-sync2play.webp'
import { useEffect, useContext } from 'react';
import { DeviceContext } from '../../context/DeviceContext';
import { useNavigate } from "react-router";
import { ScreenContext } from "../../context/ScreenContext.";
import bgImage from '../../assets/images/bg.jpg'
function PortofolioScreen() {
  const { isMobile } = useContext(DeviceContext);
  const [showNavBar, setShowNavBar] = useContext(ScreenContext);

  useEffect(() => {
    setShowNavBar(true);
  }, []);

  const portfolioItems = [
    { id: "suwlit-mobile-game",image: PortofolioSuwlit, name: "Suwlit Mobile Game (Java Spring Boot & Kotlin)" , hasData: true},
    { id: "calorie-guru-mobile-app",image: PortofolioCalorieGuru, name: "Calorie Guru Mobile App (Flutter & Firebase)", hasData : true},
    { id: "sync2play",image: PortofolioSync2Play, name: "Sync2Play (React & Express) ", hasData : true},
    { id: "bird-guard-mobile-app",image: PortofolioBirdGuard, name: "Bird Guard Mobile App (Flutter)" ,hasData : true},
    { id: "sentiment-dashboard-be",image: PortofolioSentimentDashboard, name: "Backend for Playstore App Sentiment Dashboard (Java Spring Boot)",hasData : true},
    { id: "personal-flutter-site",image: PortofolioPersonalFlutterSite, name: "Personal Website (Flutter Web)",hasData : false}
  ];

  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="flex flex-col min-h-screen bg-cover bg-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8 flex-grow px-4">
        {portfolioItems.map((item, i) => (
          <PortofolioCard key={i} {...item} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 min-h-[80px] bg-blue-100 w-full flex items-center justify-center">
        <h3 className={`${isMobile ? 'text-center text-sm' : 'text-base'}`}>
          © Copyright 2025. All Rights Reserved. Supported By DreamyBullXXX (Ambatukam)
        </h3>
      </div>
    </div>
  );
}

const PortofolioCard = ({ id,image, name,hasData}) => {
  const { isMobile } = useContext(DeviceContext);
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden group transition-transform duration-300 hover:scale-105 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-56 flex items-center justify-center bg-gray-50 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-medium mb-2">{name}</h2>
        {hasData && (
          <button
            onClick={() => navigate(`/portfolio-details/${id}`)}
            className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md self-start"
          >
            Details
          </button>
        )}
      
      </div>
    </div>
  );
};

export default PortofolioScreen;
