import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/private/home/Home";
import Temperature from "./pages/temperature/temperature";
import NotFound from "./pages/notFound/notfound";
import Capteur1 from "./pages/capteur1/capteur1";
import Navbar from "./components/navbar/Navbar"
import SignUpModal from './components/modals/SignUpModal';
import SignInModal from './components/modals/SignInModal';
import Private from './pages/private/Private';
import Porte from "./pages/porte/porte";
import {UserContextProvider} from './context/userContext'
import Batterie from "./pages/batterie/batterie";
import Inscription from "./pages/inscription/inscription";

import "./App.css"

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Weather from "./pages/weather/weather";
import { WeatherContextProvider } from "./context/weatherContext";
import { TempContextProvider } from "./data/Temp_réel";

import  'bootstrap/dist/css/bootstrap.min.css' ;

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <TempContextProvider>
          <WeatherContextProvider>
          <SignInModal/>
          <SignUpModal/>
          <Navbar/>
          <Topbar/>
            <div className="container-test">
              <div className="bar">
                <Sidebar/>
              </div>
              <div className="test">
                  <Routes>
                    <Route path='/' element={<Porte/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/private" element={<Private/>}>
                        <Route path="/private/home" element={<Home/>} />
                        <Route path='/private/home/temperature' element={<Temperature/>}/>
                        <Route path='/private/home/capteur1' element={<Capteur1/>}/>
                        <Route path="/private/home/meteo" element={<Weather/>}/>
                        <Route path="/private/home/battery" element={<Batterie/>}/>
                        <Route path="/private/home/inscription" element={<Inscription/>}/>
                    </Route>
                  </Routes>
              </div>  
            </div>
          </WeatherContextProvider>
        </TempContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
