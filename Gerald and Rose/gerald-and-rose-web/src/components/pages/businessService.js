import React from 'react'

function Services({
    bsTitle, bsSubtitle,bsBanner, bsBanneralt, 
    mkt_img,mkt_alt, mkt_description,
    con_img,con_alt,con_description,
    gd_img,gd_alt, gd_description,
    com_img,com_alt,com_description}) 
    {
    return (
        <div className='bs-container'>
            <div className='bs-banner-container'>
                <div className='bs-banner-title'>
                    <h1>{bsTitle}</h1>
                </div>
                <div className='bs-banner-subtitle'>
                    <p>{bsSubtitle}</p>
                </div>
                <div className='bs-banner-logo'>
                    <img src={bsBanner} alt={bsBanneralt} />
                </div>
            </div>
            <div className='service-container'>
                <div className='service-container-marketing'>
                    <div className='service-heading'>
                        <h2>Marketing Advisory</h2>
                    </div>
                    <div className='service-img'>
                    <img src={mkt_img} alt={mkt_alt} />
                    </div>
                    <div className='service-description'>
                    <p>{mkt_description}</p>
                    </div>
                </div>
                <div className='service-container-consulte'>
                <div className='service-heading'>
                <h2>Business Consultancy</h2>
                    </div>
                    <div className='service-img'>
                        <img src={con_img} alt={con_alt} />
                    </div>
                    <div className='service-description'>
                    <p>{con_description}</p>
                    </div>
                </div>
                <div className='service-container-graphDesign'>
                <div className='service-heading'>
                <h2>Graph Design</h2>
                    </div>
                    <div className='service-img'>
                    <img src={gd_img} alt={gd_alt} />
                    </div>
                    <div className='service-description'>
                    <p>{gd_description}</p>
                    </div>
                </div>
                <div className='service-container-campaign'>
                <div className='service-heading'>
                <h2>Compaign Management</h2>
                    </div>
                    <div className='service-img'>
                    <img src={com_img} alt={com_alt} />
                    </div>
                    <div className='service-description'>
                        <p>{com_description}</p>
                    </div>
                </div>                
            </div>            
        </div>
    )
}

export default Services
