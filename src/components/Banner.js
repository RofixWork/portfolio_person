import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
const Banner = () => {
    return (
        <header id='head'>
            <div className="container">
                <div className="row align-items-center " style={{height:'100vh'}}>
                    {/* col 1  */}
                    <div className="col-lg-6 col-md-10 head_content text-white">
                        {/* socialMedia */}
                        <ul className='list-unstyled d-flex header_list'>
                            <li><a href=""> <FaFacebook className='icon'/> </a></li>
                            <li><a href=""> <FaInstagram className='icon'/> </a></li>
                            <li><a href=""> <FaYoutube className='icon'/> </a></li>
                            <li><a href=""> <FaTwitter className='icon'/> </a></li>
                            <li><a href=""> <FaTwitch className='icon'/> </a></li>
                        </ul>
                        <h1 className="header_title">
                            I am Jonathan Doe
                        </h1>
                        <h4 className="header_desc">
                            i,m Jonathan, professional web developer with long time
                            experience in this field​
                        </h4>
                        <button className='btnWebsiteOne'>My Portfolio</button>
                    </div>
                    {/* col 2 */}
                    <div className="col-md-6" >
                        <div className='header_img'>
                            <img src="/images/man-01.png" className='d-none d-lg-block'  alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner
