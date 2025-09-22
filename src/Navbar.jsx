// component/NavBar.js
import { useState,useEffect,useRef,useContext} from 'react'

import { SocialIcon } from 'react-social-icons'
import { AlignJustify } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownItem } from "flowbite-react";
import { ScreenContext } from './context/ScreenContext.';
import DrawerComponent from './components/DrawerComponent';

const NavBar = () => {
  const [showNavBar,setShowNavBar] = useContext(ScreenContext);
  const [checked, setChecked] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();


  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  function checkForCurrentPage(input) {

  }
  
  
  const isMobile = width <= 768;
  const currentPagePath = window.location.pathname;

  function isBold(input) {
    const isCurrentPage = input === currentPagePath;
    if(isCurrentPage) {
      return 'font-bold';
    }
  }
  return (
    <div>
      {showNavBar ? <div class="bg-blue-400 h-[80px] w-full flex items-center">
            <h1 className="text-3xl font-bold ml-5 text-white">
                Dzikri
            </h1>
            {(!isMobile) ? 
              <div class="mx-auto text-white">
                <NavLink to="/" className={`mr-6 rounded-md transition hover:font-bold ${isBold('/')}`}> Home</NavLink>
                <NavLink to="/resume" className={`mr-6 rounded-md transition hover:font-bold ${isBold("/resume")}`}>Resume</NavLink>
                <NavLink to="/certificates" className={`mr-6 rounded-md transition hover:font-bold ${isBold('/certificates')}`}>Certificates</NavLink>
                <NavLink to="/portofolio "className={`mr-6 rounded-md transition hover:font-bold ${isBold('/portofolio')}`}>Portofolio</NavLink>
                <NavLink to="/contact-me" className= {`mr-6 rounded-md transition hover:font-bold ${isBold('/contact-me')}`}>Contact Me</NavLink>
              </div> :
              <div className='flex-1'></div>
            }
            <SocialIcon url="https://github.com" href='https://id.linkedin.com/in/dzikri-ananda/' bgColor='none'/>
            <SocialIcon url="https://instagram.com" href='https://id.linkedin.com/in/dzikri-ananda/' bgColor='none'/>
            <SocialIcon url="https://linkedin.com" href='https://id.linkedin.com/in/dzikri-ananda/' bgColor='none'/>
            {(isMobile) ? 
             <div className='ml-5'>
              <DrawerComponent/>
               {/* <Dropdown 
                dismissOnClick={false}
                style={{ backgroundColor: '#76A9FA' }}
                renderTrigger={() => <AlignJustify color='#ffffff' className=' mr-3'/>}
                className="bg-white">
                  <DropdownItem className={`${isBold('/')}`} onClick={() => {navigate('/')}}>Home</DropdownItem>
                  <DropdownItem className={`${isBold('/resume')}`}  onClick={() => navigate('/resume')}>Resume</DropdownItem>
                  <DropdownItem className={`${isBold('/certificates')}`} onClick={() => navigate('/certificates')}>Certificates</DropdownItem>
                  <DropdownItem className={`${isBold('/portofolio')}`} onClick={() => navigate('/portofolio')}>Portofolio</DropdownItem>
                  <DropdownItem className={`${isBold('/contact-me')}`} onClick={() => navigate('/contact-me')}>Contact Me</DropdownItem>
                </Dropdown> */}
             </div>
            : null}
          </div> : <div></div>}
    </div>
   
  );
};

export default NavBar;

