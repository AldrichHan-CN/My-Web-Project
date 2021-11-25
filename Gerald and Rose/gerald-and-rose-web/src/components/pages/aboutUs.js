import React from 'react'
import './aboutUs.css'

function Introduction(
    {banner_intro_title, banner_intro,
    David_photo, David_alt,David_intro,
    Colan_intro, Colan_photo, Colan_alt,
    logo, logo_alt, logo_intro}
    ) {
    return (

            <>
<div className='intro-container'>

        <div className='intro-Section'>
            <div className='intro-Section-banner'>
            <h1>About Us</h1>
            <h3>{banner_intro_title}</h3>
            <p>{banner_intro}</p>
            </div>
        </div>

        <div className='intro-Section'>
        <h2>Founders</h2>
                <div className='intro-founders-info'>

                    <div className='intro-01'>

                        <img src={David_photo} alt={David_alt} className='founders_img' />

                        <h1>David</h1>
                        <p>{David_intro}</p>
                    </div>

                    <div className='intro-01'>

                        <img src={Colan_photo} alt={Colan_alt} className='founders_img' />
  
                        <h1>Colan</h1>
                        <p>{Colan_intro}</p>
                    </div>
                </div>
        </div>

        <div className='intro-Section'>
            <div className='logo-container'>
                <h2>Dude</h2>
                    <img src={logo} alt={logo_alt} className='logo' />
                    <p>{logo_intro}</p>
            </div>
        </div>
        
        <div className='intro-Section'>
                <div className='intro-value-description'>
                <h2>Our Value</h2>
                    <ul>
                        <li>Professionalism for all to see</li>
                        <li>Respecting the Client</li>
                        <li>Transparent with no surprises</li>
                        <li>Great staff leads to great service</li>
                        <li>vice leads to business success</li>
                    </ul>
                </div>
        </div>

</div>
            </>

    )
}

export default Introduction
