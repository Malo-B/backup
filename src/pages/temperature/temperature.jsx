import Chart from "../../components/chart/Chart"
import {User_Data} from "../../data/Data_moy";
import { Grid } from "@material-ui/core";

import "./temperature.css"

export default function Temperature() {
  return (
  <div className='temperature'> 
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
          <div className="temperatureItem">
              <div className="temperaturedContainer">
              <Chart data={User_Data} title="Température capteur N°1 :" grid temp="Température en °C" dataKey="mois"/>
              </div>
          </div>
      </Grid>
      <Grid item xs={6}>
      <div className="temperatureItem">
              <div className="temperaturedContainer">
              <Chart data={User_Data} title="Température capteur N°2 :" grid temp="Température en °C" dataKey="mois"/>
              </div>
          </div>
      </Grid>
      <Grid item xs={6}>
      <div className="temperatureItem">
              <div className="temperaturedContainer">
              <Chart data={User_Data} title="Température capteur N°3 :" grid temp="Température en °C" dataKey="mois"/>
              </div>
          </div>
      </Grid>
      <Grid item xs={6}>
      <div className="temperatureItem">
              <div className="temperaturedContainer">
              <Chart data={User_Data} title="Température capteur N°4 :" grid temp="Température en °C" dataKey="mois"/>
              </div>
          </div>
      </Grid>
    </Grid>
  </div>
  )
}
