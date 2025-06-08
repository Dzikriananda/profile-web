// name, techStack, date, role, apkUrl, repoUrl, description, features, techUsed,imgPath
import PortfolioDetail from "../models/PortfolioDetail"
import calorieGuruImg1 from '../assets/images/portofolio-1/porto-1-1.png';
import calorieGuruImg2 from '../assets/images/portofolio-1/porto-1-2.png';
import calorieGuruImg3 from '../assets/images/portofolio-1/porto-1-3.png';
import calorieGuruImg4 from '../assets/images/portofolio-1/porto-1-4.png';
import calorieGuruImg5 from '../assets/images/portofolio-1/porto-1-5.png';
import calorieGuruImg6 from '../assets/images/portofolio-1/porto-1-6.png';

import birdGuard1 from '../assets/images/portofolio-2/1.webp';
import birdGuard2 from '../assets/images/portofolio-2/2.webp';
import birdGuard3 from '../assets/images/portofolio-2/3.webp';
import birdGuard4 from '../assets/images/portofolio-2/4.webp';
import birdGuard5 from '../assets/images/portofolio-2/5.webp';
import birdGuard6 from '../assets/images/portofolio-2/6.webp';
import birdGuard7 from '../assets/images/portofolio-2/7.webp';
import birdGuard8 from '../assets/images/portofolio-2/8.webp';
import birdGuard9 from '../assets/images/portofolio-2/9.webp';
import birdGuard10 from '../assets/images/portofolio-2/10.webp';
import birdGuard11 from '../assets/images/portofolio-2/11.webp';
import birdGuard12 from '../assets/images/portofolio-2/12.webp';
import birdGuard13 from '../assets/images/portofolio-2/13.webp';
import birdGuard14 from '../assets/images/portofolio-2/14.webp';
import birdGuard15 from '../assets/images/portofolio-2/15.webp';
import birdGuard16 from '../assets/images/portofolio-2/16.webp';
import birdGuard17 from '../assets/images/portofolio-2/17.webp';
import birdGuard18 from '../assets/images/portofolio-2/18.webp';
import birdGuard19 from '../assets/images/portofolio-2/19.webp';
import birdGuard20 from '../assets/images/portofolio-2/20.webp';
import birdGuard21 from '../assets/images/portofolio-2/21.webp';


const calorieGuruDetail = new PortfolioDetail(
    "Calorie Guru",
    "Flutter, Firebase",
    "August-December 2023",
    "Fullstack Developer (Mobile and Backend)",
    "https://drive.google.com/file/d/1FKilu2HHDswlS2cH5HQsZkLfPwrfmWjt/view",
    "https://github.com/Dzikriananda/CalorieGuru-MobileApp",
    "Welcome to Calorie Guru - your go-to application for tracking and managing your daily calorie intake! Calorie Guru is designed to help users easily log their daily calorie consumption, providing a convenient way to monitor their diet and make informed decisions about their nutrition. This app simplifies the process of keeping track of calories consumed throughout the day.",
    [
        {
            category: "Calorie Logging",
            items: [
              {
                title: "Log Your Meals",
                description:
                  "Easily input and track the food items and their respective calorie counts for each meal.",
              },
              {
                title: "Search Calorie Information",
                description:
                  "Utilize machine learning-based food recognition to search and log the calorie count of various food items and burned calories from many sports.",
              },
              {
                title: "View Daily Intake",
                description:
                  "Monitor your daily calorie intake through a user-friendly interface.",
              },
              {
                title: "View History",
                description: "Easily view past Calorie Log.",
              },
            ],
          },
          {
            category: "Burning Activities",
            items: [
              {
                title: "Track Physical Activities",
                description:
                  "Log exercises and physical activities to calculate and track burned calories.",
              },
              {
                title: "Customize Activity Intensity",
                description:
                  "Adjust activity duration and intensity for accurate calorie expenditure calculation.",
              },
            ],
          },
          {
            category: "User Profiles",
            items: [
              {
                title: "Profile Modification",
                description:
                  "Users can modify their profiles, including email and password changes.",
              },
              {
                title: "Personalized Profiles",
                description:
                  "Create and manage individual profiles to track calorie goals and progress.",
              },
              {
                title: "Delete Account",
                description:
                  "Delete an account if a user wishes not to use the app anymore.",
              },
            ],
          },
    ],
    [{
        category: "Frontend",
        items: [
          "Flutter for the user interface.",
          "MVVM Architecture with GET for Dependency Injection.",
          "Provider for state management.",
          "Http Package for API interactions.",
        ],
      },
      {
        category: "Backend",
        items: [
          "Firebase Authentication for user authentication.",
          "Firestore for NoSQL database.",
          "RESTful API architecture for other APIs.",
        ],
      },],
    [calorieGuruImg1,calorieGuruImg2,calorieGuruImg3,calorieGuruImg4,calorieGuruImg5,calorieGuruImg6],
    1,
    1
);



