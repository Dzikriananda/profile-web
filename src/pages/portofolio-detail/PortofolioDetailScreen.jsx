import { useLocation,useParams } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTube from "react-youtube";
import { useState,useEffect } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
import { LogIn } from "lucide-react";
import { portfolioDetailData } from '../../utils/data';

export function PortofolioDetailScreen() {
  const {portfolioId} = useParams();
  const data = portfolioDetailData[portfolioId];
  

  return (
    <div>
    {/* <div className="bg-black sm:bg-white md:bg-blue-300 lg:bg-red-300 xl:bg-green-800 2xl:bg-red-950"> */}
      <ResponsiveView data={data} />
      <div className=" xl:px-[120px] 2xl:px-[255px] px-10">
        <h1 className="mt-10 text-2xl font-bold">Description</h1> 
        <p className="text-justify">{data.description}</p> 
        <h1 className="mt-10 text-2xl font-bold">Features</h1> 
        <Features data={data.features}/> 
        <TechnologiesUsed data={data.techUsed}/>
        {
          (data.videos != null) ? <VideoPlayer videoData={data.videos}/> : null
        }  
        
      </div>
      
      <BottomBar />
    </div>
  );
}

function ResponsiveView({ data }) {
  return (
    <div className="flex flex-col lg:flex-row justify-center  mt-8  xl:px-[120px] 2xl:px-[255px] px-10 ">
      {/* Carousel */}
      <div className=" md:max-w-[600px] lg:max-w-[600px] xl:max-w-[800px] w-full self-center">
        <Carousel
          data={data.imgPath}
          slidesToShow={data.slideToScroll}
          slidesToScroll={data.slideToScroll}
        />
      </div>

      {/* Info Box */}
      <div className="mt-6 lg:mt-0 lg:ml-6   px-6 py-8 bg-white rounded-lg shadow-xl w-full self-start sm:min-w-48">
        
        <p className="text-gray-800 font-bold text-xl break-words text-start">
          Portfolio Information
        </p>
        <div className="w-full h-[1px] my-4 bg-gray-400" />
        <h1 className="text-start my-2">
          <span className="font-semibold">Name</span> : {data.name}
        </h1>
        <h1 className="text-start my-2">
          <span className="font-semibold">Tech Stack</span> : {data.techStack}
        </h1>
        <h1 className="text-start my-2">
          <span className="font-semibold">Project Date</span> : {data.date}
        </h1>
        <h1 className="text-start my-2">
          <span className="font-semibold">Role</span> : {data.role}
        </h1>
        {
          (data.apkUrl != null) ? 
              <h1 className="text-start my-2 break-words">
              <span className="font-semibold">APK File URL</span> :{" "}
              <a className="text-blue-500" href={data.apkUrl}>
                {data.apkUrl}
              </a>
            </h1> : null
        }
        {
          data.repoUrls.map((item,index) => (
            <h1 key={index} className="text-start my-2 break-words">
              <span className="font-semibold">Repository URL ({item.type})</span> :{" "}
              <a className="text-blue-500" href={item.url}>
                {item.url}
              </a>
            </h1>
          ))
        }
    
      </div>
      
    </div>
  );
}

function BottomBar() {
  return (
    <div className="mt-10 min-h-[80px] bg-blue-100 w-full flex items-center justify-center">
      <h3 className="text-center text-sm lg:text-base">
        © Copyright 2025. All Rights Reserved. Supported By DreamyBullXXX
        (Ambatukam)
      </h3>
    </div>
  );
}



function VideoPlayer(props) {
  const videos = props.videoData;
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []
  );
  const isMobile = width <= 768;
  function isBold(input) {
    const isCurrentPage = input === activeTab;
    if(isCurrentPage) {
      return 'font-bold';
    }
  }
  

  const [activeTab, setActiveTab] = useState(Object.keys(videos)[0]);

  const onReady = (event) => {event.target.stopVideo() };


  if(isMobile) {
    return (
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">App Demo Video</h1>
        <Dropdown label="See Another Feature Demo Video" dismissOnClick={true} className="mb-4">
          {Object.keys(videos).map((key) => (
              <DropdownItem 
                key={key} 
                className={`${isBold(key)}`}
                onClick={() => setActiveTab(key)}
              >
                  {videos[key].title}
              </DropdownItem>
            ))}
        </Dropdown >
        <div className="relative w-full pb-[56.25%]">
          <YouTube
            videoId={videos[activeTab].videoId}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                controls: 1,
              },
            }}
            onReady={onReady}
            className="absolute  w-full h-full"
          />
        </div>
        <h2 className="text-center text-xl font-medium mt-4">{videos[activeTab].title}</h2>
      </div>
    );

  } else {
    return (
      <div className="w-full mx-auto p-6 ">
        <h2 className="text-2xl font-bold mb-4 ">App Demo Video</h2>
  
        {/* Tabs */}
        <div className="flex space-x-2 border-b border-gray-300 mb-4">
          {Object.keys(videos).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 text-sm font-medium rounded-t-md 
                ${
                  activeTab === key
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {videos[key].title}
            </button>
          ))}
        </div>
  
        {/* Video */}
        <div className="relative w-full pb-[56.25%]">
          <YouTube
            videoId={videos[activeTab].videoId}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                controls: 1,
              },
            }}
            onReady={onReady}
  
            className="absolute  w-full h-full"
          />
        </div>
      </div>
    );
  }
}

function Carousel({ data, slidesToShow, slidesToScroll }) {

  const bp = useBreakpoint();
  const slideToShowData = (() => {
    if (slidesToShow === 1) return 1;
    if (bp === 'xl') return 3;
    if (bp === 'lg') return 2;
    return 1; // default for smaller
  })();  

 

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slideToShowData,
    slidesToScroll: slidesToScroll,
    dotsClass: `custom-dots`,
    appendDots: dots => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
      responsive: [
        
        {
          breakpoint: 1024, // tablets
          settings: { slidesToShow: 2, slidesToScroll: 1 },
        },
        {
          breakpoint: 640, // mobile
          settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
    ],
  };

  // Kalau slidetoshow = 3 maka w-900, kalau 2 maka w-600 dan kalau 1 saja maka w-300
  return (
    <div className="w-full  max-w-[900px] overflow-hidden">
      <Slider {...settings}>
      {data.map((src, i) => (
        <div key={i} className="px-2">
          <div className="flex justify-center items-center ">
            <img
              src={src}
              alt={`Slide ${i}`}
              className="max-h-[550px] w-auto object-contain"
            />
      </div>
    </div>
  ))}
</Slider>

    </div>
  );
}

const TechnologiesUsed = ({ data }) => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">Technologies Used</h1>
      {data.map((section, index) => (
        <div key={index} className="mb-6 ml-4 sm:ml-8">
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

const Features = ({ data }) => {
  return (
    <div className="ml-4 sm:ml-11 mt-8">
      {data.map((section, index) => (
        <div className="mb-6" key={index}>
          <h2 className="text-lg font-semibold mb-2">{section.category}</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {section.items.map((item, idx) => (
              <li key={idx}>
                <span className="font-medium">{item.title}:</span>{" "}
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  function getBreakpoint() {
    const w = window.innerWidth;
    if (w >= 1280) return 'xl';
    if (w >= 1024) return 'lg';
    if (w >= 768) return 'md';
    if (w >= 640) return 'sm';
    return 'xs';
  }

  useEffect(() => {
    function onResize() {
      setBreakpoint(getBreakpoint());
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return breakpoint;
}