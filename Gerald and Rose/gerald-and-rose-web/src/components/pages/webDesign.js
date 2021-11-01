import React from 'react';
import './webDesign.css';


function web_Design ({
    img_development, alt_development, development_description,
    img_performance, alt_performance, web_performance_description, 
    img_maintenance, alt_maintenance, web_maintenance_description})
    { 
    return (       
           <div className='container'>
                <div className='col'>
                <div className='web__web-text-wrapper'>
                        <div className='heading'><h1>development</h1></div>
                        <div className='description-1'>{development_description}</div>
                    </div> 
                    <div className='web__web-img-wrapper'>
                        <img src={img_development} alt={alt_development} className='web__web-img'/>
                    </div>
                </div>
                <div className='col'>
                    <div className='web__web-img-wrapper'>
                        <img src={img_performance} alt={alt_performance} className='web__web-img-performance'/>
                    </div>
                    <div className='web__web-text-wrapper'>
                        <div className='heading'><h1>Web Performance</h1></div>
                        <div className='description'>{web_performance_description}</div>
                    </div> 
                </div>
                <div className='col'>
                    <div className='web__web-img-wrapper'>
                        <img src={img_maintenance} alt={alt_maintenance} className='web__web-img-maintenance'/>
                    </div>
                    <div className='web__web-text-wrapper'>
                        <div className='heading'><h1>Web maintenance</h1></div>
                        <div className='description'>{web_maintenance_description}</div>
                    </div> 
                </div>
           </div>
    )
}

export default web_Design
