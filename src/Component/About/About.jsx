import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = ({ MyPicture }) => {
  const transition = { ease: "linear", duration: 0.6 };
  return (
    <section className="About" id="About">
      <div className="container">
        <motion.div
          className="about-photo"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={transition}
        >
          <img src={MyPicture} alt="About-Image" />
        </motion.div>

        <motion.div
          className="about-me"
          initial={{ y: -70, opacity: 0, zIndex: -11 }}
          whileInView={{
            y: 0,
            opacity: 1,
            zIndex: 0
          }}
          transition={transition}
        >
          <h1>ABOUT ME</h1>
          <div className="title">
            <div className="hr"></div>
          </div>
          <div className="p">
            <p>With a solid foundation in Frontend Development, I possess a deep understanding of HTML5, CSS3, SCSS, TAILWIND, JAVASCRIPT, REACT, VITE and UI/UX DESIGN allowing me to bring designs to life and create seamless user interfaces. I thrive on solving complex challenges and implementing responsive designs that function flawlessly acreoss various devices and platforms.
            </p>
            <p>
              In addition to my technical skills, I have a keen eye for aesthetics and a passion for crafting exceptional user experiences. I specialize in UI/UX design, utilizing user-centered design principles to create visually striking interfaces that not only look great but alos enhance usability and engagement. I enjoy collaborating with cross-functional teams, conducting user research, and prototyping interactive designs to ensure an optimal user journey.
            </p>
            <p>I am a dedicated and detail-oriented professional, driven by a passion for creating expectional user experiences through seamless Frontend development, captivating UI/UX design, and effective Digital Marketing strategies. I thrive in collaborative environments and look forward to leveraging my skills to contribute to projects that make a positive impact. </p>
          </div>
          <div className="contact-me">
            <button className="noBg">
              <a href="https://api.whatsapp.com/send?phone=2347035439642">CONTACT ME</a>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
