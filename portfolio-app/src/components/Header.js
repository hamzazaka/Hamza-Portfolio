import React from 'react';
import Typical from 'react-typical'

export default function Header() {

    return (
        <>
         <div className="contain heading1 ">
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
                <a className=" " href="">PROJECTS</a>
                <a className=" " href="">RESUME</a>

                </div>
            </div>
        </div>
    </div>
     <div className="socials">
            <li><i class="fab fa-github"></i></li>
            <li><i class="fab fa-linkedin-in"></i></li>
            <li><i class="fab fa-linkedin-in"></i></li>
            <li><i class="fab fa-linkedin-in"></i></li>

        </div>
    </>

    )
}
