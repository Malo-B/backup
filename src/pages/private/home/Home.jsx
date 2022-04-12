import Chart from '../../../components/chart/Chart';
import FeaturedInfo from '../../../components/featuredInfo/FeaturedInfo';
import {User_Data} from "../../../data/Data_moy";
import WidgetSm from '../../../components/WidgetSm/WidgetSm';
import Widgetlg from '../../../components/Widgetlg/Widgetlg';
import { useContext } from 'react';
import { WeatherContext } from '../../../context/weatherContext';
import { TempContext } from '../../../data/Temp_réel';

import "./home.css"

export default function Home() {

  const {weather}=useContext(WeatherContext)
  const {CurrentTemp1, CurrentTemp2, CurrentTemp3, CurrentTemp4} = useContext(TempContext);

  return (
  <div>
    <div className="App">
      <div className='home'>
      {(typeof CurrentTemp1 != "undefined" ) ? (
      <FeaturedInfo info1={CurrentTemp1.temperature} unite1="°C" description1="Capteur1" info2={CurrentTemp2.temperature} unite2="°C" description2="Capteur2" info3={CurrentTemp3.temperature} unite3="°C" description3="Capteur3" info4={CurrentTemp4.water_leak} description4="Capteur4"/>
      ):('')}
          <Chart data={User_Data} title="Température dans la salle :" grid temp="Température en °C" dataKey="mois"/>
          <div className="homeWidget">
            {(typeof weather.cnt != "undefined") ? (
              <WidgetSm className="sm" Titre="Détails de la journée" city={weather.city.name} icone1={weather.list[0].weather[0].icon} icone2={weather.list[1].weather[0].icon} icone3={weather.list[2].weather[0].icon} icone4={weather.list[3].weather[0].icon} icone5={weather.list[4].weather[0].icon} Jour1={weather.list[1].dt_txt} Temperature1={Math.round(weather.list[1].main.temp)} Description1={weather.list[1].weather[0].description} Jour2={weather.list[2].dt_txt} Temperature2={Math.round(weather.list[2].main.temp)} Description2={weather.list[2].weather[0].description} Jour3={weather.list[3].dt_txt} Temperature3={Math.round(weather.list[3].main.temp)} Description3={weather.list[3].weather[0].description} Jour4={weather.list[4].dt_txt} Temperature4={Math.round(weather.list[4].main.temp)} Description4={weather.list[4].weather[0].description} Jour5={weather.list[5].dt_txt} Temperature5={Math.round(weather.list[5].main.temp)} Description5={weather.list[5].weather[0].description}/>
            ) : ('')}
            {(typeof CurrentTemp1 != "undefined" ) ? (
              <Widgetlg className="lg" Titre="Paramètres secondaires en direct" Temp1={CurrentTemp1.temperature} Temp2={CurrentTemp2.temperature} Temp3={CurrentTemp3.temperature} Temp4={CurrentTemp4.temperature} Humidite1={CurrentTemp1.humidity} Humidite2={CurrentTemp2.humidity} Humidite3={CurrentTemp3.humidity} Pression1={CurrentTemp1.pressure} Pression2={CurrentTemp2.pressure} Pression3={CurrentTemp3.pressure} Batterie1={CurrentTemp1.battery} Batterie2={CurrentTemp2.battery} Batterie3={CurrentTemp3.battery} Batterie4={CurrentTemp4.battery} fuite={CurrentTemp4.water_leak} Qx1={CurrentTemp1.linkquality} Qx2={CurrentTemp2.linkquality} Qx3={CurrentTemp3.linkquality} Qx4={CurrentTemp4.linkquality} icone1="https://www.domotique-store.fr/6079-thickbox_default/xiaomi-aqara-sonde-de-temperature-humidite-et-pression-atmospherique-zigbee-compatible-zigate-conbee2-et-homey.jpg" icone2="https://www.domotique-store.fr/6079-thickbox_default/xiaomi-aqara-sonde-de-temperature-humidite-et-pression-atmospherique-zigbee-compatible-zigate-conbee2-et-homey.jpg" icone3="https://www.domotique-store.fr/6079-thickbox_default/xiaomi-aqara-sonde-de-temperature-humidite-et-pression-atmospherique-zigbee-compatible-zigate-conbee2-et-homey.jpg" icone4="https://cdn.webshopapp.com/shops/256009/files/327373023/xiaomi-aqara-xiaomi-aqara-water-leak-sensor.jpg"/>
              ):('')}
          </div>
      </div>
    </div>
  </div>
  )
}
// 
//<Widgetlg/>