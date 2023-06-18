import React, { useState } from "react";
import "./intro.css";
import TypewriterComponent from "typewriter-effect";
import Svg from "../Nav/menu-outline.svg";
import { easeIn, easeInOut, motion, spring } from "framer-motion";

const Intro = ({ MyPicture }) => {
  const navLinks = [
    { name: "Home", id: '#' },
    { name: "About", id: '#About'},
    { name: "Skills", id: '#Skills' },
    { name: "Project", id: '#Project' },
    { name: "Contact", id: '#Contact' },
  ];
  const navDisplay = navLinks.map((links, index) => (
    <ul key={index}>
      <li>
        <a href={links.id} onClick={() =>setToggle(!toggle)}>{links.name}</a>
      </li>
    </ul>
  ));

  const [toggle, setToggle] = useState(true);
  const toggleNav = () => {
    setToggle(!toggle);
  };
  const setNav = toggle ? "none" : "block";
  const animationText = {
    autoStart: true,
    loop: true,
    delay: 250,
    strings: [
      "ADESANYA-MOFEOLUWA",
      "A FRONTEND-DEVELOPER </>",
      "A UI/UX DESIGNER" ,
      "A DIGITAL-MARKETER",
      // "A ELECTRICAL ENGINEER",
      "A FASHION DESIGNER",
      "A GRAPHICS DESIGNER",
    ],
  };
  return (
    <header>
      <div className="header"
     >
        <div className="header-logo-linkss">
          <div className="logo-nav">
            <motion.div
              className="logo"
              animate={{
                opacity: [.65, .8, 1, .8, .65],
                transition: { ease: "linear", duration: 2.5, delay: 1.5, repeat: Infinity}
              }}
              initial={{ opacity: 0 }}
            >
              <h2>
                &lt;/&gt;
                <span>FOLA</span>DEV🚀
              </h2>
            </motion.div>
            <img src={Svg} className="menu" alt="Menu Svg" onClick={toggleNav} />
          </div>
          

          <nav style={{ display: setNav }}>
            <svg
              onClick={toggleNav}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 512 512"
            >
              <path d="M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z" />
            </svg>
            {navDisplay}
          </nav>
        </div>
        <motion.section className="intro">
          <motion.div className="Profile"
           animate={{ opacity: 1 }}
           initial={{ opacity: 0 }}
           transition={{
             ease: "linear", duration: 1, delay: .6}}>
            <h2>HI I'M</h2>
            <motion.h1
              animate={{ opacity: 1 }}
              initial={{ opacity: 0.02 }}
              transition={{ ease: easeIn, duration: 1, delay: .3 }}
            >
              <TypewriterComponent options={animationText} />
            </motion.h1>
            <p>
              Hello! I'm Adesanya Mofeoluwa Folajimi, a passionate and multidisciplinary professional with expertise in frontend development, UI/UX design, and Digital Marketing. I have a strong drive to create intuitive and visually appealing digital experiences that captivate users and drive business growth. I am a lifelong learner, constantly seeking knowledge and staying up-to-date with the latest trends in Frontend Development, UI/UX Design, and Digital Marketing. I am excited to contribute my skills and creativity to projects that make a positive impact and create meaningful connections with users
            </p>
            <section className="CV">
              <button>
                <a href="resume.pdf" download={true} >DOWNLOAD CV</a>
              </button>
            </section>
          </motion.div>
          <motion.div className="Profile-Image"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              ease: "linear", duration: 1, delay: .5}}>
            <img src={MyPicture} alt="Profile-Picture" />
          </motion.div>
        </motion.section>
        <div className="social-media">
          <a href="https://api.whatsapp.com/send?phone=2347035439642" target="_blank">
            <svg
              width="27"
              height="25"
              viewBox="0 0 27 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5972 4.28559C20.1115 2.07615 16.8011 0.860962 13.283 0.860962C6.02157 0.860962 0.112719 6.10049 0.112719 12.5394C0.112719 14.5963 0.717842 16.6058 1.86876 18.3787L0 24.4283L6.98265 22.8028C8.9048 23.7339 11.0702 24.2231 13.2771 24.2231H13.283C20.5386 24.2231 26.578 18.9836 26.578 12.5447C26.578 9.42517 25.083 6.49503 22.5972 4.28559ZM13.283 22.2557C11.3134 22.2557 9.38534 21.7875 7.70642 20.9037L7.30894 20.6933L3.168 21.656L4.27146 18.0735L4.01043 17.7053C2.9129 16.1587 2.33744 14.3754 2.33744 12.5394C2.33744 7.18942 7.24961 2.83367 13.289 2.83367C16.2137 2.83367 18.9605 3.8437 21.0251 5.67964C23.0896 7.51558 24.3592 9.95122 24.3532 12.5447C24.3532 17.8999 19.3165 22.2557 13.283 22.2557ZM19.2868 14.9856C18.9605 14.8383 17.3409 14.1334 17.0384 14.0387C16.7358 13.9387 16.5163 13.8914 16.2968 14.186C16.0773 14.4806 15.4484 15.1329 15.2527 15.3328C15.0628 15.5274 14.867 15.5537 14.5408 15.4064C12.6067 14.549 11.3372 13.8756 10.0617 11.9345C9.7235 11.4189 10.3998 11.4557 11.0287 10.3405C11.1355 10.1459 11.0821 9.97753 10.999 9.83023C10.9159 9.68293 10.2574 8.2468 9.98453 7.66288C9.71757 7.09473 9.44467 7.17364 9.24296 7.16312C9.05312 7.1526 8.83361 7.1526 8.61411 7.1526C8.3946 7.1526 8.03865 7.22625 7.73609 7.51558C7.43352 7.81017 6.58517 8.51509 6.58517 9.95122C6.58517 11.3874 7.76575 12.7761 7.92593 12.9708C8.09204 13.1654 10.2456 16.1113 13.55 17.3791C15.6383 18.1788 16.457 18.2471 17.5011 18.1104C18.1359 18.0262 19.447 17.4054 19.7199 16.7216C19.9928 16.0377 19.9928 15.4538 19.9097 15.3328C19.8326 15.2013 19.6131 15.1276 19.2868 14.9856Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="https://github.com/Sharkolly?tab=repositories" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/adesanya-m-8543ba256">
            <svg
              width="27"
              height="30"
              viewBox="0 0 27 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_140_151)">
                <path
                  d="M24.6795 1.8649H1.89249C0.848359 1.8649 0 2.70993 0 3.74728V26.0911C0 27.1285 0.848359 27.9735 1.89249 27.9735H24.6795C25.7237 27.9735 26.578 27.1285 26.578 26.0911V3.74728C26.578 2.70993 25.7237 1.8649 24.6795 1.8649ZM8.03271 24.2437H4.09348V11.7838H8.03865V24.2437H8.03271ZM6.0631 10.0821C4.79946 10.0821 3.77905 9.07391 3.77905 7.83841C3.77905 6.60291 4.79946 5.5947 6.0631 5.5947C7.32081 5.5947 8.34714 6.60291 8.34714 7.83841C8.34714 9.07974 7.32674 10.0821 6.0631 10.0821ZM22.7989 24.2437H18.8597V18.1828C18.8597 16.7375 18.83 14.8784 16.8129 14.8784C14.7603 14.8784 14.4458 16.4519 14.4458 18.0779V24.2437H10.5066V11.7838H14.2857V13.4856H14.339C14.867 12.5065 16.1544 11.475 18.0706 11.475C22.0573 11.475 22.7989 14.0567 22.7989 17.4135V24.2437Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_140_151">
                  <rect width="26.578" height="29.8384" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://mofeoluwaadeasanya@gmail.com" target="_blank">
            {" "}
            <svg
              width="35"
              height="25"
              viewBox="0 0 35 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.36563 24.9049H7.88543V12.0784L0 6.41971V22.6414C0 23.8939 1.06059 24.9049 2.36563 24.9049Z"
                fill="white"
              />
              <path
                d="M26.8104 24.9049H32.3301C33.6393 24.9049 34.6958 23.8901 34.6958 22.6414V6.41971L26.8104 12.0784"
                fill="white"
              />
              <path
                d="M26.8104 2.26992V12.0784L34.6958 6.41966V3.40167C34.6958 0.602475 31.3564 -0.993289 29.0183 0.685469"
                fill="#AAAAAA"
              />
              <path
                d="M7.88544 12.0783V2.26981L17.348 9.06028L26.8104 2.26981V12.0783L17.348 18.8688"
                fill="#AAAAAA"
              />
              <path
                d="M0 3.40167V6.41966L7.88543 12.0784V2.26992L5.67752 0.685469C3.33554 -0.993289 0 0.602475 0 3.40167Z"
                fill="#AAAAAA"
              />
            </svg>
          </a>
          <a href="https://twitter.com/Fola22288041?t=jtz_3Jdgq0rOL9T6_6DG_g&s=09" target="_blank">
            {" "}
            <svg
              width="30"
              height="23"
              viewBox="0 0 30 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.9163 5.62401C26.9354 5.87082 26.9354 6.11768 26.9354 6.36449C26.9354 13.8925 20.7488 22.5666 9.44166 22.5666C5.95813 22.5666 2.7221 21.6322 0 20.0103C0.494943 20.0631 0.970785 20.0808 1.48477 20.0808C4.3591 20.0808 7.00509 19.1817 9.11804 17.6478C6.41499 17.5949 4.14974 15.9553 3.36927 13.6986C3.75001 13.7515 4.1307 13.7868 4.53049 13.7868C5.0825 13.7868 5.63457 13.7162 6.1485 13.5929C3.33124 13.0639 1.21823 10.772 1.21823 8.00409V7.9336C2.03673 8.35672 2.98859 8.62117 3.9974 8.65639C2.3413 7.63382 1.25631 5.88845 1.25631 3.91386C1.25631 2.85607 1.56083 1.88641 2.09386 1.04015C5.12053 4.49567 9.67006 6.75229 14.7715 6.99916C14.6764 6.57603 14.6193 6.13532 14.6193 5.69456C14.6193 2.55635 17.3604 0 20.7678 0C22.5381 0 24.137 0.687575 25.2602 1.79828C26.6497 1.55147 27.9822 1.07543 29.1625 0.423127C28.7055 1.74542 27.7348 2.85612 26.4594 3.56128C27.6967 3.43793 28.896 3.12052 30 2.67981C29.1626 3.80809 28.1156 4.81297 26.9163 5.62401Z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        <div className="down-arrow">
          {" "}
          <a href="#Contact">
            <svg
              width="20"
              height="56"
              viewBox="0 0 32 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 50L16 63L29 50"
                stroke="#BFBFBF"
                stroke-opacity="0.4"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 63V3"
                stroke="#BFBFBF"
                stroke-opacity="0.4"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Intro;
