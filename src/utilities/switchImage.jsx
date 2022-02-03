const SwitchImage = (props) => {
    return (
        <div 
            className={(typeof(props.weather[0].main) != undefined) ? 
                ((props.weather[0].main === "Clear") ? 
                'sun' :
                (props.weather[0].main === "Fog" || props.weather[0].main === "Smoke") ? 
                'fog' : 
                (props.weather[0].main === "Snow") ?
                'snow' :
                (props.weather[0].main === "Mist" || props.weather[0].main === "Drizzle") ?
                'mist' : 
                (props.weather[0].main === "Rain") ?
                'rain' : 'cloudy' ) :
                'cloudy'
            }
            id="icon" 
            alt="img" 
        />
    );
};

export default SwitchImage;