
import { DeviceContext } from '../../context/DeviceContext';
import { useState,useEffect, useContext } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BSILogo from '../../assets/images/bsi-logo.jpg';
import IPBLogo from '../../assets/images/IPB-logo.png';
import PetrolabLogo from '../../assets/images/petrolab-logo.webp';
import SuitmediaLogo from '../../assets/images/suitmedia-logo.png';
import '../../index.css';
import 'react-vertical-timeline-component/style.min.css';

function ResumeScreen() {    
    const {isMobile} = useContext(DeviceContext);
    return (
        <div className='h-screen flex flex-col'>
            <ResumeItems/>
            <div className={`${isMobile ? 'mt-10' : ''} min-h-[80px] bg-blue-100  w-full flex items-center justify-center`}>
                <h3 className={`${isMobile ? 'text-center text-sm' : ''}`}>
                © Copyright 2025. All Rights Reserved. Supported By DreamyBullXXX (Ambatukam)
                </h3>
            </div>
        </div>
    );
}

function ResumeItems() {
    const {isMobile} = useContext(DeviceContext);
    return (
        <div className='grow'>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)'  }}
                    date="November 2024 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon/>}
                >
                    <img className='h-12 mb-3 rounded-md ' src={BSILogo} alt="logoBSI"/> 
                    <h3 className="vertical-timeline-element-title">Officer Development Program (ODP) IT - Bank Syariah Indonesia</h3>
                    <h4 className="vertical-timeline-element-subtitle">Jakarta, Indonesia</h4>
                    <p>
                        Mobile App Developer, Frontend Developer, Backend Developer, IT & Program Analyst
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{boxShadow: '0 12px 12px rgba(0, 0, 0, 0.1)', borderTop: '3px solid  rgb(33, 150, 243)'}}
                    date="February 2024 - July 2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon/>}
                >
                    <img className='h-12 mb-3' src={SuitmediaLogo} alt="logoSuitmedia"/> 
                    <h3 className="vertical-timeline-element-title">Mobile App Developer Intern - MSIB at PT Suitmedia Kreasi Indonesia</h3>
                    <h4 className="vertical-timeline-element-subtitle">Jakarta, Indonesia</h4>
                    <p>
                    Mobile App Developer, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{boxShadow: '0 12px 12px rgba(0, 0, 0, 0.1)', borderTop: '3px solid  rgb(33, 150, 243)'}}
                    date="August 2023 - December 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon/>}
                >
                    <img className='h-16 mb-3 rounded-md ' src={PetrolabLogo} alt="logoPetrolab"/> 
                    <h3 className="vertical-timeline-element-title">Mobile App Developer Intern - PT Petrolab Services</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bogor, Indonesia</h4>
                    <p>
                    Mobile App Developer, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{boxShadow: '0 12px 12px rgba(0, 0, 0, 0.1)', borderTop: '3px solid  rgb(33, 150, 243)'}}
                    date="2020 - 2024"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <img className='h-16 mb-3 rounded-md ' src={IPBLogo} alt="logoBSI"/> 
                    <h3 className="vertical-timeline-element-title">Computer Science - Institut Pertanian Bogor</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree - S. Kom</h4>
                    <p>
                        Consencrated in Software Engineering Division (SEIS) - Departement Of Computer Science 
                    </p>
                </VerticalTimelineElement>
            
        </VerticalTimeline>

       </div>
    );
}

export default ResumeScreen;
  