import React from 'react'
import './Project.css'
import calculator from '../Pictures/Calculator.png'
import crypto from '../Pictures/Crypto.png'
import ExpenseTracker from '../Pictures/Expense_tracker.png'
import Ecommerce from '../Pictures/ecommerce.png'
import Livescore from '../Pictures/livescore(2).png';
import Blog from '../Pictures/Reactjs_Blog.png'
import TaskLists from '../Pictures/Task Lists.png'
import { motion, transform } from 'framer-motion'

const Projects = () => {
    return (
        <section className='Projects' id='Project'>
            <div className="Project">

                <div className="title">
                    <h1>MY PROJECTS</h1>
                    <p>Projects I Created With My Skills</p>
                </div>

                <motion.div className="projects-lists"
                    whileInView={{ opacity: .8 }}
                    initial={{ opacity: 0 }}
                    transition={{ ease: 'linear', duration: 2.8 }}
                >
                    <div className="first-project">
                        <img src={crypto} alt="" className='Projects' />

                        <h2 style={{ textAlign: 'center' }}>Cryptocurrency App</h2>
                        <p>A cryptocurrency app that shows the current rates, price and market increase and decrease according to their Volume(24h) </p>
                        <div className="btnn">
                            <button><a href="https://github.com/Sharkolly/crypto-rates-app" target='_blank'>Code</a></button>
                            <button><a href="https://crypto-rate-app.vercel.app/">Live</a></button>
                        </div>
                    </div>
                    <div className="second-project">
                        <img src={Ecommerce} alt="Ecommerce Image" className='Projects' />
                        <h2 style={{ textAlign: 'center' }}>E-Commerce Application</h2>
                        <p>
                            A fully responsive eCommerce storefront built to offer a seamless online shopping experience. This project features a clean and modern UI, efficient navigation, and secure checkout, allowing users to browse, add items to their cart, and make purchases with ease. </p>
                        <div className="btnn">
                            <button><a href="hhttps://github.com/Sharkolly/e-commerce" target='_blank'>Code</a></button>
                            <button><a href="http://e-commerce-weld-kappa.vercel.app/">Live</a></button>
                        </div>
                    </div>
                    <div className="third-project">
                        <img src={ExpenseTracker} alt="Image" className='Projects' />

                        <h2 style={{ textAlign: 'center' }}>Expense Tracker</h2>
                        <p>The Expense Tracker helps individuals or users to keep track of their expenses, monitor spending patterns, and gain insights into their financial habits </p>
                        <div className="btnn">
                            <button><a href="https://github.com/Sharkolly/Expense_tracker" target='_blank'>Code</a></button>
                            <button><a href="https://expense-tracker-bice-three.vercel.app/">Live</a></button>
                        </div>
                    </div>
                    <div className="fourth-project">
                        <img src={Livescore} alt="Livescore Image" className='Projects' />
                        <h2 style={{ textAlign: 'center' }}>Live Sports Score App</h2>
                        <p>
                            A Football score application designed to keep users updated on their favorite games with up-to-the-minute scores and match details. Built with a sleek and intuitive interface, this app allows users to follow multiple sports and leagues effortlessly.  </p>
                        <div className="btnn">
                            <button><a href="https://github.com/Sharkolly/livescore" target='_blank'>Code</a></button>
                            <button><a href="http://livescore-tau.vercel.app/">Live</a></button>
                        </div>
                    </div>
                    <div className="fifth-project">
                        <img src={TaskLists} alt="" className='Projects' />
                        <h2 style={{ textAlign: 'center' }}>Task App</h2>
                        <p>A Task app which is designed to help users to organize, track, and manage their tasks, assignments, or activities.It helps users to create,priortize, and monitor tasks to enhance productivity and ensure timely completion of projects or personal goals </p>
                        <div className="btnn">
                            <button><a href="https://github.com/Sharkolly/Task-app" target='_blank'>Code</a></button>
                            <button><a href="#">Live</a></button>
                        </div>
                    </div>
                    
                    <div className="sixth-project">
                        <img src={Blog} alt="" className='Projects' />
                        <h2 style={{ textAlign: 'center' }}>Blog App</h2>
                        <p>The React blog app is a simple application that allows users to create and view blog posts. It provides a user-friendly interface where users can enter the title and content of their blog posts. </p>
                        <div className="btnn">
                            <button><a href="https://github.com/Sharkolly/Blog-app" target='_blank'>Code</a></button>
                            <button><a href="https://blog-app-alpha-eight.vercel.app/">Live</a></button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
