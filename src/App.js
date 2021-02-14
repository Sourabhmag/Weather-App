import logo from './logo.svg';
import './App.css';
import CityInput from "./Components/CityInput";
import CityWeather from "./Components/CityWeather";
import { useState } from 'react';

function App() {
  const [city,setCity] = useState("");
  const [cityWeather,setCityWeather] = useState({});


  const fetchCityWeater = () =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`)
    .then((Response)=>Response.json())
    .then(Response=>{
      console.log(Response);
    })
  }
  return (
    <div className="p-2">
      <CityInput city={city} setCity={setCity} fetchCityWeater={fetchCityWeater}/>
      <CityWeather/>
    </div>
  );
}

export default App;
