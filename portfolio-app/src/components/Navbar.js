import React from 'react';
import { Link } from 'react-scroll';
import resume from '../assets/hamza-zaka-resume.pdf';

export default function Navbar() {
    
    return (
    <nav className="navbar navbar-expand-lg navbar-dark menu1 fixed-top  ">
        <Link className="navbar-brand logo" href="#"></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse navii" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 navii">
                <li className="nav-item ">
                    <Link smooth={true} to='home' offset={-110} className="nav-link" href="#"> <i class="fas fa-user"></i> Home<span className="sr-only"></span></Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to='About' offset={-110}  className="nav-link" href="#"><i class="fas fa-laptop-code"></i> About</Link>
                </li>
                <li className="nav-item mynav">
                    <Link smooth={true} to='Projects' offset={-110}  className="nav-link " href="#"><i class="fas fa-code"></i> Projects</Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to='Contact' offset={-110}  className="nav-link " href="#"><i class="fas fa-address-book"></i> Contact</Link>
                </li>
                <li className="nav-item">
                    <a rel="noreferrer noopener" className="nav-link link2 " target='_blank' href={resume}> Resume</a>
                </li>
                {/* <a className='btn btn-dang' target='_blank' href="https://drive.google.com/file/d/1TC-h-Vmehb_pEV1bFjP6HPCkp8ShbxLl/view">RESUME</a> */}
            </ul>
        </div>
    </nav>
        
    )
}
