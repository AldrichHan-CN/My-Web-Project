import React from 'react';
import {Button} from './button';
import  {Link} from 'react-router-dom';
import './HomePage.css';


function HomePage ({
    lightBg, topLine, lightText, lightTextDesc, headline, description,
    buttonLabel, img, alt, imgStart})
    {   
    return (
        
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
           <div className='home__service-page'>
               <div className='service-wrap'>
               <img className='service-img' alt='web_development' src='./Images/c2.jpg'/>
               <div className='service-description'>
                   <h1>Website Development, Management and Maintenance</h1>
                   <p>We create a modern digital presence through a great website. We create, manage and maintain websites. 
                    We keep it simple. Depending on where you are we can provide the right service for you.</p>
               </div>
               
               </div>
               <div className='service-wrap-mid'>
               <div className='service-description'>
               <h1>Graphic Design and Social Media</h1>
                   <p>We make things pretty, it’s as simple as that. Social Media and design do go hand in hand and we provide both. 
                    We can start from scratch or work with what you have to improve your interaction with your current and potential clients.</p>
               </div>
               <img className='service-img' alt='web_development' src='./Images/c2.jpg'/>
               </div>
              
               <div className='service-wrap'>
               <img className='service-img' alt='web_development' src='./Images/c2.jpg'/>
               <div className='service-description'>
               <h1>Marketing Advisory and Business Services</h1>
                   <p>We work with startups through to established businesses to ensure you get the bang for your buck on your marketing efforts. 
                We also provide a broad range of business services outside of marketing to support your growth. So if it's a strategy, 
                marketing plan or pulling together a new event or launch, discuss your needs with us.</p>
               </div>
               </div>
           </div>
        </div>

    )
}

export default HomePage
