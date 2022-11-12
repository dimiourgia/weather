import React, { useEffect, useState } from 'react';
import api_key from '../emulateEnvironment';
import "../styles/app.css"





function App() {

    const [data, setData] =  useState([]);
   
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    


    useEffect(() => {
        const fetchLocation = async () => {
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });
        }


        fetchLocation();
      }, [lat,long])

useEffect(()=>{
    
});

    return (
        <div className="App">
           
        </div>
    );
}

export default App;
