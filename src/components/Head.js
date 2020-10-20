import React from 'react'

const Head = props => {
    return (
        <>
            <div className="serv_head text-center">
                <span className='text-uppercase serv_department'>{props.title}</span>
                <h3 className='text-capitalize my-3 serv_title'>{props.head}</h3>
                <p className='serv_desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis architecto fugit autem labore.</p>
                <div className='border my-3'></div>
            </div>
        </>
    )
}

export default Head
