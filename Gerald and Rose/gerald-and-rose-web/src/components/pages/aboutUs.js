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
            <h4>{banner_intro}</h4>
            </div>
        </div>

        <div className='intro-Section'>
                <div className='intro-founders-info'>
                <h2>Founders</h2>
                    <div className='intro-David'>
                        <div className='intro-founder-photo'>
                        <img src={David_photo} alt={David_alt} className='founders_img' />
                        <p>David</p>
                        </div>
                        <div classname='intro-founders-intro'>{David_intro}</div>
                    </div>
                    <div className='intro-Colan'>
                        <div classname='intro-founders-intro'>{Colan_intro}</div>
                        <div className='intro-founder-photo'>
                        <img src={Colan_photo} alt={Colan_alt} className='founders_img' />
                        <p>Colan</p>
                        </div>
                    </div>
                </div>
        </div>

        <div className='intro-Section'>
                <div className='intro-dude-title'><h2>Dude</h2></div>
                <div className='intro-logo-info'>
                    <img src={logo} alt={logo_alt} className='logo' />
                    <div className='intro-logo-intro'>{logo_intro}</div>
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
