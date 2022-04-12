import React, {useState, useContext} from "react";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import Widgetlg2 from '../../components/Widgetlg2/Widgetlg2';
import { WeatherContext } from "../../context/weatherContext";

import "./weather.css"
import { UserContext } from "../../context/userContext";

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}


export default function Weather() {
  const {weather, setWeather, value, setValue} = useContext(WeatherContext)
  const temp_max=0;

  const search = evt => {   //Fonction dans le cas où l'utilisateur à cliqué 
    if (evt.key === "Enter") {
      fetch(`${api.base}forecast?q=${value}&units=metric&lang=fr&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setValue('');
          console.log(result);
        });
    }
  }

  

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="flex">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setValue(e.target.value)}
            value={value}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.cnt != "undefined") ? (
                <div>
                    <div className="location-box">
                        <div className="location">{weather.city.name}, {weather.city.country}</div>
                        <div className="date">{dateBuilder(new Date())}, {weather.list[0].dt_txt}</div>
                    </div>
                    <div className="weather-box">
                    <div className="weather">Description : {weather.list[0].weather[0].description}</div>
                        <FeaturedInfo info1={Math.round(weather.list[0].main.temp)} unite1="°C" description1="Température" info2={weather.list[0].main.humidity} unite2="%" description2="Humidité" info3={weather.list[0].main.pressure} unite3="Pa" description3="Pression" info4={Math.round(weather.list[0].wind.speed)} unite4="km/h" description4="Vent"/>
                        <div className="weatherWidget">
                        <WidgetSm Titre="Détails de la journée" city={weather.city.name} icone1={weather.list[0].weather[0].icon} icone2={weather.list[1].weather[0].icon} icone3={weather.list[2].weather[0].icon} icone4={weather.list[3].weather[0].icon} icone5={weather.list[4].weather[0].icon} Jour1={weather.list[1].dt_txt} Temperature1={Math.round(weather.list[1].main.temp)} Description1={weather.list[1].weather[0].description} Jour2={weather.list[2].dt_txt} Temperature2={Math.round(weather.list[2].main.temp)} Description2={weather.list[2].weather[0].description} Jour3={weather.list[3].dt_txt} Temperature3={Math.round(weather.list[3].main.temp)} Description3={weather.list[3].weather[0].description} Jour4={weather.list[4].dt_txt} Temperature4={Math.round(weather.list[4].main.temp)} Description4={weather.list[4].weather[0].description} Jour5={weather.list[5].dt_txt} Temperature5={Math.round(weather.list[5].main.temp)} Description5={weather.list[5].weather[0].description}/>
                            <Widgetlg2 Titre="Prévision météo" icone1={weather.list[7].weather[0].icon} icone2={weather.list[15].weather[0].icon} icone3={weather.list[23].weather[0].icon} icone4={weather.list[31].weather[0].icon} icone5={weather.list[39].weather[0].icon} Date1={weather.list[7].dt_txt} Date2={weather.list[15].dt_txt} Date3={weather.list[23].dt_txt} Date4={weather.list[31].dt_txt} Date5={weather.list[39].dt_txt} Temp1={Math.round(weather.list[7].main.temp)} Temp2={Math.round(weather.list[15].main.temp)} Temp3={Math.round(weather.list[23].main.temp)} Temp4={Math.round(weather.list[31].main.temp)} Temp5={Math.round(weather.list[39].main.temp)} Desc1={weather.list[7].weather[0].description} Desc2={weather.list[15].weather[0].description} Desc3={weather.list[23].weather[0].description} Desc4={weather.list[31].weather[0].description} Desc5={weather.list[39].weather[0].description}/>
                        </div>
                    </div>
                </div>
                ) : ('')}
      </main>
    </div>
  );
}


