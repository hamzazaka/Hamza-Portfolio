import React from 'react'
import pic from '../assets/mobileandlaptop.png';
import covid from '../assets/covid19.png';

export default function Projects() {
    return (
        <div id='Projects' className='project-page'>
            <div className='aboutme'>
            <h1>Projects</h1>
            <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            </div>

            <div className="row">
                <div className="col-md-6 project-img">
                    <img src={covid} alt="project" />
                </div>
                <div className="col-md-6 project-description">
                    <h1>Covid-19 Tracker</h1>
                    <p>Yubter is a platform that I created where people can join the community of their favorite youtube channels and can be part of the conversation. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="" className='btn btn-contact'>Github</a>
                    <a href="" className='btn btn-contact'>Live </a>

                </div>

            </div>


               <div className="row">
                <div className="col-md-6 project-img">
                    <img src={covid} alt="project" />
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
