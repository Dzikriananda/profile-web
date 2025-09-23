import { DeviceContext } from '../../context/DeviceContext';
import { useState,useEffect, useContext,Button } from 'react'
import { SocialIcon } from 'react-social-icons'
import { Status } from '../../utils/Status';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';
import { createClient } from "@supabase/supabase-js";
import Validator from '../../utils/Validator';
import FieldStatus from '../../utils/FieldStatus';
import AlertDialog from '../../components/AlertDialog';


// const supaBase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

function ContactMeScreen() {
    const {isMobile} = useContext(DeviceContext);

    return (
        <div className="">
           <ResponsiveWidget/>
        </div>
    );
}

function ResponsiveWidget() {
    return (
      <div>
        <div className="block md:hidden"><MobileScreen/></div>
        <div className="hidden md:block lg:hidden"><MobileScreen/></div>
        <div className="hidden lg:block xl:hidden"><DesktopScreen/></div>
        <div className="hidden xl:block"><DesktopScreen/></div>
      </div>
    );
  }


function DesktopScreen() {
    return (
    <div className="flex justify-center items-center flex-col min-h-[calc(100vh-80px)]">
            <div className='grow '>
                <h1 className="pt-10 text-4xl font-bold text-center">Contact Me</h1>
                <div className='flex'>
                    <ContactComponent/>
                    <div className="w-48"></div>
                    <InquiryComponent/>
                </div>
            </div>
            <div className={`h-[80px] bg-blue-100  w-full flex items-center justify-center`}>
                <h3>
                © Copyright 2025. All Rights Reserved. Supported By DreamyBullXXX (Ambatukam)
                </h3>
            </div>

    </div>
    );
}

function MobileScreen() {
    return (
        <div>
            <ContactComponent/>
            <InquiryComponent/>
            <div className={`mt-10 min-h-[80px] bg-blue-100  w-full flex items-center justify-center`}>
                <h3 className="text-center text-sm">
                © Copyright 2025. All Rights Reserved. Supported By DreamyBullXXX (Ambatukam)
                </h3>
            </div>
        </div>
    );
}

function InquiryComponent() {
    const {isMobile} = useContext(DeviceContext);
    const [emailInput,setEmailInput] = useState('');
    const [nameInput,setNameInput] = useState('');
    const [messageInput,setMessageInput] = useState('');
    const [status,setStatus] = useState(Status.IDLE);
    const [emailFieldStatus,setEmailFieldStatus] = useState(new FieldStatus());

    const validator = new Validator();

    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
      };

    async function onPressed(){
        const emailFieldTempStatus = validator.validateEmail(emailInput);
        console.log(emailFieldStatus);
        setEmailFieldStatus(emailFieldTempStatus);
    }

    // async function getData() {
        
    //     const { data } = await supaBase.from("message").select();
    //     console.log(data);
    //   }

    async function postData(url = "http://localhost:8080/api/auth/login", data = {
        "email" : "perrelbrown12@yahooo.com",
        "password" : "12827281919jhh"
    }) {
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
        });
        return response.json();
      }

    return (
        <div className={`flex flex-col items-center`}>
            <h1 className="pt-10 text-2xl">Send Me A Message</h1>
            <div className="h-4"></div>
            <div className={`${isMobile ? 'w-full max-w-96 px-4' : 'w-96'}`}>
                <h1>Email</h1>
                <input 
                    name="emailInput" 
                    className={`my-2 border-2 ${emailFieldStatus.isError ? 'border-red-800' : 'border-gray-200'} w-full h-12 rounded-xl px-2`}
                    placeholder='Your Email'   
                    onChange={(e) => setEmailInput(e.target.value)}
                />
                { emailFieldStatus.isError ? <h1 className="self-start text-red-800 mx-4">{emailFieldStatus.message}</h1> : '' }
            </div>
            <div className={`${isMobile ? 'w-full max-w-96 px-4' : 'w-96'}`}>
            <h1>Name</h1>
                <input 
                    name="nameInput" 
                    className='my-2 border-2 border-gray-200 w-full h-12 rounded-xl px-2' 
                    placeholder='Your Name'
                    onChange={(e) => setNameInput(e.target.value)}
                />
            </div>
            <div className={`${isMobile ? 'w-full max-w-96 px-4' : 'w-96'}`}>
                <h1>Message</h1>
                <textarea
                    name="commentInput"
                    className={`my-2 border-2 border-gray-200 w-full h-52 rounded-xl px-2 py-2 resize-none align-top text-start whitespace-pre-wrap break-words`}
                    placeholder="Your Message"
                    onChange={(e) => setMessageInput(e.target.value)}
                />
            </div>
            {
                (status == Status.LOADING) ? <LoadingComponent/> : 
                <AlertDialog/>
                // <button type="button"  onClick={() => onPressed()}  className='bg-blue-400 w-48 h-8 rounded-md my-3 text-white'>Submit</button>
            }
            <Dialog open={status==Status.SUCCESS}>
                <div className='w-48 h-48 bg-black'></div>
            </Dialog>
            


        
        </div>
    );
}

function LoadingComponent() {
    return (
        <div role="status">
                <svg aria-hidden="true" className=" my-3 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
        </div>
    );
}

function ContactComponent() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="pt-10 text-2xl">Contact Detail</h1>
            <div className="h-4"></div>
            <div className="my-3 bg-blue-100 p-5 w-[360px] h-24 rounded-xl flex">
                <SocialIcon url="https://github.com" href='https://github.com/Dzikriananda/' />
                <div className='mx-4'>
                    <h1>Github</h1>
                    <h1 className='text-sm'>github.com/Dzikriananda/</h1>
                </div>
            </div>
            <div className="my-3 bg-blue-100 p-5 w-[360px] h-24 rounded-xl flex">
                <SocialIcon url="https://instagram.com" href='https://www.instagram.com/dzikry.ananda/'/>
                <div className='mx-4'>
                    <h1>Instagram</h1>
                    <h1 className='text-sm'>@dzikri.ananda</h1>
                </div>
            </div>
            <div className="my-3 bg-blue-100 p-5 w-[360px] h-24 rounded-xl flex">
                <SocialIcon url="https://linkedin.com" href='https://id.linkedin.com/in/dzikri-ananda/'/>
                <div className='mx-4'>
                    <h1>Linkedin</h1>
                    <h2 className='text-sm'>linkedin.com/in/dzikri-ananda/</h2>
                </div>
            </div>
            <div className="my-3 bg-blue-100 p-5 w-[360px] h-24 rounded-xl flex">
                <SocialIcon url="https://mail.google.com" href='https://mail.google.com/mail/u/0/#inbox'/>
                <div className='mx-4'>
                    <h1>Gmail</h1>
                    <h1 className='text-sm'>Dzikry.785@gmail.com</h1>
                </div>
            </div>
        </div>
    );
}

function Search() {
    function search(formData) {
      formData.preventDefault();
      alert(`You searched for `);
    }
    return (
      <form onSubmit={search}>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
    );
  }

export default ContactMeScreen;
    