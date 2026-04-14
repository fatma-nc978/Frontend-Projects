import React from 'react'
import './style.css/courses.css'

function Course(props) {
    const { id, title, description, price, link, image } = props.course;
    return (
        <div className='course'>
            <div className='course-inner'>
                <img src={image} width="420px" height="250p" />
                <h2 className='course-title'>{title}</h2>
                <p className='course-desc'>{description}</p>
                <h3 className='course-price'>{price} ₺</h3>
                <div className='course-a'><a href={link} className='course-a'>Satın almak için tıklayınız.</a></div>
            </div>
        </div>
    )
}

export default Course