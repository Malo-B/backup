import Chart from "../../components/chart/Chart"
import {User_Data} from "../../data/Data_moy";
import { Grid } from "@material-ui/core";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";

import "./capteur1.css"

export default function Capteur1() {
  return (
  <div className='capteur1'> 
    <FeaturedInfo/>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
          <div className="capteur1Item">
              <div className="capteur1dContainer">
              <Chart data={User_Data} title="Température en °C :" grid temp="Température en °C" dataKey="mois"/>
              </div>
          </div>
      </Grid>
      <Grid item xs={6}>
      <div className="capteur1Item">
              <div className="capteur1dContainer">
              <Chart data={User_Data} title="Humidité en pourcentage:" grid temp="Température en °C" dataKey="mois"/>
              </div>
          </div>
      </Grid>
      <Grid item xs={6}>
      <div className="capteur1Item">
              <div className="capteur1dContainer">
              <Chart data={User_Data} title="Pression atmosphérique en Pa:" grid temp="Température en °C" dataKey="mois"/>
              </div>
          </div>
      </Grid>
      <Grid item xs={6}>
      <div className="capteur1Item">
              <div className="capteur1dContainer">
              <Chart data={User_Data} title="Batterie en pourcentage:" grid temp="Température en °C" dataKey="mois"/>
              </div>
          </div>
      </Grid>
    </Grid>
  </div>
  )
}
