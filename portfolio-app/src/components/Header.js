import React from 'react';
import Typical from 'react-typical';
import { Link } from 'react-scroll';

export default function Header() {

    return (
        <>
         <div id='home' className="contain heading1 ">
        <div className="row">
            <div className="col-md-8 mx-auto hh">
                <h1>Hey, I'm 
    <span className='lasth'>
        {' '}
      <Typical
      loop={Infinity}
      wrapper ='b'
      steps={[
          'Hamza Zaka 👋',
          500,
          'a Web Developer ',
          1000,
          'a Software Engineer',
          1000,]}/> 
    </span> </h1>
                <h2>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
      </h2>
                <div className="hello1">
                <Link smooth={true} to='Projects' offset={-110}><span></span><i class="fas fa-code"> </i> PROJECTS</Link>
                <a target='_blank' href='https://github.com/hamzazaka'><span></span> <i class="fab fa-github mygit"> </i>  GITHUB</a>
                </div>
            </div>
        </div>
    </div>

        <div className="scroll-mouse"></div>
    </>

    )
}
