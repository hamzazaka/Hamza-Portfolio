import React from 'react'
import resume from '../assets/hamza-zaka-resume.pdf'

export default function Contact() {
    return (
        <div id='Contact' className='contact-form'>
            <div className='aboutme'>
            <h1>Contact</h1>
            <p>Feel free to Contact me, I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact </strong> me.</p>
            <p><br /></p>
            <p><strong>Send me an email at <a href="mailto:hamzazaka887@gmail.com">hamzazaka887@gmail.com</a> and ~let's talk.</strong></p>
            </div>
            
            <div className="row end">
                <div className="col-md-8 footer">
                    <h1>hamza Zaka</h1>
                    <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                </div>
                <div className="col-md-4 mysocial">
                    <h1>Social</h1>
                    <a href="https://github.com/hamzazaka"><i class="fab fa-github"></i></a>
                    <a target='_blank' href="https://www.linkedin.com/in/hamzazaka/"><i class="fab fa-linkedin-in"></i></a>
                    <a target='_blank' href="mailto: hamzabutt887@hotmail.com"><i class="fas fa-envelope"></i></a>
            <a target='_blank' href={resume}><i class="fas fa-briefcase"></i></a>
                </div>
                <div className='last1'></div>
                <div className="col-md-12 last">
                    <p>© Copyright 2021. Made by <a href=""> Hamza Zaka</a></p>
                </div>
            </div>
            

           
        </div>
    )
}
