import classes from './Infobox.module.css';

function Infobox (props){
    if(props.weatherInfo === ""){
        return(
            <div className={classes.intro}>
                <h1>
                    HI THERE!<br/>
                    Find out your city's temperature.
                </h1>
            </div>
        );
    }else if(props.weatherInfo.cod === "404"){
        return(
            <div className={classes.intro}>
                <h1>
                    Unable to find the city, try it again!
                </h1>
            </div>
        );
    }else{
        return(
            <div className={classes.infobox}>
                <div className={classes.location}>
                    <p>{props.weatherInfo.name}, {props.weatherInfo.sys.country}</p>
                    <p>{props.dateInfo}</p>
                </div>

                <div className={classes.temperature}>
                    {Math.round(props.weatherInfo.main.temp - 273.15)} °C
                </div>

                <div className={classes.weather}>
                    {props.weatherInfo.weather[0].main}
                </div>
            </div>
        );
    }
}

export default Infobox;