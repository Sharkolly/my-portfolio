import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  const webDev = {
    ease: 'linear',
    duration: .7,
  }
  const UI = {
    ease: 'linear',
    duration: 1.2,
  }
  const DM = {
    ease: 'linear',
    duration: .5,
  }
  const inView = { x: 0 ,opacity: 1}
  return (
    <section className="Skills" id="Skills">
      <div className="skills">
        <motion.div
          className="skills-title"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ ease: "linear", duration: .1}}
        >
          <h1>MY SKILLS</h1>
          <p>What I Do and What I Can Do</p>
        </motion.div>

        <div className="skills-name">
          <motion.div className="web-development" 
            whileInView={inView}
            initial={{ x: -50, opacity: 0 }}
            transition={webDev}>
            <div>
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.8516 62.0939C49.4681 61.8606 49.134 61.5478 48.8685 61.1688C48.7458 60.994 48.6422 60.8091 48.5564 60.6181H4.98384V17.6706H64.1273V45.7138C65.3899 45.8278 66.4493 46.6571 66.8941 47.7927C67.288 47.5768 67.7269 47.4434 68.1883 47.4027C68.5004 47.3755 68.8103 47.3949 69.111 47.4543V6.97143C69.111 4.68128 67.2482 2.81812 64.9582 2.81812H4.15314C1.86317 2.81812 0 4.68128 0 6.97143V61.449C0 63.7391 1.86317 65.6021 4.15314 65.6021H49.4731C49.1194 64.8859 49.0355 64.0774 49.2436 63.2996C49.3636 62.8522 49.5712 62.4441 49.8516 62.0939ZM59.5666 9.79235C59.5666 8.94544 60.2531 8.25871 61.1 8.25871H62.6335C63.4806 8.25871 64.167 8.94526 64.167 9.79235V11.5304C64.167 12.3773 63.4804 13.0639 62.6335 13.0639H61.1C60.2529 13.0639 59.5666 12.3773 59.5666 11.5304V9.79235ZM52.4358 9.79235C52.4358 8.94544 53.1224 8.25871 53.9693 8.25871H55.5029C56.35 8.25871 57.0364 8.94526 57.0364 9.79235V11.5304C57.0364 12.3773 56.3499 13.0639 55.5029 13.0639H53.9693C53.1224 13.0639 52.4358 12.3773 52.4358 11.5304V9.79235ZM45.305 9.79235C45.305 8.94544 45.9917 8.25871 46.8384 8.25871H48.3719C49.219 8.25871 49.9055 8.94526 49.9055 9.79235V11.5304C49.9055 12.3773 49.219 13.0639 48.3719 13.0639H46.8384C45.9917 13.0639 45.305 12.3773 45.305 11.5304V9.79235Z"
                  fill="#7D7D7D"
                />
                <path
                  d="M73.9901 59.1692L73.5293 56.5559C73.4671 56.204 73.1318 55.9689 72.7795 56.031L70.4555 56.4405C70.1765 55.7858 69.8202 55.1726 69.3973 54.6113L70.9153 52.8019C71.0256 52.6708 71.0793 52.5007 71.0645 52.3296C71.0494 52.1585 70.9669 52.0006 70.8354 51.8901L68.8029 50.1843C68.6715 50.074 68.5011 50.0205 68.3301 50.0354C68.159 50.0504 68.0011 50.1327 67.8908 50.2642L66.3743 52.0722C65.7517 51.755 65.0857 51.5104 64.3881 51.349V48.989C64.3881 48.6317 64.0982 48.3416 63.7408 48.3416H61.087C60.7298 48.3416 60.4397 48.6317 60.4397 48.989V51.349C59.7417 51.5102 59.0765 51.755 58.4536 52.0722L56.9367 50.2643C56.7069 49.9905 56.2987 49.9549 56.0247 50.1845L53.992 51.8901C53.8606 52.0006 53.7783 52.1585 53.7631 52.3296C53.7483 52.5007 53.8019 52.671 53.9122 52.8024L55.4303 54.6115C55.0081 55.1726 54.6511 55.7862 54.3721 56.4407L52.0482 56.031C51.6968 55.9691 51.3607 56.204 51.2983 56.5559L50.8377 59.1692C50.8079 59.3382 50.8465 59.512 50.9447 59.6528C51.0435 59.7936 51.1931 59.8893 51.3623 59.9191L53.688 60.3289C53.7259 61.0495 53.8514 61.7466 54.0534 62.4104L52.0092 63.5902C51.8605 63.6757 51.7521 63.8174 51.7075 63.983C51.6631 64.1489 51.6866 64.3254 51.7722 64.4742L53.099 66.7722C53.1844 66.921 53.3261 67.0293 53.4917 67.0737C53.5469 67.0885 53.6031 67.0958 53.6593 67.0958C53.7719 67.0958 53.8835 67.0665 53.9829 67.0091L56.0286 65.8279C56.5097 66.3433 57.0528 66.8001 57.6463 67.1863L56.8385 69.4055C56.78 69.5669 56.7876 69.7449 56.8602 69.9005C56.9328 70.0561 57.0641 70.1764 57.2253 70.2349L59.7185 71.1423C59.79 71.1684 59.8651 71.1818 59.94 71.1818C60.0334 71.1818 60.1273 71.1615 60.2138 71.121C60.3694 71.0485 60.4894 70.9171 60.5481 70.7557L61.3557 68.5365C61.702 68.5785 62.0544 68.6002 62.412 68.6002C62.7695 68.6002 63.122 68.5781 63.4682 68.5365L64.276 70.7557C64.3345 70.9171 64.4551 71.0485 64.6103 71.121C64.6967 71.1613 64.7902 71.1818 64.8842 71.1818C64.9589 71.1818 65.0339 71.1687 65.1055 71.1423L67.599 70.2349C67.7599 70.1764 67.8913 70.0557 67.9638 69.9005C68.0364 69.7449 68.0441 69.5669 67.9854 69.4055L67.1777 67.1867C67.7706 66.8004 68.3137 66.3433 68.7953 65.8282L70.8411 67.0094C70.9403 67.0665 71.052 67.0961 71.1646 67.0961C71.2207 67.0961 71.2774 67.0885 71.3322 67.0741C71.498 67.0297 71.6393 66.921 71.725 66.7726L73.0517 64.4742C73.1374 64.3258 73.1608 64.1489 73.1164 63.983C73.0718 63.8177 72.9635 63.6761 72.8147 63.5902L70.7709 62.4108C70.9729 61.7468 71.098 61.0497 71.1359 60.3293L73.4616 59.9192C73.6308 59.8895 73.7809 59.7938 73.8793 59.653C73.9813 59.512 74.0199 59.3382 73.9901 59.1692ZM62.4141 63.322C60.4484 63.322 58.8545 61.7281 58.8545 59.7622C58.8545 57.7963 60.4485 56.2026 62.4141 56.2026C64.38 56.2026 65.9739 57.7963 65.9739 59.7622C65.9739 61.7281 64.38 63.322 62.4141 63.322Z"
                  fill="#7D7D7D"
                />
                <path
                  d="M29.0224 41.4773C29.0224 40.6399 28.5317 39.8707 27.772 39.5179L20.8193 36.2874L27.7722 33.0566C28.5317 32.7035 29.0224 31.9345 29.0224 31.0974V31.0412C29.0224 30.2993 28.649 29.6182 28.0242 29.2201C27.6784 28.9993 27.2758 28.8825 26.8601 28.8825C26.5467 28.8825 26.2322 28.9514 25.9508 29.0822L14.8352 34.2512C14.0759 34.6044 13.5854 35.3734 13.5854 36.2102V36.3648C13.5854 37.2006 14.0757 37.9691 14.8354 38.324L25.952 43.4936C26.2394 43.6266 26.5455 43.6941 26.8616 43.6941C27.2736 43.6941 27.6751 43.5771 28.0242 43.3551C28.6494 42.9554 29.0226 42.2748 29.0226 41.5338L29.0224 41.4773Z"
                  fill="#7D7D7D"
                />
                <path
                  d="M39.9898 23.6155C39.5843 23.0604 38.9321 22.7291 38.2451 22.7291H38.1897C37.2463 22.7291 36.4191 23.3327 36.1317 24.2298L28.808 46.9219C28.5995 47.5771 28.7169 48.2987 29.1218 48.8537C29.5273 49.4084 30.1795 49.7399 30.8666 49.7399H30.9221C31.8652 49.7399 32.6919 49.1361 32.9789 48.2392L40.3017 25.5488C40.5121 24.8942 40.3955 24.1715 39.9898 23.6155Z"
                  fill="#7D7D7D"
                />
                <path
                  d="M54.2758 34.251L43.16 29.082C42.8795 28.9516 42.5655 28.8827 42.2521 28.8827C41.8366 28.8827 41.4338 28.9992 41.0882 29.2196C40.4623 29.6184 40.0889 30.2993 40.0889 31.0412V31.0974C40.0889 31.9338 40.5793 32.703 41.3395 33.0575L48.2921 36.2876L41.3393 39.5179C40.5796 39.8707 40.0889 40.6399 40.0889 41.4773V41.5338C40.0889 42.2748 40.4623 42.9552 41.0879 43.3552C41.4357 43.5769 41.8375 43.6941 42.25 43.6941C42.5658 43.6941 42.8715 43.6266 43.1609 43.493L54.2772 38.3235C55.0361 37.9694 55.5262 37.2008 55.5262 36.365V36.2104C55.5257 35.3734 55.0353 34.6044 54.2758 34.251Z"
                  fill="#7D7D7D"
                />
              </svg>
            </div>

            <i>WEB DEVELOPMENT</i>
            <p>
            Web development is a dynamic field that empowers businesses and individuals to create immersive digital experiences. With expertise in front-end and back-end development, I craft visually appealing and responsive websites using HTML, CSS, JavaScript, Node, GitHub and modern frameworks like React and Expressjs. I also possess skills in database management, version control, and deployment, ensuring efficient data storage, code collaboration, and seamless application deployment. With a passion for continuous learning, I stay up-to-date with industry trends to deliver innovative solutions that captivate users and drive success in the ever-evolving online landscape.
            </p>
          </motion.div>

          <motion.div className="ui-design">
            <div>
              <svg
                width="47"
                height="81"
                viewBox="0 0 47 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_140_75)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.24712 16.3213H41.7529V54.4746H5.24712V16.3213ZM22.4783 21.7793H25.8665V28.325C25.8665 28.9709 25.761 29.584 25.5633 30.1575C25.3589 30.7375 25.0425 31.2385 24.614 31.6736C24.179 32.1086 23.7307 32.4053 23.2561 32.5833C22.5969 32.8271 21.8059 32.9458 20.883 32.9458C20.3491 32.9458 19.769 32.9062 19.1362 32.8337C18.5034 32.7612 17.976 32.6096 17.5541 32.3921C17.1323 32.168 16.7433 31.8582 16.394 31.4429C16.038 31.0342 15.8007 30.6123 15.6689 30.1772C15.4579 29.4785 15.3525 28.8589 15.3525 28.3184V21.7727H18.7407V28.47C18.7407 29.0698 18.9055 29.5378 19.2351 29.874C19.5647 30.2102 20.0261 30.3816 20.6128 30.3816C21.1928 30.3816 21.6477 30.2168 21.9839 29.8806C22.3135 29.551 22.4783 29.083 22.4783 28.47V21.7793ZM28.2461 21.7793H31.6541V32.7612H28.2461V21.7793ZM8.21346 0H38.7865C41.0475 0 43.1108 0.922852 44.594 2.40601C46.0771 3.88916 47 5.95239 47 8.21338V72.7866C47 75.0476 46.0771 77.1108 44.594 78.594C43.1108 80.0771 41.0475 81 38.7865 81H8.21346C5.95245 81 3.8892 80.0771 2.40603 78.594C0.922861 77.1108 0 75.0476 0 72.7866V8.21338C0 5.95239 0.922861 3.88916 2.40603 2.40601C3.8892 0.922852 5.95245 0 8.21346 0ZM5.24712 61.3235H20.6853V66.3596H25.1084V61.3169H41.7595V66.3596H45.0356V11.7466H1.97097V66.3662H5.24712V61.3235ZM19.0769 74.4873C18.5429 74.4873 18.0815 74.0522 18.0815 73.4919C18.0815 72.958 18.5165 72.4966 19.0769 72.4966H28.1143C28.6482 72.4966 29.1097 72.9316 29.1097 73.4919C29.1097 74.0259 28.6746 74.4873 28.1143 74.4873H19.0769ZM23.5 4.2583C24.3767 4.2583 25.082 4.96362 25.082 5.84033C25.082 6.71704 24.3767 7.42236 23.5 7.42236C22.6233 7.42236 21.9179 6.71704 21.9179 5.84033C21.9179 4.96362 22.6233 4.2583 23.5 4.2583ZM45.0356 68.3306H1.97097V72.7603C1.97097 74.4873 2.6763 76.043 3.81669 77.157C4.95708 78.2974 6.51276 79.0027 8.21346 79.0027H38.7865C40.5136 79.0027 42.0693 78.2974 43.1833 77.157C44.3237 76.0166 45.029 74.4609 45.029 72.7603V68.3306H45.0356ZM1.97097 9.74927H45.0356V8.21338C45.0356 6.48633 44.3303 4.93066 43.1899 3.81665C42.0495 2.67627 40.4938 1.97095 38.7931 1.97095H8.21346C6.48639 1.97095 4.93072 2.67627 3.81669 3.81665C2.6763 4.95703 1.97097 6.5127 1.97097 8.21338V9.74927ZM19.1889 37.7974H22.4783V44.1519C22.4783 44.7781 22.3794 45.3779 22.1816 45.9316C21.9839 46.4919 21.6806 46.9797 21.2588 47.4016C20.8369 47.8235 20.4018 48.1135 19.9404 48.2849C19.301 48.5222 18.5297 48.6409 17.6332 48.6409C17.1125 48.6409 16.5456 48.6013 15.9325 48.5288C15.3195 48.4563 14.8053 48.3113 14.3966 48.0938C13.9813 47.8762 13.6056 47.573 13.2694 47.1775C12.9266 46.782 12.6959 46.3667 12.5641 45.9514C12.3597 45.2725 12.2609 44.6726 12.2609 44.1519V37.7974H15.5502V44.3035C15.5502 44.8835 15.715 45.3384 16.0314 45.6614C16.3544 45.991 16.8027 46.1558 17.3696 46.1558C17.9299 46.1558 18.3781 45.991 18.7011 45.6746C19.0175 45.3582 19.1823 44.8967 19.1823 44.3035V37.7974H19.1889ZM23.9219 37.7974H27.554L29.4459 41.0801L31.2784 37.7974H34.871L31.5553 42.9653L35.1808 48.4629H31.4696L29.3799 45.0352L27.2705 48.4629H23.5989L27.2771 42.906L23.9219 37.7974Z"
                    fill="#7D7D7D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_140_75">
                    <rect width="47" height="81" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <i>UI & UX Design</i>
            <p>
            UI (User Interface) and UX (User Experience) are two essential components of modern design that greatly influence the success of digital products. UI focuses on the visual and interactive elements of an interface, encompassing layouts, colors, typography, and graphics. It aims to create aesthetically pleasing and intuitive designs that enhance usability and guide users towards their goals. On the other hand, UX concentrates on the overall user journey and satisfaction. It involves understanding user needs, conducting research, and designing seamless and delightful experiences. I possess a strong UI UX skill set that demonstrates the ability to create engaging, user-centered designs that effectively marry form and function, resulting in compelling and enjoyable user experiences.
            </p>
          </motion.div>

          <motion.div className="digital-marketing" whileInView={inView}
            initial={{ x: 15, opacity: 0 }}
            transition={DM}>
            <div>
              <svg
                width="75"
                height="81"
                viewBox="0 0 75 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_140_88)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.5698 13.2117H65.9729V37.8176H21.5698V13.2117ZM34.6802 29.7464H31.2195L30.7251 32.0044H27.6062L31.3293 18.2883H34.6741L38.3789 32.0044H35.1807L34.6802 29.7464ZM34.0332 26.7758L32.959 21.8514L31.8726 26.7838H34.0332V26.7758ZM39.8682 18.2963H44.4092C45.3003 18.2963 46.0266 18.4644 46.5759 18.8007C47.1252 19.137 47.583 19.6174 47.9431 20.25C48.3032 20.8826 48.5596 21.6112 48.7244 22.452C48.8892 23.2847 48.9685 24.1735 48.9685 25.1103C48.9685 26.5756 48.8464 27.7126 48.6084 28.5214C48.3704 29.3301 48.0347 30.0027 47.6074 30.5552C47.1802 31.0996 46.7224 31.468 46.228 31.6441C45.5566 31.8923 44.9524 32.0205 44.4092 32.0205H39.8682V18.2963ZM42.9199 21.395V28.8817H43.6707C44.3115 28.8817 44.7693 28.7856 45.0378 28.5854C45.3064 28.3852 45.52 28.0489 45.6726 27.5605C45.8252 27.0721 45.9045 26.2794 45.9045 25.1824C45.9045 23.7331 45.7336 22.7402 45.3918 22.2037C45.05 21.6673 44.4824 21.403 43.689 21.403H42.9199V21.395ZM50.531 27.4724L53.4302 27.2242C53.4912 27.8728 53.6194 28.3772 53.8147 28.7135C54.1321 29.266 54.5776 29.5463 55.1636 29.5463C55.5969 29.5463 55.9326 29.4021 56.1707 29.1219C56.4087 28.8416 56.5247 28.5053 56.5247 28.137C56.5247 27.7847 56.4148 27.4644 56.189 27.1842C55.9631 26.9039 55.4443 26.6397 54.6265 26.3915C53.2898 25.9751 52.3315 25.4226 51.7639 24.726C51.1902 24.0374 50.9033 23.1566 50.9033 22.0836C50.9033 21.379 51.0498 20.7144 51.3428 20.0899C51.6357 19.4573 52.0813 18.9689 52.6733 18.6085C53.2654 18.2482 54.0771 18.0721 55.1025 18.0721C56.366 18.0721 57.3303 18.4004 57.9895 19.0489C58.6548 19.6975 59.0454 20.7384 59.1736 22.1637L56.2988 22.4039C56.2256 21.7794 56.0608 21.331 55.8167 21.0507C55.5725 20.7705 55.2307 20.6263 54.8035 20.6263C54.4495 20.6263 54.1809 20.7304 53.9978 20.9386C53.8208 21.1468 53.7292 21.403 53.7292 21.6993C53.7292 21.9155 53.8025 22.1077 53.949 22.2838C54.0894 22.468 54.4312 22.6281 54.9683 22.7883C56.3049 23.1886 57.2571 23.589 57.8369 23.9973C58.4167 24.4057 58.8379 24.9101 59.1003 25.5187C59.3628 26.1192 59.491 26.7998 59.491 27.5525C59.491 28.4333 59.314 29.242 58.9661 29.9867C58.6121 30.7233 58.1238 31.2918 57.4951 31.6762C56.8665 32.0605 56.073 32.2527 55.1147 32.2527C53.4363 32.2527 52.2705 31.8043 51.6235 30.9075C50.9827 29.9947 50.6165 28.8577 50.531 27.4724ZM14.2944 73.4253C13.8855 75.2189 13.2996 76.6682 12.5855 77.7972H66.5833H66.6077C68.5547 77.653 70.0073 76.9724 70.9778 75.7634C71.9299 74.5783 72.4609 72.8087 72.5769 70.4626V3.17883H14.8682V14.0525V67.2838C14.8682 70.0062 14.8926 70.7989 14.2944 73.4253ZM8.02612 80.976C7.75146 81 7.4707 81 7.19604 80.984C6.08521 80.8959 4.99268 80.4475 4.00391 79.6868C1.83716 78.0133 0.164795 74.8105 0.012207 70.6228C0.00610352 70.5587 0 70.4867 0 70.4226V14.0525C0 13.1717 0.543213 12.4671 1.2085 12.4671H12.4512V1.58541C12.4512 0.704626 12.9944 0 13.6597 0H73.7915C74.4629 0 75 0.712633 75 1.58541V70.5027C75 70.5827 74.9939 70.6708 74.9878 70.7509C74.823 73.8737 74.0417 76.3158 72.644 78.0614C71.2524 79.7989 69.2871 80.7678 66.7419 80.96C66.6931 80.968 66.6382 80.976 66.5833 80.976H8.02612ZM7.35474 77.8212C7.41577 77.8052 7.48291 77.7972 7.55005 77.7972H7.9895C8.47168 77.7331 8.94165 77.5569 9.3811 77.2527C12.0728 75.403 12.4451 70.887 12.4451 67.3078V15.6379H2.4231V70.4146C2.4231 70.4306 2.4231 70.4546 2.4231 70.4706C2.53906 73.4813 3.71704 75.7714 5.23682 76.9484C5.896 77.4609 6.61621 77.7571 7.33032 77.8132L7.35474 77.8212ZM21.8506 48.7233C21.1792 48.7233 20.6421 48.0107 20.6421 47.1379C20.6421 46.2571 21.1853 45.5525 21.8506 45.5525H40.3198C40.9912 45.5525 41.5283 46.2651 41.5283 47.1379C41.5283 48.0187 40.9851 48.7233 40.3198 48.7233H21.8506ZM45.6116 48.7233C44.9402 48.7233 44.397 48.0107 44.397 47.1299C44.397 46.2491 44.9402 45.5365 45.6116 45.5365H65.5273C66.1987 45.5365 66.7419 46.2491 66.7419 47.1299C66.7419 48.0107 66.1987 48.7233 65.5273 48.7233H45.6116ZM45.6116 57.9395C44.9402 57.9395 44.397 57.2269 44.397 56.3461C44.397 55.4653 44.9402 54.7527 45.6116 54.7527H65.5273C66.1987 54.7527 66.7419 55.4653 66.7419 56.3461C66.7419 57.2269 66.1987 57.9395 65.5273 57.9395H45.6116ZM45.6116 67.1557C44.9402 67.1557 44.397 66.4431 44.397 65.5623C44.397 64.6815 44.9402 63.9689 45.6116 63.9689H65.5273C66.1987 63.9689 66.7419 64.6815 66.7419 65.5623C66.7419 66.4431 66.1987 67.1557 65.5273 67.1557H45.6116ZM21.8506 67.1557C21.1792 67.1557 20.6421 66.4431 20.6421 65.5703C20.6421 64.6895 21.1853 63.9849 21.8506 63.9849H40.3198C40.9912 63.9849 41.5283 64.6975 41.5283 65.5703C41.5283 66.4511 40.9851 67.1557 40.3198 67.1557H21.8506ZM22.4365 57.9395C21.7651 57.9395 21.228 57.2269 21.228 56.3541C21.228 55.4733 21.7712 54.7687 22.4365 54.7687H40.9058C41.5771 54.7687 42.1143 55.4813 42.1143 56.3541C42.1143 57.2349 41.571 57.9395 40.9058 57.9395H22.4365Z"
                    fill="#7D7D7D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_140_88">
                    <rect width="75" height="81" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <i>Digital-Marketing</i>
            <p>
            Digital marketing is a powerful strategy that leverages online channels to reach and engage with target audiences, driving business growth and brand awareness. It encompasses various tactics such as search engine optimization (SEO), social media marketing, content marketing, email marketing, and paid advertising. Proficiency in digital marketing involves understanding consumer behavior, conducting market research, and implementing data-driven campaigns to optimize reach, engagement, and conversions. It requires a combination of analytical thinking, creativity, and adaptability to navigate the ever-changing digital landscape. Possessing strong digital marketing skills showcases the ability to develop effective online strategies that generate measurable results and contribute to the overall success of a brand or business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
