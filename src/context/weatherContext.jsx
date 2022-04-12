import { createContext, useState } from "react";

export const WeatherContext = createContext()

const api = {
    key: "3d5f92e314256236c9dcc405b6aa65e2",
    base: "https://api.openweathermap.org/data/2.5/"
  }

export function WeatherContextProvider(props) {

    const [weather, setWeather] = useState({});
    const [value, setValue] = useState("");

    return (
        <WeatherContext.Provider value={{weather, setWeather, setValue,value}}>
          {props.children}
        </WeatherContext.Provider>
      )
    }