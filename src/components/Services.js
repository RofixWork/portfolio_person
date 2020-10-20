import React, {useState} from 'react'
import { FaGithub } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaCircleNotch } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFileVideo } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import Head from './Head';
const Services = () => {
    const [state] = useState([
        {
            id:1,
            title:'web development',
            text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy',
            icon:<FaGithub className='icon'/>
        },
        {
            id:2,
            title:'photography',
            text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy',
            icon:<FaCamera className='icon'/>
        },
        {
            id:3,
            title:'web design',
            text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy',
            icon:<FaCircleNotch className='icon'/>
        },
        {
            id:4,
            title:'app development',
            text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy',
            icon:<FaApple className='icon'/>
        },
        {
            id:5,
            title:'Video Editing',
            text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy',
            icon:<FaFileVideo className='icon'/>
        },
        {
            id:6,
            title:"SEO Expert",
            text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy',
            icon:<FaSearchDollar className='icon'/>
        },
    ])
    return (
        <div className='services py-sections' id='serv'>
            <div className="container">
                <Head title='services' head='my services'/>
                {/* row  */}
                <div className="row mt-5 gy-4">
                    <>
                    {state.map(box => {
                        return(
                            <div className="col-lg-4 col-md-6" key={box.id}>
                                <div className='serv_content py-3 px-4 rounded-sm'>
                                    {box.icon}
                                    <div className="serv_box mt-2">
                                        <h4 className='text-capitalize'>{box.title}</h4>
                                        <p>
                                            {box.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </>
                    
            </div>
        </div>
        </div>
    )
}

export default Services
