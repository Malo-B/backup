import React from 'react';
import "./Widgetlg.css"

export default function Widgetlg({Temp1,Temp2,Temp3,Temp4,Humidite1,Humidite2,Humidite3,Pression1,Pression2,Pression3,Qx1,Qx2,Qx3,Qx4,Batterie1,Batterie2,Batterie3,Batterie4,fuite,icone1,icone2,icone3,icone4}) {

  return (
  <div className='widgetLg'>
    <h3 className="widgetLgTitle">Paramètres secondaire en temps réel</h3>
    <table className="widgetLgTable">
      <tr className="widgetLgTr">
        <th className="widgetLgTh">Capteurs</th>
        <th className="widgetLgTh">Température</th>
        <th className="widgetLgTh">Fuite</th>
        <th className="widgetLgTh">Humidité</th>
        <th className="widgetLgTh">Pression</th>
        <th className="widgetLgTh">Qualité de la connexion</th>
        <th className="widgetLgTh">Batterie</th>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src={icone1} alt="" className='widgetLgImg'/>
        </td>
        <td className="widgetLgStatus">{Temp1}°C</td>
        <td className="widgetLgDate">N/A</td>
        <td className="widgetLgStatus">{Humidite1}%</td>
        <td className="widgetLgStatus">{Pression1} Pa</td>
        <td className="widgetLgStatus">{Qx1}%</td>
        <td className="widgetLgStatus">{Batterie1}%</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src={icone2} alt="" className='widgetLgImg'/>
        </td>
        <td className="widgetLgStatus">{Temp2}°C</td>
        <td className="widgetLgDate">N/A</td>
        <td className="widgetLgStatus">{Humidite2}%</td>
        <td className="widgetLgStatus">{Pression2} Pa</td>
        <td className="widgetLgStatus">{Qx2}%</td>
        <td className="widgetLgStatus">{Batterie2}%</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src={icone3} alt="" className='widgetLgImg'/>
        </td>
        <td className="widgetLgStatus">{Temp3}°C</td>
        <td className="widgetLgDate">N/A</td>
        <td className="widgetLgStatus">{Humidite3}%</td>
        <td className="widgetLgStatus">{Pression3} Pa</td>
        <td className="widgetLgStatus">{Qx3}%</td>
        <td className="widgetLgStatus">{Batterie3}%</td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src={icone4} alt="" className='widgetLgImg'/>
        </td>
        <td className="widgetLgStatus">{Temp4}°C</td>
        <td className="widgetLgDate">{fuite}</td>
        <td className="widgetLgStatus">N/A</td>
        <td className="widgetLgStatus">N/A</td>
        <td className="widgetLgStatus">{Qx4}%</td>
        <td className="widgetLgStatus">{Batterie4}%</td>
      </tr>
    </table>
  </div>
  )
}
