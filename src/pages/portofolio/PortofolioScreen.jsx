import Portofolio1 from '../../assets/images/portofolio-1.png';
import Portofolio2 from '../../assets/images/portofolio-2.png';
import Portofolio3 from '../../assets/images/portofolio-3.webp';
import Portofolio4 from '../../assets/images/portofolio-4.png';
import PortofolioSuwlit from '../../assets/images/portofolio-suwlit.png';

import { useState, useEffect, useContext } from 'react';
import { DeviceContext } from '../../context/DeviceContext';
import { useNavigate } from "react-router";
import { ScreenContext } from "../../context/ScreenContext.";
import { portfolioDetailData } from '../../utils/data';
import flutterLogo from '../../assets/images/flutter-Logo.png'

function PortofolioScreen() {
  const { isMobile } = useContext(DeviceContext);
  const [showNavBar, setShowNavBar] = useContext(ScreenContext);

  useEffect(() => {
    setShowNavBar(true);
  }, []);

  const portfolioItems = [
    { image: PortofolioSuwlit, name: "Suwlit (Suit/Rock Paper Scissors) Mobile Game ", data: portfolioDetailData[0] },
    { image: Portofolio1, name: "Calorie Guru Mobile App (Flutter)", data: portfolioDetailData[1] },
    { image: Portofolio2, name: "Bird Guard Mobile App (Flutter)", data: portfolioDetailData[2] },
    { image: Portofolio3, name: "Backend for Playstore App Sentiment Dashboard (Java Spring Boot)", data: portfolioDetailData[3] },
    { image: Portofolio4, name: "Personal Website (Flutter Web)" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
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

const PortofolioCard = ({ image, name, data }) => {
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
        {data && (
          <button
            onClick={() => navigate("/portfolio-details", { state: { data } })}
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
