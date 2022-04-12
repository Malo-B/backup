import { Visibility, Waves, WbCloudy, WbSunny } from '@material-ui/icons';
import React from 'react';
import "./WidgetSm.css"

export default function WidgetSm({city,Titre,Jour1,Temperature1,Description1,icone1,Jour2,Temperature2,Description2,icone2,Jour3,Temperature3,Description3,icone3,Jour4,Temperature4,Description4,icone4,Jour5,Temperature5,Description5,icone5}) {

  return (
  <div className='widgetSmall'>
      <span className="widgetSmTitle">{Titre}</span>
      <ul className="widgetSmList">
          <li className="widgetSmListItem">
          <img src={`http://openweathermap.org/img/wn/${icone1}@2x.png`} alt="" className='widgetLgImg'/>
              <span className="widgetSmTemp">{Temperature1}°C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">{Jour1}</span>
                  <span className="widgetSmUserTitle">{Description1}</span>
              </div>
              <a href={`https://marine.meteoconsult.fr/recherche-previsions-meteo?q=${city}`} target="_blank">
                <button className="widgetSmButton">
                    <Visibility className='none'/>
                    Voir plus
                </button>
                </a>
          </li>
          <li className="widgetSmListItem">
          <img src={`http://openweathermap.org/img/wn/${icone2}@2x.png`} alt="" className='widgetLgImg'/>
              <span className="widgetSmTemp">{Temperature2}°C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">{Jour2}</span>
                  <span className="widgetSmUserTitle">{Description2}</span>
              </div>
              <a href={`https://marine.meteoconsult.fr/recherche-previsions-meteo?q=${city}`} target="_blank">
                <button className="widgetSmButton">
                    <Visibility className='none'/>
                    Voir plus
                </button>
                </a>
          </li>
          <li className="widgetSmListItem">
          <img src={`http://openweathermap.org/img/wn/${icone3}@2x.png`} alt="" className='widgetLgImg'/>
              <span className="widgetSmTemp">{Temperature3}°C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">{Jour3}</span>
                  <span className="widgetSmUserTitle">{Description3}</span>
              </div>
              <a href={`https://marine.meteoconsult.fr/recherche-previsions-meteo?q=${city}`} target="_blank">
                <button className="widgetSmButton">
                    <Visibility className='none'/>
                    Voir plus
                </button>
                </a>
          </li>
          <li className="widgetSmListItem">
          <img src={`http://openweathermap.org/img/wn/${icone4}@2x.png`} alt="" className='widgetLgImg'/>
              <span className="widgetSmTemp">{Temperature4}°C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">{Jour4}</span>
                  <span className="widgetSmUserTitle">{Description4}</span>
              </div>
              <a href={`https://marine.meteoconsult.fr/recherche-previsions-meteo?q=${city}`} target="_blank">
                <button className="widgetSmButton">
                    <Visibility className='none'/>
                    Voir plus
                </button>
                </a>
          </li>
          <li className="widgetSmListItem">
          <img src={`http://openweathermap.org/img/wn/${icone5}@2x.png`} alt="" className='widgetLgImg'/>
              <span className="widgetSmTemp">{Temperature5}°C</span>   
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">{Jour5}</span>
                  <span className="widgetSmUserTitle">{Description5}</span>
              </div>
              <a href={`https://marine.meteoconsult.fr/recherche-previsions-meteo?q=${city}`} target="_blank">
                <button className="widgetSmButton">
                    <Visibility className='none'/>
                    Voir plus
                </button>
                </a>
          </li>
      </ul>
  </div>
  )
}
//