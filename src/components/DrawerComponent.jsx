
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import {
  
  
  HiBriefcase,
  HiNewspaper,
  HiDesktopComputer,
  HiPhone,
  HiHome
} from "react-icons/hi";
import { Menu } from 'lucide-react';

export default function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const navigate = useNavigate();

  const currentPagePath = window.location.pathname;

  function isHighLighted(input) {

    const isCurrentPage = input === currentPagePath;
    if(isCurrentPage) {
      return 'bg-gray-400';
    } 
  }


  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center ">
        <Menu onClick={() => setIsOpen(true)} color="#ffffff" className="mr-4"/>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right" className='w-56'>
        <DrawerHeader title="MENU" titleIcon={() => <></>} />
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex  h-full flex-col justify-between py-2">
              <div>
                <SidebarItems>
                  <SidebarItemGroup>
                    <SidebarItem 
                    className={`${isHighLighted('/')} w-48`}
                    onClick={() => {
                      navigate('/')
                      handleClose()
                    }} icon={HiHome}>
                      Home
                    </SidebarItem>
                    <SidebarItem 
                    className={`${isHighLighted('/resume')} w-48`}
                    onClick={() => {
                      navigate('/resume')
                      handleClose()
                      }} icon={HiBriefcase}>
                      Resume
                    </SidebarItem>
                    <SidebarItem 
                    className={`${isHighLighted('/certificates')} w-48`}
                    onClick={() => {
                      navigate('/certificates')
                      handleClose()
                      }} icon={HiNewspaper}>
                      Certificates
                    </SidebarItem>
                    <SidebarItem
                    className={`${isHighLighted('/portofolio')} w-48`}
                    onClick={() => {
                      navigate('/portofolio')
                      handleClose()
                      }} icon={HiDesktopComputer}>
                      Portfolio
                    </SidebarItem>
                    <SidebarItem 
                    className={`${isHighLighted('/contact-me')} w-48`}
                    onClick={() => {
                      navigate('/contact-me')
                      handleClose()
                      }} icon={HiPhone}>
                      Contact Me
                    </SidebarItem>
                  </SidebarItemGroup>
                </SidebarItems>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  );
}
