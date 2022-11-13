import React, {useState, useEffect} from "react";


const WeatherCard = ({weatherData})=>{    
    return(
        <div className='outer_wrapper'>
                        
            <div className='top_section_wrapper'>
                <div className='section1'>
                    <div className='title'>
                        <img src='' alt='forcaster_logo'></img>
                        FORECASTER
                    </div>
                <div className='place'>
                    <p className='place_p'>{weatherData.name}</p>
                </div>
                <div className='date'>
                    <p className='date_p'>{}</p>
                </div>
                </div>
                <div className='temprature'>
                <p className='temprature_p'>{weatherData.main.temp}</p> 
                </div>
                <div className='section2'>
                    section 2
                </div>
            </div>

            <div className='bottom_section'>
            </div>
        </div>
    );
}


export default WeatherCard;