import React from 'react';
import {Button} from './button';
import  {Link} from 'react-router-dom';
import './HomePage.css';


function HomePage ({
    lightBg, topLine, lightText, lightTextDesc, headline, description,
    buttonLabel, img, alt, imgStart,
    graph_design_title,graph_design_intro,
    website_development_title, website_development_intro,
    marketing_service_title, marketing_service_intro,
})
    {   
    return (
        <div className='home-container'>
        <div className={lightBg ? 
        'home__Home-page': 'home__home-page darkBg'}>
           <div className='container'>
            <div className='row home__home-row' style={{display:'flex',
            flexDirection: imgStart==='start' ? 'row-reverse' : 'row'}}>
                <div className='col'>
                    <div className='home__home-text-wrapper'>
                        <div className='top-line'>{topLine}</div>
                        <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                        <p className={lightTextDesc ? 'home__home-subtitle' : 'home__home-subtitle dark'}>{description}</p>
                        <Link to='/contact-us'>
                            <Button buttonSize='btn--wide' buttonColor='gold'>
                                {buttonLabel}</Button>
                        </Link>
                    </div>
                </div>
                <div className='col'>
                    <div className='home__home-img-wrapper'>
                        <img src={img} alt={alt} className='home__home-img'/>
                    </div>
                </div>
               </div>
           </div>
               <div className='service-wrap'>
               <img className='service-img' alt='web_development' src='./Images/c2.jpg'/>
               <div className='service-description'>
                   <h1>{website_development_title}</h1>
                   <p>{website_development_intro}</p>
               </div>
               
               </div>
               <div className='service-wrap'>
               <div className='service-description'>
               <h1>{graph_design_title}</h1>
                   <p>{graph_design_intro}</p>
               </div>
               <img className='service-img' alt='web_development' src='./Images/c2.jpg'/>
               </div>
              
               <div className='service-wrap'>
               <img className='service-img' alt='web_development' src='./Images/c2.jpg'/>
               <div className='service-description'>
               <h1>{marketing_service_title}</h1>
                <p>{marketing_service_intro}</p>
               </div>
               </div>
           </div>
</div>
    )
}

export default HomePage
