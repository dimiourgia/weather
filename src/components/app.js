import React, { useEffect, useState } from 'react';
import api_key from '../emulateEnvironment';
import WeatherCard from './weatherCard/WeatherCard';
import "../styles/app.css"





function App() {

    const [data, setData] =  useState([]);
    const [city, setCity] = useState('Mumbai');
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
      console.log('from gecode api');

        const fetchLocation = async () => {
          await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api_key}`)
          .then(res=> res.json())
          .then(result=>{
            console.log(result[0].lat);
            setLat(result[0].lat);
            setLong(result[0].lon);
          })
        }
       fetchLocation();
      }, [city])


useEffect(()=>{
  console.log('from weather api');

  const fetchWeatherData = async ()=>{
    console.log('weather data requested');
    await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${api_key}`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log(result);
      setLoaded(true);
    })
  }

  if(lat!==""&&long!=="") fetchWeatherData();
}, [lat,long]);


    return (
        <div className="App">
        {loaded && <WeatherCard weatherData={data}></WeatherCard> }
        </div>
    );
}

export default App;
