import React from 'react';
import "./Widgetlg2.css"

export default function Widgetlg({Titre, Date1,Date2,Date3,Date4, Date5, Temp1,Temp2,Temp3,Temp4,Temp5,Desc1,Desc2,Desc3,Desc4,Desc5,icone1,icone2,icone3,icone4,icone5}) {

const Button=({type})=>{
  return <button className={"widgetLgButton"+type }>{type}</button>
}

  return (
  <div className='widgetLg'>
    <h3 className="widgetLgTitle">{Titre}</h3>
    <table className="widgetLgTable">
      <tr className="widgetLgTr">
        <th className="widgetLgTh">Détails</th>
        <th className="widgetLgTh">Date</th>
        <th className="widgetLgTh"></th>
        <th className="widgetLgTh">Température</th>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src={`http://openweathermap.org/img/wn/${icone1}@2x.png`} alt="" className='widgetLgImg'/>
          <span className="widgetLgName">{Desc1}</span>
        </td>
        <td className="widgetLgDate">{Date1}</td>
        <td className="widgetLgAmount"></td>
        <td className="widgetLgStatus">{Temp1}°C</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
        <img src={`http://openweathermap.org/img/wn/${icone2}@2x.png`} alt="" className='widgetLgImg'/>
          <span className="widgetLgName">{Desc2}</span>
        </td>
        <td className="widgetLgDate">{Date2}</td>
        <td className="widgetLgAmount"></td>
        <td className="widgetLgStatus">{Temp2}°C</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
        <img src={`http://openweathermap.org/img/wn/${icone3}@2x.png`} alt="" className='widgetLgImg'/>
          <span className="widgetLgName">{Desc3}</span>
        </td>
        <td className="widgetLgDate">{Date3}</td>
        <td className="widgetLgAmount"></td>
        <td className="widgetLgStatus">{Temp3}°C</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
        <img src={`http://openweathermap.org/img/wn/${icone4}@2x.png`} alt="" className='widgetLgImg'/>
          <span className="widgetLgName">{Desc4}</span>
        </td>
        <td className="widgetLgDate">{Date4}</td>
        <td className="widgetLgAmount"></td>
        <td className="widgetLgStatus">{Temp4}°C</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
        <img src={`http://openweathermap.org/img/wn/${icone5}@2x.png`} alt="" className='widgetLgImg'/>
          <span className="widgetLgName">{Desc5}</span>
        </td>
        <td className="widgetLgDate">{Date5}</td>
        <td className="widgetLgAmount"></td>
        <td className="widgetLgStatus">{Temp5}°C</td>
      </tr>
    </table>
  </div>
  )
}
