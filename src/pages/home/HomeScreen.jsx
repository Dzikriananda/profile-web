import { useState,useEffect, useContext } from 'react'
import { FormControlLabel,Box,Switch,Fade,Paper,Slide } from '@mui/material';
import profilePhoto from '../../assets/mypicture.png'
import reactIcon from '../../assets/React-icon.png'
import flutterLogo from '../../assets/images/flutter-Logo.png'
import javaLogo from '../../assets/images/Java-Logo.png'
import { DeviceContext } from '../../context/DeviceContext';

function HomeScreen() {

  const {isMobile} = useContext(DeviceContext);

  return (
    <div>
      {(!isMobile) ? 
      <div class="flex flex-row justify-center items-center mt-12  ml-5">
          <div>
            <div className='flex'>
                <img src={reactIcon} class='h-16 animate-bouncing-logo'></img>
                <img src={flutterLogo} class='h-16 animate-reverse-bouncing-logo'></img>
                <img src={javaLogo} class='h-16 animate-bouncing-logo'></img>
            </div>
            <h1 className="text-3xl font-bold">
              Hi, I'm Dzikri Ananda
            </h1>
            <p class="w-full max-w-xl text-justify text-lg md:mr-[250px]"> 
                Passionate and self-driven cross-platform application
                developer with a strong desire to contribute my skills to
                diverse projects. I thrive on collaboration, possessing
                excellent teamwork abilities and a knack for integrating
                valuable input into my work. My expertise lies in mobile
                application development, where I have garnered
                recognition and received certification from Dicoding
                Indonesia courses. Committed to staying abreast of the
                latest industry trends, I am dedicated to continuous
                learning and skill enhancement. Meticulous and detail-
                oriented, I pride myself on delivering projects promptly,
                often exceeding timelines.
            </p>
            
          </div>
          <img src={profilePhoto} class='md:h-[500px] sm:h-[300px] rounded-full'></img>
      </div> : 
      <div>
        <div>
              <h1 className="mx-8 text-3xl font-bold mt-6">
                Hi, I'm Dzikri Ananda
              </h1>
              <p class="mx-8 text-justify text-sm"> Passionate and self-driven cross-platform application
                  developer with a strong desire to contribute my skills to
                  diverse projects. I thrive on collaboration, possessing
                  excellent teamwork abilities and a knack for integrating
                  valuable input into my work. My expertise lies in mobile
                  application development, where I have garnered
                  recognition and received certification from Dicoding
                  Indonesia courses. Committed to staying abreast of the
                  latest industry trends, I am dedicated to continuous
                  learning and skill enhancement. Meticulous and detail-
                  oriented, I pride myself on delivering projects promptly,
                  often exceeding timelines.
              </p>
            </div>
            <img src={profilePhoto} class='h-[400px] mx-auto mt-[40px] rounded-full'></img>
      </div>
      }
     
      <div className={`${isMobile ? 'mt-10' : 'fixed bottom-0'} min-h-[80px] bg-blue-100  w-full flex items-center justify-center`}>
        <h3 className={`${isMobile ? 'text-center text-sm' : ''}`}>
          © Copyright 2025. All Rights Reserved. Supported By DreamyBullXXX (Ambatukam)
        </h3>
      </div>
    </div>
  )
}

export default HomeScreen;

function SimpleSlide() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180, width: 130, position: 'relative', zIndex: 1 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show" 
      />
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        {icon}
      </Slide>
    </Box>
  );
}
const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box
        component="polygon"
        points="0,100 50,00, 100,100"
        sx={(theme) => ({
          fill: theme.palette.common.white,
          stroke: theme.palette.divider,
          strokeWidth: 1,
        })}
      />
    </svg>
  </Paper>
);

