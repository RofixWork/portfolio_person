import React from 'react'
import Head from './Head'

const Price = () => {
    return (
        <div className='price py-sections' id='price'>
            <div className="container">
                <Head title='CHOOSE A PLAN' head='Pricing Plan' />
                <div className="row mt-5 gy-3">
                    <div className="col-lg-4 col-md-6">
                        <div className='price_content text-center p-3'>
                            <h3 className='text-capitalize price_title'>basic</h3>
                            <h2 className='price_dollar'>50<small>/$</small></h2>
                            <ul className='list-unstyled price_list'>
                                <li>5GB Storage Space</li>
                                <li>20GB Monthly Bandwidth</li>
                                <li>My SQL Databases</li>
                                <li>100 Email Account</li>
                                <li>10 Free Domain Names</li>
                            </ul>
                            <button className='btnWebsiteTwo mt-2'>Purchase</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className='price_content text-center p-3 two'>
                            <h3 className='text-capitalize price_title'>Standard</h3>
                            <h2 className='price_dollar'>80<small>/$</small></h2>
                            <ul className='list-unstyled price_list'>
                                <li>5GB Storage Space</li>
                                <li>20GB Monthly Bandwidth</li>
                                <li>My SQL Databases</li>
                                <li>100 Email Account</li>
                                <li>10 Free Domain Names</li>
                            </ul>
                            <button className='btnWebsiteThree mt-2'>Purchase</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className='price_content text-center p-3'>
                            <h3 className='text-capitalize price_title'>Premium</h3>
                            <h2 className='price_dollar'>160<small>/$</small></h2>
                            <ul className='list-unstyled price_list'>
                                <li>5GB Storage Space</li>
                                <li>20GB Monthly Bandwidth</li>
                                <li>My SQL Databases</li>
                                <li>100 Email Account</li>
                                <li>10 Free Domain Names</li>
                            </ul>
                            <button className='btnWebsiteTwo mt-2'>Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price
