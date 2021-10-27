import React from 'react'
import covid19 from '../assets/covid-19.png';
import bookstop from '../assets/bookstop-react.png';
import dashboardreact from '../assets/dashboard-react.png';
import portfolio from '../assets/hamza-portfolio.png';
// import pic2 from '../assets/project.png';

export default function Projects() {
    return (
        <div id='Projects' className='project-page'>
            <div className='aboutme'>
            <h1>Projects</h1>
            <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            </div>

            <div className="row">
                <div className="col-md-6 project-img">
                    <img src={covid19} alt="project" />
                </div>
                <div className="col-md-6 project-description">
                    <h1>Covid-19 Tracker</h1>
                    <p>Covid19 is a <strong>React-Js project</strong> developed in support of people suffering and affected due to Covid-19 virus all around the world. The app takes a very simple and light weight design keeping in mind proper responsiveness throughout different platforms like web and mobile responsiveness. The app lets the user track the growth of active cases in their country and provides statistics from all around the world.</p>
                     <p><strong>Technologies :</strong> React, Chart.js, React-Hooks, JavaScript, CSS, Bootstrap, Material UI</p>
                    <a target='_blank' href="https://github.com/hamzazaka/COVID-19-Tracker" className='btn btn-contact'>Github</a>
                    <a target='_blank' href="https://covid-19-my.netlify.app" className='btn btn-contact'>Live </a>
                </div>

            </div>


               <div className="row">
                <div className="col-md-6 project-img">
                    <img src={dashboardreact} alt="project" />
                </div>
                <div className="col-md-6 project-description pd-2">
                    <h1>Admin DashBoard</h1>
                    <p>Admin React Dashboard coded in <strong>React</strong>. It comes packed with a set of beautiful elements and components built by just Bootstrap, React and Chart.js. It has a fully responsive layout, multiple color schemes for both Bootstrap elements and layout components. Admin React Dashboard is powered by Bootstrap 4, Webpack and it uses create-react-app.</p>
                     <p><strong>Technologies :</strong> React, Chart.js, React-Hooks, JavaScript, CSS, Bootstrap, Material UI</p>
                    <a href="https://github.com/hamzazaka/react-dashboard" className='btn btn-contact'>Github</a>
                    <a href="https://admin-dashboardbyreact.netlify.app/" className='btn btn-contact'>Live </a>
                </div>

            </div>

            <div className="row">
                <div className="col-md-6 project-img">
                    <img src={portfolio} alt="project" />
                </div>
                <div className="col-md-6 project-description pd-2">
                    <h1>Hamza Porfolio</h1>
                    <p>Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="" className='btn btn-contact'>Github</a>
                    <a href="" className='btn btn-contact'>Live </a>
                </div>

            </div>

            <div className="row">
                <div className="col-md-6 project-img">
                    <img src={bookstop} alt="project" />
                </div>
                <div className="col-md-6 project-description pd-2">
                    <h1>Hamza Porfolio</h1>
                    <p>Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="" className='btn btn-contact'>Github</a>
                    <a href="" className='btn btn-contact'>Live </a>
                </div>

            </div>
             
        </div>
    )
}
