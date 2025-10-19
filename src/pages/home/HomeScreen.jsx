import { useContext } from 'react'
import profilePhoto from '../../assets/mypicture.png'
import reactIcon from '../../assets/React-icon.png'
import flutterLogo from '../../assets/images/flutter-Logo.png'
import javaLogo from '../../assets/images/Java-Logo.png'
import kotlinLogo from '../../assets/images/Kotlin-Logo.png'
import SpringBootLogo from '../../assets/images/spring-boot-logo.png'
import RedisLogo from '../../assets/images/Redis-Logo.png'
import FirebaseLogo from '../../assets/images/Firebase-Logo.png'
import ExpressLogo from '../../assets/images/express-logo.png'
import HtmlLogo from '../../assets/images/html-logo.png'
import JavascriptLogo from '../../assets/images/Javascript-logo.webp'
import CSSLogo from '../../assets/images/css-logo.png'
import TailwindLogo from '../../assets/images/tailwind-logo.png'
import UbuntuServerLogo from '../../assets/images/ubuntu-server-logo.png'
import GcpLogo from '../../assets/images/gcp-logo.png'
import DockerLogo from '../../assets/images/docker-logo.png'
import JetpackLogo from '../../assets/images/jetpack-logo.png'
import bgImage from '../../assets/images/bg.jpg'
import { motion } from "motion/react"



import { DeviceContext } from '../../context/DeviceContext';
import { Smartphone,Code,AppWindow,Server,Workflow } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const services = [
  {
    icon: <Smartphone size={75} />,
    title: 'Mobile App Development',
    description: 'My expertise lies in building responsive and intuitive mobile applications for Android using modern tools and frameworks like Kotlin (View & Jetpack Compose), Flutter & React Native.',
    logos: [reactIcon, flutterLogo, kotlinLogo,JetpackLogo],
  },
  {
    icon: <AppWindow size={75} />,
    title: 'Frontend Web Development',
    description: 'I specialize in crafting interactive web interfaces using HTML, CSS, JavaScript, and frameworks like React.',
    logos: [reactIcon, JavascriptLogo, HtmlLogo, CSSLogo, TailwindLogo],
  },
  {
    icon: <Server size={75} />,
    title: 'Backend Development',
    description: 'I specialize in building scalable backend/middleware systems with a strong mastery of Java Spring Boot, while also have experience using Node.js & Express JS. I have worked with both monolithic & microservices architectures, and use BaaS tools like Firebase & Supabase to speed up development.',
    logos: [javaLogo, SpringBootLogo, ExpressLogo, RedisLogo, FirebaseLogo],
  },
  {
    icon: <Workflow size={75} />,
    title: 'Software Operation',
    description: 'I have experience in software deployment, CI/CD workflows, and basic DevOps practices. My work includes managing version control, environments, and automation using tools like Git, Docker, and Kubernetes. I am also familiar with cloud infrastructure services such as Google Cloud Platform and VPS hosting solutions like Tencent Cloud Lighthouse.',
    logos: [DockerLogo, GcpLogo, UbuntuServerLogo],
  },
];

function HomeScreen() {

  const {isMobile} = useContext(DeviceContext);
  // bg-gradient-to-r from-blue-500 to-cyan-500
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-cover bg-center w-full pt-20">
    {/* <div className=" sm:bg-red-500 md:bg-yellow-300 lg:bg-gray-600 xl:bg-blue-500 2xl:bg-slate-950 " > */}
      <div className='2xl:mx-60 xl:mx-28 lg:mx-30 md:mx-30 sm:mx-20 '>
        {(!isMobile) ? 
        <div className='bg-transparent'>
            <div className=''/>
            <div className="flex flex-row justify-between items-center mx-auto   ">
              <div >
                <h1 className="text-3xl font-medium ">
                  Hi, I'm Dzikri Ananda
                </h1>
                <TypingCharacter/>
                <p className="max-w-xl text-justify lg:text-lg md:text-base sm:text-sm text-xs "> 
                Passionate and self-driven Fullstack application developer with a strong desire to contribute my skills to diverse projects. My background spans mobile, web, and backend development, and I am committed to staying abreast of the latest industry trends through continuous learning and skill enhancement.
                </p>
              </div>
              <ProfileImage src={profilePhoto}/>
              {/* <div className='h-[600px] w-[600px] bg-black flex justify-center items-center'>
                <ProfileImage  src={profilePhoto}/>
              </div> */}
              
              {/* <img src={profilePhoto} class='xl:h-[500px] lg:h-[400px] md:h-[300px] sm:h-[200px]  rounded-full'></img> */}
          </div>
          <ServicesCard/>
          
        </div> : 
        <div>
          <div>
                {/* <img src={profilePhoto} class='h-[400px] mx-auto mt-[40px] rounded-full'></img> */}
                <ProfileImage  src={profilePhoto}/>
                <h1 className="mx-8 text-xl font-bold ">
                  Hi, I'm Dzikri Ananda
                </h1>
                <TypingCharacter/>
                <p class="mx-8 text-justify text-sm"> 
                Passionate and self-driven Fullstack application developer with a strong desire to contribute my skills to diverse projects. My background spans mobile, web, and backend development, and I am committed to staying abreast of the latest industry trends through continuous learning and skill enhancement.
                </p>
          </div>
          <ServicesCard/>
        </div>
        
        }
      </div>
    
      <div className={`${isMobile ? 'mt-10' : ''} min-h-[80px] bg-blue-100  w-full flex items-center justify-center`}>
        <h3 className={`${isMobile ? 'text-center text-sm' : ''}`}>
          © Copyright 2025. All Rights Reserved. Supported By DreamyBullXXX (Ambatukam)
        </h3>
      </div>
    </div>
  )
}

