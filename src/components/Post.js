import React from 'react'
import Head from './Head'
import { FaUserAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";



const Post = () => {
    return (
        <div className='post py-sections' id='blog'>
            <div className="container">
                <Head title='LATEST POST' head='Latest blog'/>
                <div className="row mt-3 gy-3">
                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <img src="/images/post/img1.jpg" className='card-img-top' alt=""/>
                            <div className="card-body">
                                <ul className='list-unstyled d-flex align-items-center'>
                                    <li className='text-capitalize'><FaUserAlt className='mr-1 icon'/> by <span style={{color:"#ff5c59"}}>admin</span></li>
                                    <li> <FaRegCalendarAlt className='ml-2 icon'/> Tuesday </li>
                                    <li> <FaRegComments className='ml-2 icon'/>  3 </li>
                                </ul>
                                <h5 className="card-title">Ten Secrets You Will Not Want To Know</h5>
                                <a href="#" className="card-link text-decoration-none ">Read More <FaRegArrowAltCircleRight className='ml-1 icon-link'/></a>
                                
                            </div>
                        </div>                  
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <img src="/images/post/img2.jpg" className='card-img-top' alt=""/>
                            <div className="card-body">
                                <ul className='list-unstyled d-flex align-items-center'>
                                    <li className='text-capitalize'><FaUserAlt className='mr-1 icon'/> by <span style={{color:"#ff5c59"}}>admin</span></li>
                                    <li> <FaRegCalendarAlt className='ml-2 icon'/> Wednesday </li>
                                    <li> <FaRegComments className='ml-2 icon'/>  3 </li>
                                </ul>
                                <h5 className="card-title">You’ve gotta dance like there’s nobody watching</h5>
                                <a href="#" className="card-link text-decoration-none ">Read More <FaRegArrowAltCircleRight className='ml-1 icon-link'/></a>
                                
                            </div>
                        </div>                  
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <img src="/images/post/img3.jpg" className='card-img-top' alt=""/>
                            <div className="card-body">
                                <ul className='list-unstyled d-flex align-items-center'>
                                    <li className='text-capitalize'><FaUserAlt className='mr-1 icon'/> by <span style={{color:"#ff5c59"}}>admin</span></li>
                                    <li> <FaRegCalendarAlt className='ml-2 icon'/> Saturday </li>
                                    <li> <FaRegComments className='ml-2 icon'/>  3 </li>
                                </ul>
                                <h5 className="card-title">I must explain to you how all this mistaken idea</h5>
                                <a href="#" className="card-link text-decoration-none ">Read More <FaRegArrowAltCircleRight className='ml-1 icon-link'/></a>
                                
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
