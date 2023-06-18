import React from 'react'
import './RaC.css'
import { motion } from 'framer-motion'

const RaC = () => {
  return (
    <section className='contact' id='Contact'>
      <div className="Contact">
        <div className="contact-title">
          <h1>Let's Work Together On <br />
            Your Next Project</h1>
          <p>I would be honoured to have the opportunity to discuss potential collaboration projects with you in more detail. I am open to exploring various avenues, whether it be a joint exhibition, a co-authored project, or any other endeavor that aligns with our creative visions</p>
        </div>
        <div className="contact-btn">
          <motion.button
            animate={{opacity: [.4,.7,1,.7,.4]}}
            // initial={{opacity: .3 }}
            transition={{ease: 'linear', duration: 2,repeat: Infinity}}
            
          ><a href="https://api.whatsapp.com/send?phone=2347035439642">CONTACT ME</a></motion.button>
        </div>
      </div>
    </section>
  )
}

export default RaC