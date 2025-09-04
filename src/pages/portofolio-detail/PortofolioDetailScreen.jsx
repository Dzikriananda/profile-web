import { useLocation } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function PortofolioDetailScreen() {
  const { state } = useLocation();
  const data = state.data;

  return (
    <div className="">
      <ResponsiveView data={data} />
      <div className="lg:px-[255px] px-9">
        <h1 className="mt-10 text-2xl font-bold">Description</h1> 
        <p className="text-justify">{data.description}</p> 
        <h1 className="mt-10 text-2xl font-bold">Features</h1> 
        <Features data={data.features}/> 
        <TechnologiesUsed data={data.techUsed}/>
      </div>
      
      <BottomBar />
    </div>
  );
}

function ResponsiveView({ data }) {
  return (
    <div className="flex flex-col lg:flex-row justify-center mt-8 px-6 lg:px-[255px]">
      {/* Carousel */}
      <div className="lg:w-[800px] w-full">
        <Carousel
          data={data.imgPath}
          slidesToShow={data.slideToScroll}
          slidesToScroll={data.slideToScroll}
        />
      </div>

      {/* Info Box */}
      <div className="mt-6 lg:mt-0 lg:ml-6 lg:w-96 w-full px-6 py-8 bg-white rounded-lg shadow-xl self-start">
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
        <h1 className="text-start my-2 break-words">
          <span className="font-semibold">APK File URL</span> :{" "}
          <a className="text-blue-500" href={data.apkUrl}>
            {data.apkUrl}
          </a>
        </h1>
        <h1 className="text-start my-2 break-words">
          <span className="font-semibold">Repository URL</span> :{" "}
          <a className="text-blue-500" href={data.repoUrl}>
            {data.repoUrl}
          </a>
        </h1>
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

function Carousel({ data, slidesToShow, slidesToScroll }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    dotsClass: "custom-dots",
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

  return (
    <div className="h-auto mt-9 lg:mt-0">
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