const birdGuardDetail = new PortfolioDetail(
    "Bird Guard",
    "Flutter",
    "March - June 2024",
    "Frontend Mobile Developer",
    null,
    "https://github.com/Dzikriananda/aplikasi-identifikasi-burung",
    "Bird Guard is a mobile application designed to help users detect and identify protected bird species in Indonesia. Developed using Flutter and Dart, it serves as the frontend module interfacing with a backend that processes predictions using a CNN model that hosted in seperate Backend that created by . The app includes core features such as user authentication, bird species detection, profile settings, and detection history. It aims to empower users in biodiversity protection through easy-to-use bird identification technology.",
    [
      {
        category: "User Authentication",
        items: [
          {
            title: "Login, Register, Logout",
            description: "Allows users to securely authenticate before accessing core functionalities."
          }
        ]
      },
      {
        category: "Detection Features",
        items: [
          {
            title: "Bird Species Detection",
            description: "Detects whether an image contains a protected bird species using backend CNN model."
          },
          {
            title: "View Detection Results",
            description: "Displays prediction results including species name and accuracy."
          },
          {
            title: "View History Results",
            description: "Displays previous prediction results. The images are cached in your device in order to save data bandwidth"
          }
        ]
      },
      {
        category: "Reference Information",
        items: [
          {
            title: "Species List",
            description: "View list of detectable protected bird species."
          },
          {
            title: "Detailed Species Info",
            description: "Detailed view of each species’ information."
          }
        ]
      },
      {
        category: "User Utilities",
        items: [
          {
            title: "Profile Information",
            description: "Access and view user profile details."
          },
        ]
      },
      {
        category: "Settings",
        items: [
          {
            title: "Night Mode",
            description: "Toggle night mode."
          },
          {
            title: "Language",
            description: "Change language"
          },
          {
            title: "Cache Management",
            description: "You can clear the stored image in your device to free storage"
          },
          {
            title: "Image Compression ",
            description: "You can set the image compression for the image cache to efficiently save more space for your device"
          },
          
        ]
      }
    ],
    [
      {
        category: "Frontend",
        items: [
          "Flutter for UI development.",
          "Dart as the programming language.",
          "MVVM architecture using GetX for state management and routing.",
          "Localization for multi-language support.",
          "Dark mode implementation.",
          "Local data caching for performance",
          "Use Isolate Multithread for Image Download & Compression"
        ]
      }
    ],
    [
        birdGuard1,
        birdGuard2,
        birdGuard3,
        birdGuard4,
        birdGuard5,
        birdGuard6,
        birdGuard7,
        birdGuard8,
        birdGuard9,
        birdGuard10,
        birdGuard11,
        birdGuard12,
        birdGuard13,
        birdGuard14,
        birdGuard15,
        birdGuard16,
        birdGuard17,
        birdGuard18,
        birdGuard19,
        birdGuard20,
        birdGuard21,
      ],
      3,
      3

    );
  

export const portfolioDetailData = [calorieGuruDetail,birdGuardDetail]