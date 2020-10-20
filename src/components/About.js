import React, {useState} from 'react'
import Head from './Head'

const About = () => {
    const [infos] = useState([
        {
            id:1,
            prop:'name',
            information:'Jonathan Doe',
        },
        {
            id:2,
            prop:'email',
            information:'example@domain.com',
        },
        {
            id:3,
            prop:'phone',
            information:'+1234567890',
        },
        {
            id:4,
            prop:'instagram',
            information:'JonathanDoe-123',
        },
    ])
    return (
        <div className='about py-sections' id='about'>
            <div className="container">
                <Head title='about' head='about me'/>

                <div className="row mt-3">
                    <div className="col-lg-5 col-md-12">
                        <div className='text-center text-lg-left '>
                            <img src="/images/man-02.png" alt="man 2"/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 p-3 py-5">
                        <div className="about-content">
                            <h3 className='about-title'>hi there</h3>
                            <p className='about-desc'>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
                            <p className='about-desc'>nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit</p>
                            <div className="row mt-3 gy-3">
                                {infos.map(info => {
                                    return (
                                        <div className="col-md-6" key={info.id}>
                                            <div className='info'>
                                                <h5>{info.prop}</h5>
                                                <span>{info.information}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
