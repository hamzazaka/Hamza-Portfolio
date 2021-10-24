import React from 'react'
import { Link } from 'react-scroll'

export default function Aboutme() {
    return (
        <div id='About' className='about-page'>
        <div className='aboutme'>
            <h1>About me</h1>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className="row ">
                <div className="col-md-6 get-to-know-me" >
                    <h2>Get to know me</h2>
                    <p>I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.</p>
                    <p>I also like sharing content related to the stuff that I have learned over the years in
                     <strong> Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a className='p-linkedin' href="">Linkedin</a> where I post useful content related to Web Development and Programming</p>
                    <p>I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact </strong> me.</p>
                    <Link smooth={true} to='Contact' offset={-110} className='btn btn-contact' href=""><span></span> Contact</Link>

                </div>
                <div className="col-md-6 my-skills">
                    <h2>My Skills</h2>
                    <p href="">HTML</p>
                    <p href="">CSS</p>
                    <p href="">Javascript</p>
                    <p href="">React</p>
                    <p href="">SASS</p>
                    <p href="">Responsive Design</p>
                    <p href="">GIT</p>
                    <p href="">Github</p>
                </div>
            </div>
        </div>
    )
}
