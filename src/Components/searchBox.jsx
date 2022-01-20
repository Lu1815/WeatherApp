import dateBuilder from '../utilities/dateBuilder'
import searchImg from '../img/search.svg'
import {useState} from 'react';

const api = {
    key: "53b5f9485d448b6f17f9cc0241e6f0ce",
    base: "https://api.openweathermap.org/data/2.5/"
  };

function SearchBox (){
    const [query, setQuery] = useState(''); 
    const [weather, setWeather] = useState({});
  
    const search = evt => {
      if(evt.key === "Enter"){
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result)
        });
      }
    }

    return (
        <div className="searchContainer">

            <input 
                className="searchBox" 
                type="text" 
                placeholder="Search a city"
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            ></input>

            <div className="searchBtn" >
                <img src={searchImg} alt="Search"></img>
            </div>

            {(typeof weather.main != "undefined") ? (
                <div className="weather-container"> 
                    <div className="weather_square">
                        <h1>Time in {weather.name}, {weather.sys.country}</h1>
                        <h3>{dateBuilder(new Date())}</h3>
                        <div id="division">
                            <h1>{Math.round(weather.main.temp)}°C</h1>
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
                                alt="cloudy" />
                        </div>
                        <h2>{weather.weather[0].main}</h2>
                    </div>
                </div>
            ) : (
                    <div className="weather-container">                     
                        <h1>City not found 😔</h1>
                    </div>
                )
            }

        </div>
    );
}

export default SearchBox;