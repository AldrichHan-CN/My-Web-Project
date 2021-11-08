import React from 'react'
import './contactForm.css'

function contactForm({logo, logo_alt, title, intro}) {
    return (
        <>
            <h1>{title}</h1>
            <div className='form-container'>
            <div className='form-intro'>
                <p>{intro}</p>
                <img src={logo} alt={logo_alt} className='logo'/>
            </div>
            <div className='form'>
            </div>
            </div>
        </>
    )
}

export default contactForm
