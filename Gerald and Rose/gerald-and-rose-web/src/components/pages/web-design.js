import React from 'react';
import './web-design.css';


function Devp ({
    img_development, alt_development, development_description,
    img_performance, alt_performance, web_performance_description, 
    img_maintenance, alt_maintenance, web_maintenance_description})
{
    return (
      
           <div className='webDesign__container'>
               <div className='webDesign__banner-container'>
               <div className='webDesign__banner-text-wrapper'>
                   <h1>Website Development, Management and Maintenance</h1>
                   <p>We create a modern digital presence through a great website. 
                       We create, manage and maintain websites. We keep it simple. 
                       Depending on where you are we can provide the right service for you.</p>
               </div>
               </div>
            <div className='webDesign__col'>
                <div className='webDesign__web-text-wrapper'>
                        <div className='heading'><h1>development</h1></div>
                        <div className='description-1'>{development_description}</div>
                    </div> 
                    <div className='webDesign__web-img-wrapper'>
                        <img src={img_development} alt={alt_development} className='web__web-img'/>
                    </div>
                </div>
            <div className='webDesign__col'>
                    <div className='webDesign__web-img-wrapper'>
                        <img src={img_performance} alt={alt_performance} className='web__web-img-performance'/>
                    </div>
                    <div className='webDesign__web-text-wrapper'>
                        <div className='heading'><h1>Web Performance</h1></div>
                        <div className='description'>{web_performance_description}</div>
                    </div> 
                </div>
            <div className='webDesign__col'>
                    <div className='webDesign__web-img-wrapper'>
                        <img src={img_maintenance} alt={alt_maintenance} className='web__web-img-maintenance'/>
                    </div>
                    <div className='webDesign__web-text-wrapper'>
                        <div className='heading'><h1>Website maintenance</h1></div>
                        <div className='description'>{web_maintenance_description}</div>
                    </div> 
                </div>
              
           </div>

    )
}
export default Devp
