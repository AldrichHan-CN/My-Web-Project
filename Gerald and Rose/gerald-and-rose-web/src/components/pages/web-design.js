import React from 'react';
import './web-design.css';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Devp ({bannerTitle, bannerSubtitle,
    development_description,web_performance_description, web_maintenance_description,
    slider_1, silder_2 ,alt_1, alt_2})
{
    return (
      
           <div className='webDesign__container'>
               <div className='webDesign__banner-container'>
               <div className='bannerContent webDesign__banner-text-wrapper'>
                   <h1>{bannerTitle}</h1>
                   <p>{bannerSubtitle}</p>
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
                <img src={slider_1} alt={alt_1} className='web__web-img'/>
                </div>
                <div>
                <img src={silder_2} alt={alt_2} className='web__web-img'/>
                </div>
            </Carousel>
                    </div>
                </div>
            <div className='webDesign__col mid'>
                    <div className='webDesign__web-img-wrapper mid'>
                    <Carousel axis='horizontal' autoPlay='true' infiniteLoop="true" showStatus='false' showIndicators='false' 
            showArrows="false" showThumbs="false" transitionTime='500'>
                <div>
                <img src={slider_1} alt={alt_1} className='web__web-img'/>
                </div>
                <div>
                <img src={silder_2} alt={alt_2} className='web__web-img'/>
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
                <img src={slider_1} alt={alt_1} className='web__web-img'/>
                </div>
                <div>
                <img src={silder_2} alt={alt_2} className='web__web-img'/>
                </div>
            </Carousel>
                    </div>
                </div>
              
           </div>

    )
}
export default Devp
