import React from 'react'
import Head from './Head'

const Work = () => {
    return (
        <div className='work py-sections' id='work'>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-md-6">
                        <div className="serv_head ">
                            <span className='text-uppercase serv_department'>I,M EXPERT ON</span>
                            <h3 className='text-capitalize my-3 serv_title'>Let,s Work Together</h3>
                            <p className='work-desc mb-4'>Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                            <button className='btnWebsiteTwo'>Hire Me Now</button>
                        </div>
                    </div>
                    {/* col2  */}
                    <div className="col-md-6 d-flex flex-column justify-content-between">
                        <div className='work-lang mb-4 mb-md-0'>
                            <p className='mb-1 '>Node Js</p>
                            <div className="progress" style={{height: '8px'}}>
                                <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='work-lang mb-4 mb-md-0'>
                            <p className='mb-1 '>Python</p>
                            <div className="progress" style={{height: '8px'}}>
                                <div className="progress-bar" role="progressbar" style={{width: '81%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='work-lang mb-4 mb-md-0'>
                            <p className='mb-1 '>Laravel</p>
                            <div className="progress" style={{height: '8px'}}>
                                <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='work-lang'>
                            <p className='mb-1 '>SEO</p>
                            <div className="progress" style={{height: '8px'}}>
                                <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
