import React from 'react'

export default function Navbar() {
    
    return (
    <nav className="navbar navbar-expand-lg navbar-dark menu1 ">
        <a className="navbar-brand logo" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse navii" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 navii">
                <li className="nav-item ">
                    <a className="nav-link" href="#">Home<span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item mynav">
                    <a className="nav-link " href="#">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
        
    )
}
