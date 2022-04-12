import "../../pages/temperature/temperature"
import "../../pages/private/home/Home"
import { useContext } from "react"
import { UserContext } from "../../context/userContext";

import "./sidebar.css"

import { AccountCircle, Home, WbSunny, Notifications, BatteryFull, CompareArrows, Waves, AcUnit} from '@material-ui/icons';
import OpacityIcon from '@material-ui/icons/Opacity';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    const { barState } =useContext(UserContext);

  return (
  <>
  {barState.Sidebar && (
    <div className='Sidebar'>
        <div className="sideWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle"> Dasboard :</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <Home className='sidebarIcon'/>
                        <Link to="/private/home" className="lien">Home</Link>
                            
                    </li>
                    <li className="sidebarListItem">
                        <AcUnit className='sidebarIcon'/>
                        <a className="lien" target= "_blank" href="http://10.10.32.10:8086/orgs/ac4d8437e43c0b98/dashboards/092557670e4b4000?lower=now%28%29%20-%207d">Température</a>
                        
                    </li>
                    <li className="sidebarListItem">
                        <OpacityIcon className='sidebarIcon'/>
                        <a className="lien" target= "_blank" href="http://10.10.32.10:8086/orgs/ac4d8437e43c0b98/dashboards/0927ba907dce0000?lower=now%28%29%20-%207d">Humidité</a>
                    </li>
                    <li className="sidebarListItem">
                        <CompareArrows className='sidebarIcon'/>
                        <a className="lien" target= "_blank" href="http://10.10.32.10:8086/orgs/ac4d8437e43c0b98/dashboards/0927b9fc488e0000?lower=now%28%29%20-%207d">Pression</a>
                    </li>
                    <li className="sidebarListItem">
                        <Waves className='sidebarIcon'/>
                        <a className="lien" target= "_blank" href="http://10.10.32.10:8086/orgs/ac4d8437e43c0b98/dashboards/0925583ed0cb4000?lower=now%28%29%20-%207d">Fuite d'eau</a>
                    </li>
                    <li className="sidebarListItem">
                        <BatteryFull className='sidebarIcon'/>
                        <Link to="/private/home/battery" className="lien">Batterie</Link>
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle"> Les capteurs :</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem">
                        <AcUnit className='sidebarIcon'/>
                        <a className="lien" target= "_blank" href="http://10.10.32.10:8086/orgs/ac4d8437e43c0b98/dashboards/092557670e4b4000?lower=now%28%29%20-%207d">Capteur température 1</a>
                    </li>
                    <li className="sidebarListItem">
                        <AcUnit className='sidebarIcon'/>
                        <a className="lien" target= "_blank" href="http://10.10.32.10:8086/orgs/ac4d8437e43c0b98/dashboards/092555d9680b4000?lower=now%28%29%20-%207d">Capteur température 2</a>
                    </li>
                    <li className="sidebarListItem">
                        <AcUnit className='sidebarIcon'/>
                        <a className="lien" target= "_blank" href="http://10.10.32.10:8086/orgs/ac4d8437e43c0b98/dashboards/092557f204cb4000?lower=now%28%29%20-%207d">Capteur température 3</a>
                    </li>
                    <li className="sidebarListItem">
                        <Waves className='sidebarIcon'/>
                        <a className="lien" target= "_blank" href="http://10.10.32.10:8086/orgs/ac4d8437e43c0b98/dashboards/0925583ed0cb4000?lower=now%28%29%20-%207d">Capteur fuite d'eau 1</a>
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle"> Météo :</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WbSunny className='sidebarIcon'/>
                        <Link to="/private/home/meteo" className="lien">Meteo</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )}
    </>
  )
}
