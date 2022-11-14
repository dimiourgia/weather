import React, { useEffect, useState } from 'react';
import api_key from '../emulateEnvironment';
import WeatherCard from './weatherCard/WeatherCard';
import "../styles/app.css"





function App() {

    const [data, setData] =  useState([]);
   
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [loaded, setLoaded] = useState(false);
    




    useEffect(() => {
      console.log(process.env);
      
        const fetchLocation = async () => {
          await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=delhi&appid=${api_key}`)
          .then(res=> res.json())
          .then(result=>{
            console.log(result);
            setLat(result.lat);
            setLong(result.lon);
          })
          await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=28.6517178&lon=77.2219388&units=metric&APPID=${api_key}`)
          .then(res => res.json())
          .then(result => {
            setData(result)
            console.log(result);
            setLoaded(true);
          });
        }

       fetchLocation();
      }, [])

useEffect(()=>{
    
});

    return (
        <div className="App">
        {loaded && <WeatherCard weatherData={data}></WeatherCard> }
        </div>
    );
}

export default App;
