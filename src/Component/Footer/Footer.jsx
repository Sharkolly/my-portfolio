import React from "react";
import "./Footer.css";
import { motion } from "framer-motion"; 
const Footer = () => {
  return (

    <footer className="Footer">
      <div className="header-logo-links">
        <div className="logo">
          {/* <svg
            width="30"
            height="40"
            viewBox="0 0 58 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.1855 19.5501V19.4572L24.5461 13.3414C24.5461 13.3414 23.4587 13.4901 22.2807 14.7449C21.4652 15.6093 0.342926 36.9681 0.225127 37.1354C-0.409175 38.0648 0.37011 37.7674 1.64778 37.2934C1.72027 37.2934 12.0231 33.8916 12.0231 33.8916C12.0685 33.8358 12.0141 33.8823 12.0775 33.8358C12.0413 33.3618 12.005 31.4007 11.9869 31.2612C11.9325 30.7779 12.1863 30.6199 12.6212 30.434L21.0121 27.2925C21.0665 27.2181 29.0315 19.6989 29.1855 19.5501ZM43.6929 30.7129C44.8981 32.2093 45.5687 31.949 46.4839 31.5773C46.7738 31.4657 56.9408 27.1531 57.1583 27.0322C57.8832 26.6326 57.0042 25.48 56.5058 24.8573C56.3156 24.625 37.9208 2.02999 37.7305 1.77904C36.8515 0.645105 36.4347 0.580043 34.2509 0.589338C33.3266 0.589338 24.5733 0.63581 23.6943 0.645105C21.9545 0.654399 20.7131 0.617221 21.9545 2.21588C22.6522 3.09886 43.1764 30.0715 43.6929 30.7129ZM57.5298 30.8616C57.3214 30.8337 55.3007 30.4247 54.0864 30.1924C54.0864 30.1924 43.6658 34.8768 43.4392 34.9883C41.9894 35.6668 41.0017 34.6909 40.1137 33.6313L34.9396 26.7534C34.4503 26.6697 29.4665 25.8611 29.0224 25.889C28.7415 25.9076 28.1525 25.9634 27.7176 26.1586C27.2736 26.3537 14.5604 31.0661 14.1073 31.2426C13.6451 31.4285 13.0743 31.5773 13.1015 31.949C13.1196 32.1814 13.2827 32.1907 13.5183 32.2743C13.7629 32.3487 40.7842 38.5574 41.4276 38.6968C42.8412 39.0036 44.9162 39.6728 46.2845 38.8549C46.4748 38.7433 57.5026 31.7538 57.6838 31.6237C58.1732 31.2519 58.0735 30.9917 57.5298 30.8616Z"
              fill="white"
            />
          </svg> */}
          <motion.h2 style={{ textAlign: 'center' }} animate={{opacity: [.4,.7,1,.7,.4]}}
            // initial={{opacity: .3 }}
            transition={{ease: 'linear', duration: 2.5,repeat: Infinity}}>
          &lt;/&gt;
            <span>FOLA</span>DEV 🚀
          </motion.h2>
        </div>
        {/* <nav>{navDisplay}</nav> */}
      </div>
    </footer>
  );
};

export default Footer;