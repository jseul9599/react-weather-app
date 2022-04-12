import Searchbox from "./components/Searchbox";
import Infobox from "./components/Infobox";

import { useState } from 'react';


function App() {
  const weatherApi = {
    key: "82547f8edbf31ffcd68942ee159704fe",
    base: "https://api.openweathermap.org/data/2.5/"
  };

  const [cityName, setCityName] = useState('');
  const [weatherInfo, setWeatherInfo] = useState('');
  const [bgName, setBgName] = useState('app');

  function generateDate(date){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let tYear = date.getFullYear();
    let tMonth = months[date.getMonth()];
    let tDate = date.getDate();
    let tDay = days[date.getDay()];

    return `${tDay} ${tDate} ${tMonth} ${tYear}`
  }

  function typeCity(e){
    setCityName(e.target.value);
  }

  function searchCity(e){
    if(e.key === "Enter"){
      fetch(`${weatherApi.base}weather?q=${cityName}&appid=${weatherApi.key}`)
      .then(response => response.json())
      .then(result => {
        //console.log(result)
        setWeatherInfo(result);
        setCityName('');

        if((result.main.temp - 273.15) >= 10){
          setBgName("app warm");
        }else{
          setBgName("app cold");
        }
      })
      .catch(error => setBgName("app"))
    }
  }

  return (
    <div className={bgName}>
      <main>
        <Searchbox onChange={typeCity} onKeyPress={searchCity} inputValue={cityName} />
        <Infobox weatherInfo={weatherInfo} dateInfo={generateDate(new Date())} />
      </main>
    </div>
  );
}

export default App;
