import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import "./App.css"
import Detail from "./components/Detail/Detail";
import Form from "./components/form/Form";
import GameCreated from "./components/GameCreated/GameCreated";
import axios from "axios";

const URL_API = process.env.REACT_APP_URL_API;
axios.defaults.baseURL = URL_API

function App() {
 
  return (
    <div className="App">
     
     <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home key={"home"}/>}/>
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/formcreated" element={<Form/>}/>
        <Route path="/created" element={<GameCreated/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
