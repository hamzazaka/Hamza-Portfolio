import React from 'react'
import { Link } from 'react-scroll'
import imgme from '../assets/profile-pic.jpeg'

export default function Aboutme() {
    return (
        <div id='About' className='about-page'>
        <div className='aboutme'>
            <h1>About me</h1>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className="row ">
                <div className="col-md-6 get-to-know-me" >
                    <h2>
                    <img className='imgme' src={imgme} alt="" />
                    </h2>
                    {/* <p>I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.</p>
                    <p>I also like sharing content related to the stuff that I have learned over the years in
                     <strong> Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a className='p-linkedin' target='_blank' href="https://www.linkedin.com/in/hamzazaka/">Linkedin</a> where I post useful content related to Web Development and Programming</p>
                    <p>I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact </strong> me.</p> */}
                    <p>I found my passion in programming back in school while playing a game in summers with my brother. I wanted to edit the game to make it more difficult for my brother because he always won the game. I searched youtube on how to edit the game and that's where I found out that I can make my own games. I took some classes of JavaScript from <strong>'CS50'</strong>  and <strong>'Programming with MOSH'</strong>  in 2018 and made a simple Tic-tac-toe and showed it to my friends and family like I found a gem. Those are the best times I had learning something new. </p>
                    <p>I really like working with a team in office where I can learn, innovate and help people at the same time, building great products for the consumers</p>
                    <p>I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact </strong> me.</p>
                    <Link smooth={true} to='Contact' offset={-110} className='btn btn-contact' href=""><span></span> Contact</Link>

                </div>
                <div className="col-md-6 my-skills">
                    <h2>My Skills</h2>
                    <p href="">React</p>
                    <p href="">Redux</p>
                    <p href="">JavaScript</p>
                    <p href="">Bootstrap</p>
                    <p href="">JSON</p>
                    <p href="">REST API</p>
                    <p href="">User Interface Design</p>
                    <p href="">Material-UI</p>
                    <p href="">HTML</p>
                    <p href="">CSS</p>
                    <p href="">Postman API</p>
                    <p href="">SASS</p>
                    <p href="">Responsive Design</p>
                    <p href="">GIT</p>
                    <p href="">Github</p>
                    <p href="">Netlify</p>

                </div>
            </div>
        </div>
    )
}
