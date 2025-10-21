import JetpackComposeCertificate from '../../assets/images/sertif-belajar-android-jetpack-compose.jpg';
import DartCertificate from '../../assets/images/sertif-belajar-dart.jpg';
import SolidCertificate from '../../assets/images/sertif-solid.jpg';
import UxCertificate from '../../assets/images/sertif-ux-design.jpg';
import kotlinCertificate from '../../assets/images/certificates/sertif-kotlin.jpg';
import androidBeginnerCertificate from '../../assets/images/certificates/sertif-android-pemula.jpg';
import androidIntermediateCertificate from '../../assets/images/certificates/sertif-android-intermediate.jpg';
import flutterBeginnerCertificate from '../../assets/images/certificates/sertif-flutter-pemula.jpg';
import flutterFundamentalCertificate from '../../assets/images/certificates/sertif-fundamental-flutter.jpg';
import androidFundamentalCertificate from '../../assets/images/certificates/sertif-fundamental-android.jpg';
import bgImage from '../../assets/images/bg.jpg'

import { useState,useEffect, useContext,Button } from 'react'
import { DeviceContext } from '../../context/DeviceContext';

const certificates = [
  {
    image: JetpackComposeCertificate,
    name: 'Jetpack Compose Course',
    url: 'https://www.dicoding.com/certificates/L4PQG902OZO1',
    description:
      'Completed a 50-hour course on Jetpack Compose, gaining proficiency in core concepts such as layout design, state management, lazy layouts, navigation, testing, and integration with Android View XML, culminating in the development of a comprehensive Android application project.',
  },
  {
    image: DartCertificate,
    name: 'Dart Programming Course',
    url: 'https://www.dicoding.com/certificates/NVP75REVVXR0',
    description:
      'Completed a 20-hour Dart programming course, covering foundational topics including environment setup, core Dart principles, control flow, collections, object-oriented and functional programming, the Dart type system, asynchronous programming with futures, and best practices for writing effective Dart code.',
  },
  {
    image: SolidCertificate,
    name: 'SOLID Programming Course',
    url: 'https://www.dicoding.com/certificates/L4PQG902OZO1',
    description:
      'Completed a 15-hour course on Object-Oriented Programming (OOP), exploring core OOP concepts, object relationships, software design principles, and the S.O.L.I.D. principles, and concluded with a final assessment exam.',
  },
  {
    image: UxCertificate,
    name: 'UX Design Course',
    url: 'https://www.dicoding.com/certificates/NVP7ON9OWPR0',
    description:
      'Successfully completed a 23-hour UX Design course, mastering fundamental concepts, design thinking approaches, empathy mapping, user persona creation, ideation techniques, storyboarding, wireframing, high-fidelity prototyping, UX research, and documentation, having peak in a comprehensive UX case study portfolio project.',
  },
  {
    image: kotlinCertificate,
    name: 'Kotlin Programming Course',
    url: 'https://www.dicoding.com/certificates/MRZM43WQ0XYQ',
    description:
      'Successfully finished a 50-hour Kotlin programming course, encompassing essential topics such as program structure and execution, core programming concepts, control flow mechanisms, data classes, both functional and object-oriented paradigms, generics, and an introduction to coroutines. The course concluded with a final project that demonstrated a solid understanding of Kotlin, from foundational principles to concurrent programming.',
  },
  {
    image: androidBeginnerCertificate,
    name: 'Android Application Development for Beginner',
    url: 'https://www.dicoding.com/certificates/2VX3YG534PYQ',
    description:
      'Successfully completed a 60-hour course on Android application basics, covering introductory topics, activity development, intent usage, view and view group design, style and theme implementation, and RecyclerView application, peaking in a final project creating an application displaying a list of content with details.',
  },
  {
    image: androidFundamentalCertificate,
    name: 'Fundamental Android Application Development',
    url: 'https://www.dicoding.com/certificates/QLZ9QK7DMZ5D',
    description:
      'Completed a 140-hour training program in Android Application Fundamentals, covering essential subjects such as basic app development, fragment usage, navigation components, background processing, network communication, Android Architecture Components, testing methodologies, local data storage, and task scheduling. The course concluded with a capstone project involving API data fetching and saving to a local database.',
  },
  {
    image: androidIntermediateCertificate,
    name: 'Intermediate Android Application Development',
    url: 'https://www.dicoding.com/certificates/JLX1D5ROGZ72',
    description:
      'Successfully completed a 150-hour Intermediate Android Application Development course, covering advanced topics such as UI customization, animations, localization, accessibility, services, media management, geolocation, advanced testing, database architecture, and Firebase integration, with a final project implementing a story-sharing Android app featuring Paging.',
  },
  {
    image: flutterBeginnerCertificate,
    name: 'Flutter Application Development for Beginner',
    url: 'https://www.dicoding.com/certificates/2VX3YG534PYQ',
    description:
      'Successfully completed a 40-hour comprehensive Flutter course, which included an introduction to Flutter and tool setup, core programming concepts, widget implementation, navigation techniques, asset management, and app deployment. The course concluded with the development of a final project demonstrating the acquired skills.',
  },
  {
    image: flutterFundamentalCertificate,
    name: 'Fundamental Flutter Application Development',
    url: 'https://www.dicoding.com/certificates/07Z6WRN4WZQR',
    description:
      'Completed a 70-hour Flutter development course designed for developers aiming to master the fundamentals of building Flutter applications. Focusing on key topics such as state management, networking, and local data persistence. By the end of the course, participants were able to build a Flutter application implementing essential features like fetching data from the internet, local storage, push notifications, and testing.',
  },
];



function CertificatesScreen(){
  const {isMobile} = useContext(DeviceContext);
  
  return(
    <div style={{ backgroundImage: `url(${bgImage})` }} className='bg-cover bg-center w-full'>
      <div className='flex max-w-7xl  justify-center flex-wrap mx-auto '>
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              image={cert.image}
              name={cert.name}
              url={cert.url}
              description={cert.description}
            />
          ))}
      </div>
      <div className={`${isMobile ? 'mt-10' : ''} min-h-[80px] bg-blue-100  w-full flex items-center justify-center`}>
        <h3 className={`${isMobile ? 'text-center text-sm' : ''}`}>
            © Copyright 2025. All Rights Reserved. Supported By DreamyBullXXX (Ambatukam)
        </h3>
      </div>
    </div>
  );
}



const CertificateCard = (props) => {
    return (
    <div className='sm:my-3 mx-3 '>
        <h1 className="pt-10 text-xl font-bold">{props.name}</h1>
        <div className="relative   overflow-hidden rounded-lg group shadow-xl">
          {/* Image */} 
          <img
            src={props.image}
            alt="Zoomed on hover"
            className="w-full sm:h-96 h-60 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />

          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-white text-lg font-semibold">{props.name}</p>
          </div>
        </div>
        <p className='p-2 max-w-xl text-justify'>
          {props.description}
        </p>
        <button type="button"  onClick={() => {
            window.open(props.url, '_blank').focus();
          }}  className=' bg-blue-400 w-auto px-7 h-8 rounded-md  mt-2 text-white'>Details
        </button>
    </div>


    );
};




export default CertificatesScreen;