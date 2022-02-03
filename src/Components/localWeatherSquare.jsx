import dateBuilder from '../utilities/dateBuilder'
import useGeoLocation from '../utilities/getGeolocation'
import geoLocation from 'react-hook-geolocation' //eslint-disable-line
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
    const location = useGeoLocation(""); //MY CUSTOMIZED HOOK
    // const geo = geoLocation(); //A HOOK FROM THE COMMUNITY

    useEffect(() => {
        let isMounted = true;
        searchCurrentLocation(isMounted);
        return () => {
            isMounted = false;
        }
        // setWeather({});
    }, [location.loaded]); //eslint-disable-line

    async function searchCurrentLocation(isMounted) {
        if(isMounted){
            await fetch(`${api.base}weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {   
                setWeather(result);
                console.log(location);
            });
        } else {console.log("Component unmounted")}
    };

    return (
        <div className="weather-container" >

            {(typeof weather.name != "undefined") ?
                <div className="weather_square">
                    <h1>Time in {location.loaded ? `${weather.name},${weather.sys.country}`
                    : "Location data not available yet."}</h1>
                    <h3>{dateBuilder(new Date())}</h3>
                    <div id="division">
                        <h1>{Math.round(weather.main.temp)}C°</h1>
                        <div 
                                className={(typeof(weather.weather[0].main) != undefined) ? 
                                    ((weather.weather[0].main === "Clear") ? 
                                    'sun' :
                                    (weather.weather[0].main === "Fog" || weather.weather[0].main === "Smoke") ? 
                                    'fog' : 
                                    (weather.weather[0].main === "Snow") ?
                                    'snow' :
                                    (weather.weather[0].main === "Mist" || weather.weather[0].main === "Drizzle") ?
                                    'mist' : 
                                    (weather.weather[0].main === "Rain") ?
                                    'rain' : 'cloudy' ) :
                                    'cloudy'
                                }
                                id="icon" 
                                alt="img" />
                        </div>
                    <h2>{weather.weather[0].main}</h2>
                </div>
            : 
                <div className="weather_square">
                    <h1>There was an error. Please try again later.</h1>
                </div>
            }
            

            {/* <div className="along_day_weather_square">
                <h1>Time in Managua</h1>
                <h3>A partir de las 20:26 CST</h3>
                <h1>26°</h1>
                <h2>Nublado</h2>
                <p>2% de probabilidad de lluvia hasta las 21:00</p>
            </div> */}
        </div>
    );  
}

export default LocalWeatherSquare;