const ProfileImage = ({ src }) => {
  return (
    // Container for the image and its decorative background
    // Uses 'relative' to position the circles behind the image
    <div className="relative flex-shrink-0   w-64 h-64 md:w-72 md:h-72 xl:w-96 xl:h-96 mt-12 mb-12 md:mx-0 mx-auto">
      
      {/* Decorative Circle 1 (Large, main blue) */}
      <div 
        className="absolute inset-0 bg-blue-400 rounded-full opacity-60 transform scale-100"
      ></div>
      
      {/* Decorative Circle 2 (Smaller, lighter blue, offset) */}
      <div 
        className="absolute top-[-10%] left-[-10%] h-36 w-36 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-blue-300 rounded-full opacity-90 filter blur-sm"
      ></div>

      {/* Decorative Circle 3 (Smaller, purple, offset) */}
      <div 
        className="absolute bottom-[-10%] right-[-10%]  h-36 w-36 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-purple-300 rounded-full opacity-90 filter blur-sm"
      ></div>

      {/* The Profile Image itself */}
      {/* 'relative' and 'z-10' bring it in front of the circles */}
      {/* 'rounded-full' and 'overflow-hidden' create the circular frame */}
      <div className="relative z-20 w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-white">
        <img
          // Use the 'src' prop passed to the component
          // You can use the 'image_46a244.png' you uploaded
          src={src || "/path/to/your-profile-image.png"} 
          alt="Dzikri Ananda"
          // 'object-cover' ensures the image fills the circle
          // without stretching or distorting.
          className="w-full h-full object-scale-down"
        />
      </div>
    </div>
  );
};

function TypingCharacter() {
  const { isMobile } = useContext(DeviceContext);
  return (
    <div className={`${isMobile ? '' : ''}`}>
      <TypeAnimation
        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  ${isMobile ? 'mx-8' : ''}`}
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Fullstack Developer',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Mobile App Developer',
          1000,
          'Frontend Web Developer',
          1000,
          'Backend Developer',
          1000,   
        ]}
        wrapper="span"
        speed={50}
        style= {{
          display: 'inline-block',
          color: '#60A5FA',
        }}      
        repeat={Infinity}
      />
    </div>
  );
}


function ServicesCard() {
  const { isMobile } = useContext(DeviceContext);

  const skills = [
    'Java Spring Boot',
    'Node.js',
    'Express JS',
    'Firebase',
    'Supabase',
    'Kotlin',
    'React Native',
    'Flutter',
    'React',
    'Docker',
    'Kubernetes',
    'Google Cloud Platform',
    'VPS'

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between children
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  

  return (
    <div
      className={` md:grid md:grid-cols-2  justify-items-center  gap-10 mt-14 mb-9 max-w-full ${isMobile ? 'mx-5' : ''}`}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1, // optional: nice stagger effect
          }}
          viewport={{ once: false, amount: 0.2 }} 
          className={`w-full md:mt-0 mt-7 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_200%] p-2 animate-gradient-border ${
            isMobile ? '' : ''
          }`}
        >
          <div className="rounded-md bg-white p-6 h-full">
            {service.icon}
            <h1 className="xl:text-xl lg:text-lg md:text-base sm:text-sm font-semibold mt-2">{service.title}</h1>
            <p className={`text-justify mt-2 xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs`}>
              <BoldKeywords text={service.description} keywords={skills} />
            </p>
            <div className="flex justify-center mt-4 flex-wrap ">
              {service.logos.map((logo, i) => (
                <img key={i} src={logo} className="h-16 mx-2 my-1" />
              ))}
            </div>
          </div>
         
        </motion.div>
      ))}
    </div>
  );
}

function BoldKeywords({ text, keywords }) {
  const regex = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, idx) =>
        keywords.some(k => k.toLowerCase() === part.toLowerCase()) ? (
          <span key={idx} style={{ fontWeight: 600, color:'#63b3ed' }}>{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
}



export default HomeScreen;





// xl:bg-black lg:bg-blue-400 md:bg-red-500 sm:bg-slate-600