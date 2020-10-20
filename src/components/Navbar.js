import React from 'react'
import {Link} from 'react-scroll'
const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="/images/logo.png" alt=""/>
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" activeClass='active' to="head" spy={true} smooth={true} offset={0} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClass='active' to="serv" spy={true} smooth={true} offset={0} duration={500}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClass='active' to="about" spy={true} smooth={true} offset={0} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClass='active' to="work" spy={true} smooth={true} offset={0} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClass='active' to="price" spy={true} smooth={true} offset={0} duration={500}>
                            Price
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClass='active' to="blog" spy={true} smooth={true} offset={0} duration={500}>
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClass='active' to="contact" spy={true} smooth={true} offset={0} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
