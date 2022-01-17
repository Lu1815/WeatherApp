import cloudy from '../img/cloudy.png'
import useGeoLocation from '../utilities/getGeolocation'
import { useState } from 'react'

if (navigator.geolocation) { //check if geolocation is available
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);
    });   
}

function LocalWeatherSquare(){
    // const [city, setCity] = useState({});
    const location = useGeoLocation();

    // const geoApi = {
    //     base: "http://maps.googleapis.com/maps/api/geocode/",
    //     latlng: {
    //         lat: location.coordinates.lat,
    //         lng: location.coordinates.lng,
    //     }
    // }

    // const searchCurrentLocation = () => {
    //     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    //     .then(res => res.json())
    //     .then(result => {
    //         setWeather(result);
    //         setQuery('');
    //         console.log(result)
    //     });
    // };

    return (
        //TO USE THE searchCurrentLocation FUNCTION IN THE DIV, USE THE onLoaded ACTION EVENT
        <div className="weather-container">
            <div className="weather_square">
                <h1>Time in {location.loaded ? location.coordinates.lat + "," + location.coordinates.lng
                : "Location data not available yet."}</h1>
                <h3>A partir de las 20:26 CST</h3>
                <div id="division">
                    <h1>26°</h1>
                    <img id="icon" src={cloudy} alt="cloudy" />
                </div>
                <h2>Nublado</h2>
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