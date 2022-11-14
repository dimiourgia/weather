import React, {useState, useEffect} from "react";


const WeatherCard = ({weatherData})=>{  
    console.log("data from card "+ weatherData);  
    console.log(process.env);
    return(
        <div className='outer_wrapper'>
                        
            <div className='top_section_wrapper'>
                <div className='section1'>
                    <div className='title'>
                        <img src='https://www.clipartmax.com/png/small/234-2347009_cloud-forecast-sun-weather-icon-weather-icon.png' alt='forcaster_logo'></img>
                        FORECASTER
                    </div>
                    <div className='place'>
                        <p className='place_p'>{weatherData.name}</p>
                    </div>
                    <div className='date'>
                        <p className='date_p'>25 Jan 2019</p>
                    </div>
                    <div className="temprature_and_icon_wrpper">
                        <div className="first">   
                            <div className='temprature'>
                                <p className='temprature_p'>{weatherData.main.temp} &#8451;</p> 
                            </div>
                            <div className="feels_like">
                                <p>{`Feels Like ${weatherData.main.feels_like}`} &#8451;</p>
                            </div>
                        </div>
                        <div className="second">
                            <div id="weather_icon">
                                <img id="wicon" src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section2'>
                    section 2
                </div>
            </div>

            <div className='bottom_section'>
                <div className="timed-details"></div>
            </div>
        </div>
    );
}


export default WeatherCard;