import Portofolio1 from '../../assets/images/portofolio-1.png';
import Portofolio2 from '../../assets/images/portofolio-2.png';
import Portofolio3 from '../../assets/images/portofolio-3.png';
import Portofolio4 from '../../assets/images/portofolio-4.png';
import { useState,useEffect, useContext,Button } from 'react'
import { DeviceContext } from '../../context/DeviceContext';
import { useNavigate } from "react-router";
import { ScreenContext } from "../../context/ScreenContext.";
import { portfolioDetailData } from '../../utils/data';

function PortofolioScreen(){
    const {isMobile} = useContext(DeviceContext);
    const [showNavBar,setShowNavBar] = useContext(ScreenContext);
    
        useEffect(() => {
            setShowNavBar(true);
        }, []);
  
    return(
        <div className='flex flex-col min-h-screen'>
          <div className='flex max-w-7xl justify-center flex-wrap sm:mx-auto mt-4 flex-grow'>
              <PortofolioCard image={Portofolio1} name="Calorie Guru Mobile App (Flutter)" data={portfolioDetailData[0]}/>
              <PortofolioCard image={Portofolio2} name="Bird Guard Mobile App (Flutter)" data={portfolioDetailData[1]}/>
              <PortofolioCard image={Portofolio3} name="Backend for Playstore App Sentiment Dashboard ( Java Spring Boot )" data={portfolioDetailData[2]} isWide={true}/>
              <PortofolioCard image={Portofolio4} name="Personal Website (Flutter Web)" isWide={true}/>
          </div>
          <div className={`mt-16 min-h-[80px] bg-blue-100  w-full flex items-center justify-center`}>
                <h3 className={`${isMobile ? 'text-center text-sm' : ''}`}>
                © Copyright 2025. All Rights Reserved. Supported By DreamyBullXXX (Ambatukam)
                </h3>
            </div>
        </div>
    );
}

const PortofolioCard = (props) => {
  const {isMobile} = useContext(DeviceContext);
  let navigate = useNavigate();

    //penyebabnya adalah tulisan lbh panjang
    return (
    <div className='mx-4'>
        <h1 className="pt-3 sm:mx-4 text-xl font-semibold sm:w-auto w-[320px]">{props.name}</h1>
        <div className={`sm:mx-4 my-4 relative ${props.isWide ? "w-auto" : "w-[320px]"} max-h-96  overflow-hidden rounded-lg group shadow-[0_0_20px_rgba(0,0,0,0.1)]`}>
          {/* Image */} 
          {/* <img
            src={props.image}
            alt="Zoomed on hover" 
            className={` ${props.isWide ? (isMobile ? "aspect-[16/9] h-auto" : "aspect-[16/9]") : ""} w-full h-96 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110`}
          /> */}
          <div className={`${props.isWide ? (isMobile ? "h-auto" : "w-full") : "" } w-[320px] h-96  flex items-center justify-center bg-white overflow-hidden`}>
            <img src={props.image} className="max-w-full max-h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110" />
          </div>

          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-white text-lg font-semibold">{props.name}</p>
          </div>
        </div>
        <button type="button"  onClick={() => {
          navigate("/portfolio-details",{state: {data : props.data}});
        }}  className=' bg-blue-400 w-auto px-7 h-8 rounded-md sm:ml-4  text-white'>Details</button>
    </div>


    );
};




export default PortofolioScreen;




// import Portofolio1 from '../../assets/images/portofolio-1.png';
// import Portofolio2 from '../../assets/images/portofolio-2.png';
// import Portofolio3 from '../../assets/images/portofolio-3.png';



// function PortofolioScreen(){
//     return(
//         <div>
//           <div className='flex max-w-7xl flex-wrap mx-5 sm:mx-auto bg-black'>
//               <PortofolioCard image={Portofolio1} name="Calorie Guru Mobile App"/>
//               <PortofolioCard image={Portofolio2} name="Bird Guard Mobile App"/>
//               <PortofolioCard image={Portofolio3} name="Playstore App Sentiment Site (Backend)"/>
//               <PortofolioCard image={Portofolio3} name="Playstore App Sentiment Site (Backend)"/>
//               {/* <PortofolioCard image={Portofolio1}/>
//               <PortofolioCard image={Portofolio1}/>
//               <PortofolioCard image={Portofolio1}/>
//               <PortofolioCard image={Portofolio1}/> */}

//           </div>
//         </div>
//     );
// }

// const PortofolioCard = (props) => {
//     return (
//     <div>
//         <div className="sm:mx-4 my-4 relative sm:w-96 w-[320px] max-h-96  overflow-hidden rounded-lg group shadow-xl">
//           {/* Image */} 
//           <img
//             src={props.image}
//             alt="Zoomed on hover"
//             className="w-full h-96 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
//           />

//           {/* Text overlay */}
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//             <p className="text-white text-lg font-semibold">{props.name}</p>
//           </div>
//         </div>
//         <button type="button"  onClick={() => {}}  className=' bg-blue-400 w-auto px-7 h-8 rounded-md sm:ml-4  text-white'>Details</button>
//     </div>


//     );
// };




// export default PortofolioScreen;