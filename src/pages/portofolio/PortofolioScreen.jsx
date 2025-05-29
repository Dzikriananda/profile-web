import Portofolio1 from '../../assets/images/portofolio-1.png';
import Portofolio2 from '../../assets/images/portofolio-2.png';
import Portofolio3 from '../../assets/images/portofolio-3.png';



function PortofolioScreen(){
    return(
        <div>
          <div className='flex max-w-7xl  justify-center flex-wrap mx-5 sm:mx-auto'>
              <PortofolioCard image={Portofolio1} name="Calorie Guru Mobile App"/>
              <PortofolioCard image={Portofolio2} name="Bird Guard Mobile App"/>
              <PortofolioCard image={Portofolio3} name="Playstore App Sentiment Site (Backend)"/>
              <PortofolioCard image={Portofolio3} name="Playstore App Sentiment Site (Backend)"/>
              {/* <PortofolioCard image={Portofolio1}/>
              <PortofolioCard image={Portofolio1}/>
              <PortofolioCard image={Portofolio1}/>
              <PortofolioCard image={Portofolio1}/> */}

          </div>
        </div>
    );
}

const PortofolioCard = (props) => {
    return (
    <div>
      
        <div className="sm:mx-4 my-4 relative sm:w-96 w-[320px] max-h-96  overflow-hidden rounded-lg group shadow-xl">
          {/* Image */} 
          <img
            src={props.image}
            alt="Zoomed on hover"
            className="w-full h-96 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />

          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-white text-lg font-semibold">{props.name}</p>
          </div>
        </div>
        <button type="button"  onClick={() => {}}  className=' bg-blue-400 w-auto px-7 h-8 rounded-md sm:ml-4  text-white'>Details</button>
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