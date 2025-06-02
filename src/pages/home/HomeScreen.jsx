import { useState,useEffect, useContext } from 'react'
import { FormControlLabel,Box,Switch,Fade,Paper,Slide } from '@mui/material';
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

  return (
    <div>
      <div className='sm:mx-60'>
      {(!isMobile) ? 
      <div className='bg-white'>
        <div className='mt-10'>
          <div class="flex flex-row justify-between items-center mx-auto  ">
            <div>
              <h1 className="text-3xl font-medium">
                Hi, I'm Dzikri Ananda
              </h1>
              <TypingCharacter/>
              <p class="w-full max-w-xl text-justify text-lg"> 
              Passionate and self-driven Fullstack application developer with a strong desire to contribute my skills to diverse projects. I thrive on collaboration, possess excellent teamwork abilities, and have a knack for integrating valuable input into my work. My background spans mobile, web, and backend development, and I am committed to staying abreast of the latest industry trends through continuous learning and skill enhancement. Meticulous and detail-oriented, I pride myself on delivering projects promptly and often exceeding timeline.
              </p>
            </div>
            <img src={profilePhoto} class='md:h-[500px] sm:h-[300px] rounded-full'></img>
          </div>
        </div>
        <ServicesCard/>
        
      </div> : 
      <div>
        <div>
              <img src={profilePhoto} class='h-[400px] mx-auto mt-[40px] rounded-full'></img>
              <h1 className="mx-8 text-xl font-bold mt-6">
                Hi, I'm Dzikri Ananda
              </h1>
              <TypingCharacter/>
              <p class="mx-8 text-justify text-sm"> 
                Passionate and self-driven Fullstack application developer with a strong desire to contribute my skills to diverse projects. I thrive on collaboration, possess excellent teamwork abilities, and have a knack for integrating valuable input into my work. My background spans mobile, web, and backend development, and I am committed to staying abreast of the latest industry trends through continuous learning and skill enhancement. Meticulous and detail-oriented, I pride myself on delivering projects promptly and often exceeding timelines.
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

function TypingCharacter() {
  const { isMobile } = useContext(DeviceContext);
  return (
    <div className={`${isMobile ? '' : ''}`}>
      <TypeAnimation
        className={`${isMobile ? 'mx-8' : ''}`}
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
          fontSize: isMobile ? '24px' : '3em',
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

  // Skills to bold inside backend description
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

  return (
    <div className={`flex justify-between mt-14 mb-9 flex-wrap max-w-full mx-auto`}>
      {services.map((service, index) => (
        <div
          key={index}
          className={`w-full max-w-[500px] my-7 bg-white border-solid border-blue-400 border-2 rounded-lg p-8 shadow-xl ${
            isMobile ? 'mx-4' : ''
          }`}
        >
          {service.icon}
          <h1 className="text-xl font-semibold mt-2">{service.title}</h1>
          <p className={`text-justify mt-2 ${isMobile ? 'text-sm' : 'text-lg'}`}>
            <BoldKeywords text={service.description} keywords={skills} />
          </p>
          <div className="flex justify-center mt-4 flex-wrap">
            {service.logos.map((logo, i) => (
              <img key={i} src={logo} className="h-16 mx-2 my-1" />
            ))}
          </div>
        </div>
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





