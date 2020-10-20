import React from 'react'
import Head from './Head'

const Contact = () => {
    return (
        <div className='contact py-sections' id='contact'>
            <div className="container">
                <Head title='HAVE ANY QUERY?' head='Contact Me' />
                <form className='mt-5'>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <input type="text" placeholder='Your Name' className='form-control shadow-none' />
                        </div>
                        <div className="col-md-6 mt-3 mt-md-0">
                            <input type="email" placeholder='Your Email' className='form-control shadow-none' />
                        </div>
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Your Subject' className='form-control shadow-none' />
                    </div>
                    <div className="mb-3">
                        <textarea type="text" placeholder='Your Messsage' rows='5' className='form-control shadow-none' ></textarea>
                    </div>

                    <button type='submit' className='btnWebsiteThree'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
