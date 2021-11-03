import React from 'react'

function Services({bsTitle, bsSubtitle, bsBanner, bsBanneralt}) {
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
                    </div>
                    <div className='service-img'>
                    </div>
                    <div className='service-description'>
                    </div>
                </div>
                <div className='service-container-consulte'>
                <div className='service-heading'>
                    </div>
                    <div className='service-img'>
                    </div>
                    <div className='service-description'>
                    </div>
                </div>
                <div className='service-container-graphDesign'>
                <div className='service-heading'>
                    </div>
                    <div className='service-img'>
                    </div>
                    <div className='service-description'>
                    </div>
                </div>
                <div className='service-container-campaign'>
                <div className='service-heading'>
                    </div>
                    <div className='service-img'>
                    </div>
                    <div className='service-description'>
                    </div>
                </div>                
            </div>            
        </div>
    )
}

export default Services
