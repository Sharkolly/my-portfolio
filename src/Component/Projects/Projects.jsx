import React from 'react'
import './Project.css'
import calculator from '../Pictures/Calculator.png'
import crypto from '../Pictures/Crypto.png'
import ExpenseTracker from '../Pictures/Expense_tracker.png'
import Geutebruck from '../Pictures/Geutebruck.png'
import GPassword from '../Pictures/Gpassword.png'
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
                        <img src={ExpenseTracker} alt="" className='Projects' />

                        <h2 style={{ textAlign: 'center' }}>Expense Tracker</h2>
                        <p>The Expense Tracker helps individuals or users to keep track of their expenses, monitor spending patterns, and gain insights into their financial habits </p>
                        <div className="btnn">
                            <button><a href="https://github.com/Sharkolly/Expense_tracker" target='_blank'>Code</a></button>
                            <button><a href="https://expense-tracker-bice-three.vercel.app/">Live</a></button>
                        </div>
                    </div>
                    <div className="third-project">
                        <img src={Geutebruck} alt="" className='Projects' />
                        <h2 style={{ textAlign: 'center' }}>GeuteBruck Website</h2>
                        <p>A Simple Cloned Website with some added Features but replicating its design, layout, content, and functionality that closely resembles the original website </p>
                        <div className="btnn">
                            <button><a href="https://github.com/Sharkolly/geutebruck_clone" target='_blank'>Code</a></button>
                            <button><a href="https://geutebruck-clone.vercel.app/">Live</a></button>
                        </div>
                    </div>
                    <div className="fourth-project">
                        <img src={GPassword} alt="" className='Projects' />
                        <h2 style={{ textAlign: 'center' }}>Generate Password</h2>
                        <p>An app that makes the user create password then uses the password to access gallery of photos  </p>
                        <div className="btnn">
                            <button><a href="https://github.com/Sharkolly/GPassword" target='_blank'>Code</a></button>
                            <button><a href="https://generate-password-smoky.vercel.app/">Live</a></button>
                        </div>
                    </div>
                    <div className="fifth-project">
                        <img src={calculator} alt="" className='Projects' />
                        <h2 style={{ textAlign: 'center' }}>Simple Calculator App</h2>
                        <p>A simple Calculator that is designed to perform basic arithmetic calculations.It allows users to quickly and easily perform mathematical operations like addition, subtraction, multiplication, and division</p>
                        <div className="btnn">
                            <button><a href="https://github.com/Sharkolly/simple_calc" target='_blank'>Code</a></button>
                            <button><a href="https://simple-calc-mu.vercel.app/">Live</a></button>
                        </div>
                    </div>
                    <div className="sixth-project">
                        <img src={TaskLists} alt="" className='Projects' />
                        <h2 style={{ textAlign: 'center' }}>Task App</h2>
                        <p>A Task app which is designed to help users to organize, track, and manage their tasks, assignments, or activities.It helps users to create,priortize, and monitor tasks to enhance productivity and ensure timely completion of projects or personal goals </p>
                        <div className="btnn">
                            <button><a href="https://github.com/Sharkolly/Task-app" target='_blank'>Code</a></button>
                            <button><a href="#">Live</a></button>
                        </div>
                    </div>
                    <div className="seventh-project">
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