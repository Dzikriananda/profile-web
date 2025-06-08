import { useState, useContext, useEffect } from "react";
import { ScreenContext } from "../../context/ScreenContext.";
import Img1 from '../../assets/images/portofolio-1/porto-1-1.png';
import Img2 from '../../assets/images/portofolio-1/porto-1-2.png';
import Img3 from '../../assets/images/portofolio-1/porto-1-3.png';
import Img4 from '../../assets/images/portofolio-1/porto-1-4.png';
import Img5 from '../../assets/images/portofolio-1/porto-1-5.png';
import Img6 from '../../assets/images/portofolio-1/porto-1-6.png';
import { DeviceContext } from '../../context/DeviceContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLocation } from "react-router";

export function PortofolioDetailScreen() {
  const {isMobile} = useContext(DeviceContext);
  const {state} = useLocation();
  const data = state.data;
  


  useEffect(() => {
  }, []);


  return (
    <div className="">
        {isMobile ? <MobileView data={data}/> : <DekstopView data={data}/>}  
        <BottomBar/>
    </div>
  );
}

function DekstopView(props) {
  const data = props.data;   
    return (
        <div className="flex justify-center mt-8 flex-col px-[255px]">
            <div className="flex-row flex justify-center ">
                <Carousel data={data.imgPath} slidesToShow={data.slideToScroll} slidesToScroll ={data.slideToScroll}/>
                <div className="ml-6 w-96 px-6 py-8 bg-white rounded-lg shadow-xl self-start">
                    <p className="text-gray-800 font-bold text-xl  break-words text-start">
                    Portfolio Information
                    </p>
                    <div className="w-full h-[1px] my-4 bg-gray-400"/>
                    <h1 className="text-start my-2"><span className="font-semibold">Name</span> : {data.name}</h1>
                    <h1 className="text-start my-2"><span className="font-semibold">Tech Stack</span> : {data.techStack}</h1>
                    <h1 className="text-start my-2"><span className="font-semibold">Project Date</span> : {data.date}</h1>
                    <h1 className="text-start my-2"><span className="font-semibold">Role</span> : {data.role}</h1>
                    <h1 className="text-start my-2 break-words"><span className="font-semibold">APK File URL</span> : <a className="text-blue-500" href={data.apkUrl}>{data.apkUrl}</a></h1>
                    <h1 className="text-start my-2 break-words "><span className="font-semibold">Repository URL</span> : <a className="text-blue-500" href={data.repoUrl}>{data.repoUrl}</a></h1>
                </div>
            </div>
            <h1 className="mt-10 text-2xl font-bold">Description</h1>
            <p className="text-justify">{data.description}</p>
            <h1 className="mt-10 text-2xl font-bold">Features</h1>
            <Features data={data.features}/>
            <TechnologiesUsed data={data.techUsed}/>
        </div>
    );
}

function MobileView(props) {
  const data = props.data;   
    return (
        <div className="px-8">
            <div className="w-full px-6 py-8 bg-white rounded-lg shadow-xl self-start">
                    <p className="text-gray-800 font-bold text-xl  break-words text-start">
                    Portfolio Information
                    </p>
                    <div className="w-full h-[1px] my-4 bg-gray-400"/>
                    <h1 className="text-start my-2"><span className="font-semibold">Name</span> : {data.name}</h1>
                    <h1 className="text-start my-2"><span className="font-semibold">Tech Stack</span> : {data.techStack}</h1>
                    <h1 className="text-start my-2"><span className="font-semibold">Project Date</span> : {data.date}</h1>
                    <h1 className="text-start my-2"><span className="font-semibold">Role</span> : {data.role}</h1>
                    <h1 className="text-start my-2 break-words"><span className="font-semibold">APK File URL</span> : <a className="text-blue-500" href={data.apkUrl}>{data.apkUrl}</a></h1>
                    <h1 className="text-start my-2 break-words "><span className="font-semibold">Repository URL</span> : <a className="text-blue-500" href={data.repoUrl}>{data.repoUrl}</a></h1>
            </div>
            <Carousel data={data.imgPath} slidesToShow={1} slidesToScroll ={1}/>
            {/* <Carousel data={data.imgPath} slidesToShow={data.slideToScroll} slidesToScroll ={data.slideToScroll}/> */}
            <h1 className="mt-10 text-2xl font-bold">Description</h1>
            <p className="text-justify">{data.description}</p>
            <h1 className="mt-10 text-2xl font-bold">Features</h1>
            <Features data={data.features}/>
            <TechnologiesUsed data={data.techUsed}/>
            
        </div>
    );
}

function BottomBar() {
    const {isMobile} = useContext(DeviceContext);
    return (
        <div className={`${isMobile ? 'mt-10' : ''} min-h-[80px] bg-blue-100  w-full flex items-center justify-center`}>
        <h3 className={`${isMobile ? 'text-center text-sm' : ''}`}>
          © Copyright 2025. All Rights Reserved. Supported By DreamyBullXXX (Ambatukam)
        </h3>
      </div>
    );
}

function Carousel(props) {
  const data = props.data;
  const slidesToScroll = props.slidesToScroll;
  const slidesToShow = props.slidesToShow;


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        dotsClass: "custom-dots",
      };
      return (
        <div className="sm:w-[800px] h-auto mt-9 sm:mt-0">
          <Slider {...settings}>
            {data.map((imgPath, index) => (
              <img
                key={index}
                src={imgPath}
                alt={`Slide ${index}`}
                className="px-2"
              />
            ))}
          </Slider>
        </div>
      );
}


const TechnologiesUsed = (props) => {
  const technologiesUsed = props.data;
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">Technologies Used</h1>
      {technologiesUsed.map((section, index) => (
        <div key={index} className="mb-6 ml-8">
          <h2 className="text-lg font-semibold mb-2">{section.category}:</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


const Features = (props) => {
  const featuresData = props.data;
  return (
    <div className="ml-11 mt-8">
      {featuresData.map((section, index) => (
        <div className="mb-6" key={index}>
          <h2 className="text-lg font-semibold mb-2">{section.category}</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {section.items.map((item, idx) => (
              <li key={idx}>
                <span className="font-medium">{item.title}:</span> {item.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


