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

export function PortofolioDetailScreen() {
  const [showNavBar, setShowNavBar] = useContext(ScreenContext);
  const {isMobile} = useContext(DeviceContext);

  useEffect(() => {
    // setShowNavBar(false);
  }, []);


  return (
    <div className="">
        {isMobile ? <MobileView/> : <DekstopView/>}  
        <BottomBar/>
    </div>
  );
}

function DekstopView() {
    let apkUrl="https://drive.google.com/file/d/1FKilu2HHDswlS2cH5HQsZkLfPwrfmWjt/view";
    let repoUrl = "https://github.com/Dzikriananda/CalorieGuru-MobileApp";
    let desc=`Welcome to Calorie Guru - your go-to application for tracking and managing your daily calorie intake! Calorie Guru is designed to help users easily log their daily calorie consumption, providing a convenient way to monitor their diet and make informed decisions about their nutrition. This app simplifies the process of keeping track of calories consumed throughout the day.`;  

    return (
        <div className="flex justify-center mt-8 flex-col px-[255px]">
            <div className="flex-row flex justify-center ">
                <Carousel/>
                <div className="ml-6 w-96 px-6 py-8 bg-white rounded-lg shadow-xl self-start">
                    <p className="text-gray-800 font-bold text-xl  break-words text-start">
                    Portfolio Information
                    </p>
                    <div className="w-full h-[1px] my-4 bg-gray-400"/>
                    <h1 className="text-start my-2"><span className="font-semibold">Name</span> : {"Calorie Guru Mobile App"}</h1>
                    <h1 className="text-start my-2"><span className="font-semibold">Tech Stack</span> : {"Flutter, Firebase"}</h1>
                    <h1 className="text-start my-2"><span className="font-semibold">Project Date</span> : {"August-December 2023"}</h1>
                    <h1 className="text-start my-2"><span className="font-semibold">Role</span> : {"Fullstack Developer (Mobile and Backend)"}</h1>
                    <h1 className="text-start my-2 break-words"><span className="font-semibold">APK File URL</span> : <a className="text-blue-500" href={apkUrl}>{apkUrl}</a></h1>
                    <h1 className="text-start my-2 break-words "><span className="font-semibold">Repository URL</span> : <a className="text-blue-500" href={repoUrl}>{repoUrl}</a></h1>
                </div>
            </div>
            <h1 className="mt-10 text-2xl font-bold">Description</h1>
            <p className="text-justify">{desc}</p>
            <h1 className="mt-10 text-2xl font-bold">Features</h1>
            <Features/>
            <TechnologiesUsed/>
        </div>
    );
}

function MobileView() {
    let apkUrl="https://drive.google.com/file/d/1FKilu2HHDswlS2cH5HQsZkLfPwrfmWjt/view";
    let repoUrl = "https://github.com/Dzikriananda/CalorieGuru-MobileApp";
    let desc=`Welcome to Calorie Guru - your go-to application for tracking and managing your daily calorie intake! Calorie Guru is designed to help users easily log their daily calorie consumption, providing a convenient way to monitor their diet and make informed decisions about their nutrition. This app simplifies the process of keeping track of calories consumed throughout the day.`;

    return (
        <div className="px-8">
            <div className="w-full px-6 py-8 bg-white rounded-lg shadow-xl self-start">
                    <p className="text-gray-800 font-bold text-xl  break-words text-start">
                    Portfolio Information
                    </p>
                    <div className="w-full h-[1px] my-4 bg-gray-400"/>
                    <h1 className="text-start my-2"><span className="font-semibold">Name</span> : {"Calorie Guru Mobile App"}</h1>
                    <h1 className="text-start my-2"><span className="font-semibold">Tech Stack</span> : {"Flutter, Firebase"}</h1>
                    <h1 className="text-start my-2"><span className="font-semibold">Project Date</span> : {"August-December 2023"}</h1>
                    <h1 className="text-start my-2"><span className="font-semibold">Role</span> : {"Fullstack Developer (Mobile and Backend)"}</h1>
                    <h1 className="text-start my-2 break-words"><span className="font-semibold">APK File URL</span> : <a className="text-blue-500" href={apkUrl}>{apkUrl}</a></h1>
                    <h1 className="text-start my-2 break-words "><span className="font-semibold">Repository URL</span> : <a className="text-blue-500" href={repoUrl}>{repoUrl}</a></h1>
            </div>
            <Carousel/>
            <h1 className="mt-10 text-2xl font-bold">Description</h1>
            <p className="text-justify">{desc}</p>
            <h1 className="mt-10 text-2xl font-bold">Features</h1>
            <Features/>
            <TechnologiesUsed/>
            
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

function Carousel() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <Slider {...settings} className="sm:w-[800px] sm:h-auto mt-8 sm:mt-0">
              <img  src={Img1}></img>
              <img  src={Img2}></img>
              <img  src={Img3}></img>
              <img  src={Img4}></img>
              <img  src={Img5}></img>
              <img  src={Img6}></img>
        </Slider>
      );
}


const TechnologiesUsed = () => {
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

const technologiesUsed = [
    {
      category: "Frontend",
      items: [
        "Flutter for the user interface.",
        "MVVM Architecture with GET for Dependency Injection.",
        "Provider for state management.",
        "Http Package for API interactions.",
      ],
    },
    {
      category: "Backend",
      items: [
        "Firebase Authentication for user authentication.",
        "Firestore for NoSQL database.",
        "RESTful API architecture for other APIs.",
      ],
    },
    
  ];

const featuresData = [
    {
      category: "Calorie Logging",
      items: [
        {
          title: "Log Your Meals",
          description:
            "Easily input and track the food items and their respective calorie counts for each meal.",
        },
        {
          title: "Search Calorie Information",
          description:
            "Utilize machine learning-based food recognition to search and log the calorie count of various food items and burned calories from many sports.",
        },
        {
          title: "View Daily Intake",
          description:
            "Monitor your daily calorie intake through a user-friendly interface.",
        },
        {
          title: "View History",
          description: "Easily view past Calorie Log.",
        },
      ],
    },
    {
      category: "Burning Activities",
      items: [
        {
          title: "Track Physical Activities",
          description:
            "Log exercises and physical activities to calculate and track burned calories.",
        },
        {
          title: "Customize Activity Intensity",
          description:
            "Adjust activity duration and intensity for accurate calorie expenditure calculation.",
        },
      ],
    },
    {
      category: "User Profiles",
      items: [
        {
          title: "Profile Modification",
          description:
            "Users can modify their profiles, including email and password changes.",
        },
        {
          title: "Personalized Profiles",
          description:
            "Create and manage individual profiles to track calorie goals and progress.",
        },
        {
          title: "Delete Account",
          description:
            "Delete an account if a user wishes not to use the app anymore.",
        },
      ],
    },
  ];

const Features = () => {
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


