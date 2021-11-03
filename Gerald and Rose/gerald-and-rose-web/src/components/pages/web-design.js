import React from 'react';
import './web-design.css';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Devp ({development_description,web_performance_description, web_maintenance_description})
{
    return (
      
           <div className='webDesign__container'>
               <div className='webDesign__banner-container'>
               <div className='bannerContent webDesign__banner-text-wrapper'>
                   <h1>Website Development, Management and Maintenance</h1>
                   <p>We create a modern digital presence through a great website. 
                       We create, manage and maintain websites. We keep it simple. 
                       Depending on where you are we can provide the right service for you.</p>
               </div>
               </div>
            <div className='webDesign__col'>
                <div className='webDesign__web-text-wrapper'>
                        <div className='heading'><h1>Development</h1></div>
                        <div className='description'>{development_description}</div>
                    </div> 
                    <div className='webDesign__web-img-wrapper'>
            <Carousel axis='horizontal' autoPlay='true' infiniteLoop="true" showStatus='false' showIndicators='false' 
            showArrows="false" showThumbs="false" transitionTime='500'>
                <div>
                <img src='Images/backgroundImage/webBG.jpg' alt='bg-2' className='web__web-img'/>
                </div>
                <div>
                <img src='Images/backgroundImage/business.jpg'alt='bg-3' className='web__web-img'/>
                </div>
            </Carousel>
                    </div>
                </div>
            <div className='webDesign__col mid'>
                    <div className='webDesign__web-img-wrapper mid'>
                    <Carousel axis='horizontal' autoPlay='true' infiniteLoop="true" showStatus='false' showIndicators='false' 
            showArrows="false" showThumbs="false" transitionTime='500'>
                <div>
                <img src='Images/backgroundImage/webBG.jpg' alt='bg-2' className='web__web-img'/>
                </div>
                <div>
                <img src='Images/backgroundImage/business.jpg'alt='bg-3' className='web__web-img'/>
                </div>
                    </Carousel>
                    </div>
                    <div className='webDesign__web-text-wrapper mid'>
                        <div className='heading'><h1>Web Performance</h1></div>
                        <div className='description'>{web_performance_description}</div>
                    </div> 
                </div>
            <div className='webDesign__col'>
                    <div className='webDesign__web-text-wrapper'>
                        <div className='heading'><h1>Website maintenance</h1></div>
                        <div className='description'>{web_maintenance_description}</div>
                    </div> 
                    <div className='webDesign__web-img-wrapper'>
                    <Carousel axis='horizontal' autoPlay='true' infiniteLoop="true" showStatus='false' showIndicators='false' 
            showArrows="false" showThumbs="false" transitionTime='500'>
                <div>
                <img src='Images/backgroundImage/webBG.jpg' alt='bg-2' className='web__web-img'/>
                </div>
                <div>
                <img src='Images/backgroundImage/business.jpg'alt='bg-3' className='web__web-img'/>
                </div>
            </Carousel>
                    </div>
                </div>
              
           </div>

    )
}
export default Devp
