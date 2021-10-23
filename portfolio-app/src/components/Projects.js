import React from 'react'
import pic from '../assets/mobileandlaptop.png';

export default function Projects() {
    return (
        <div className='project-page'>
            <div className='aboutme'>
            <h1>Projects</h1>
            <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            </div>

            <div className="row">
                <div className="col-md-6 project-img">
                    <img src={pic} alt="project" />
                </div>
                <div className="col-md-6 project-description">
                    <h1>hello app</h1>
                    <p>This is a great app </p>
                    <a href="">button</a>
                </div>
            </div>
             <div className="row">
                <div className="col-md-6 project-description">
                    <h1>hello app</h1>
                    <p>This is a great app </p>
                    <a href="">button</a>
                </div>
                <div className="col-md-6 project-img">
                    <img src={pic} alt="project" />
                </div>
            </div>
        </div>
    )
}
