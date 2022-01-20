import dateBuilder from '../utilities/dateBuilder'
import useGeoLocation from '../utilities/getGeolocation'
import { useState, useEffect } from 'react'

if (navigator.geolocation) { //check if geolocation is available
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);
    });   
}

const api = {
    key: "53b5f9485d448b6f17f9cc0241e6f0ce",
    base: "https://api.openweathermap.org/data/2.5/"
};

function LocalWeatherSquare(){
    const [weather, setWeather] = useState({});
    const location = useGeoLocation();

    useEffect(() => {
        searchCurrentLocation();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps  

    async function searchCurrentLocation() {
        const res = await fetch(
            `${api.base}weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=${api.key}`
        );
        const json = await res.json();
        setWeather(json);
        console.log(weather);
    };

    return (
        <div className="weather-container" >
            <div className="weather_square">
                <h1>Time in {location.loaded ? `${weather.name},${weather.sys.country}`
                : "Location data not available yet."}</h1>
                <h3>{dateBuilder(new Date())}</h3>
                <div id="division">
                    <h1>{Math.round(weather.main.temp)}C°</h1>
                    {/* <img id="icon" src={cloudy} alt="cloudy" /> */}
                </div>
                <h2>{weather.weather[0].main}</h2>
                {/* <p>{city.coords.latitude}</p> */}
            </div>

            <div className="along_day_weather_square">
                <h1>Time in Managua</h1>
                <h3>A partir de las 20:26 CST</h3>
                <h1>26°</h1>
                <h2>Nublado</h2>
                <p>2% de probabilidad de lluvia hasta las 21:00</p>
            </div>
        </div>
    );  
}

export default LocalWeatherSquare;