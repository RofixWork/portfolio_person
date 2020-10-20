import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='py-sections'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div>
                            <img src="/images/logo.png" alt=""/>
                            <p className='footer_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <ul className='list-unstyled d-flex justify-content-center footer_list'>
                                <li> <a href=""> <FaFacebook/> </a> </li>
                                <li><a href=""> <FaInstagram/> </a></li>
                                <li><a href=""> <FaTwitter/> </a></li>
                                <li><a href=""> <FaYoutube/> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
