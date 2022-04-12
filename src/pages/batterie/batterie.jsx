import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import { useContext } from 'react';
import { TempContext } from '../../data/Temp_réel';

export default function Batterie() {

  const {CurrentTemp1, CurrentTemp2, CurrentTemp3, CurrentTemp4} = useContext(TempContext);

  return (
  <div>
    <div className="App">
      <div className='home'>
      {(typeof CurrentTemp1 != "undefined" ) ? (
      <FeaturedInfo info1={CurrentTemp1.battery} unite1="%" description1="Capteur1" info2={CurrentTemp2.battery} unite2="%" description2="Capteur2" info3={CurrentTemp3.battery} unite3="%" description3="Capteur3" info4={CurrentTemp4.battery} description4="Capteur4" unite4="%"/>
      ):('')}
      </div>
    </div>
  </div>
  )
}
// 
//<Widgetlg/>