import JetpackComposeCertificate from '../../assets/images/sertif-belajar-android-jetpack-compose.jpg';
import DartCertificate from '../../assets/images/sertif-belajar-dart.jpg';
import SolidCertificate from '../../assets/images/sertif-solid.jpg';
import UxCertificate from '../../assets/images/sertif-ux-design.jpg';
import { useState,useEffect, useContext,Button } from 'react'
import { DeviceContext } from '../../context/DeviceContext';

function CertificatesScreen(){
  const {isMobile} = useContext(DeviceContext);
  
  return(
    <div>
      <div className='flex max-w-7xl  justify-center flex-wrap mx-auto '>
          <CertificateCard 
            image={JetpackComposeCertificate} 
            name='Jetpack Compose Course' 
            url='https://www.dicoding.com/certificates/L4PQG902OZO1'
            description = 'Completed a 50-hour course on Jetpack Compose, gaining proficiency in core concepts such as layout design, state management, lazy layouts, navigation, testing, and integration with Android View XML, culminating in the development of a comprehensive Android application project.'
          />
          <CertificateCard 
            image={DartCertificate} 
            name='Dart Programming Course' 
            url= 'https://www.dicoding.com/certificates/NVP75REVVXR0'
            description='Completed a 20-hour Dart programming course, covering foundational topics including environment setup, core Dart principles, control flow, collections, object-oriented and functional programming, the Dart type system, asynchronous programming with futures, and best practices for writing effective Dart code.'
          />
          <CertificateCard 
            image={SolidCertificate} 
            name='SOLID Programming Course' 
            url= 'https://www.dicoding.com/certificates/L4PQG902OZO1'
            description='Completed a 15-hour course on Object-Oriented Programming (OOP), exploring core OOP concepts, object relationships, software design principles, and the S.O.L.I.D. principles, and concluded with a final assessment exam.'
          />
          <CertificateCard 
            image={UxCertificate} 
            name='UX Design Course' 
            url= 'https://www.dicoding.com/certificates/NVP7ON9OWPR0'
            description='Successfully completed a 23 hours UX Design course, mastering fundamental concepts, design thinking approaches, empathy mapping, user persona creation, ideation techniques, storyboarding, wireframing, high-fidelity prototyping, UX research, and documentation, having peak in a comprehensive UX case study portfolio project.'
          /> 
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
        <div className="relative sm:max-w-xl  max-h-96  overflow-hidden rounded-lg group shadow-xl">
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