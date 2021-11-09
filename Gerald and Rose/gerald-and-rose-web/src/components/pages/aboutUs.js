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
            <div className='bannerSection'>
            <div className='banner-aboutUs'><h1>About Us</h1></div>
            <div classname='banner-intro_title'>{banner_intro_title}</div>
            <div className='banner_intro'>{banner_intro}</div>
        </div>
        <div className='founders'>
                <div className='founders_info'>
                    <div className='David'>
                        <div className='founder-photo'>
                        <img src={David_photo} alt={David_alt} className='founders_img' />
                        <p>David</p>
                        </div>
                        <div classname='founders_intro'>{David_intro}</div>
                    </div>
                    <div className='Colan'>
                        <div classname='founders_intro'>{Colan_intro}</div>
                        <div className='founder-photo'>
                        <img src={Colan_photo} alt={Colan_alt} className='founders_img' />
                        <p>Colan</p>
                        </div>
                    </div>
                </div>
                <div className='founders_title'><h2>Founders</h2></div>
        </div>
        <div className='dude'>
                <div className='dude_title'><h2>Dude</h2></div>
                <div className='logo_info'>
                    <img src={logo} alt={logo_alt} className='logo' />
                    <div className='logo_intro'>{logo_intro}</div>
                </div>           
        </div><div className='value'>
                <div className='value_description'>
                    <ul>
                        <li>Professionalism for all to see</li>
                        <li>Respecting the Client</li>
                        <li>Transparent with no surprises</li>
                        <li>Great staff leads to great service</li>
                        <li>vice leads to business success</li>
                    </ul>
                </div>
                <div className='value_title'><h2>Our Value</h2></div>
            </div></>

    )
}

export default Introduction
