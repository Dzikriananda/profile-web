
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


  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center">
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
                    <SidebarItem onClick={() => navigate('/')} icon={HiHome}>
                      Home
                    </SidebarItem>
                    <SidebarItem onClick={() => navigate('/resume')} icon={HiBriefcase}>
                      Resume
                    </SidebarItem>
                    <SidebarItem onClick={() => navigate('/certificates')} icon={HiNewspaper}>
                      Certificates
                    </SidebarItem>
                    <SidebarItem onClick={() => navigate('/portofolio')} icon={HiDesktopComputer}>
                      Portfolio
                    </SidebarItem>
                    <SidebarItem onClick={() => navigate('/contact-me')} icon={HiPhone}>
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
