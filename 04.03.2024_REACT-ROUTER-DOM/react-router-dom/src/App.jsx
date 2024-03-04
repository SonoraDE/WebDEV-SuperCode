import './App.css'
import Home from './Pages/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Speisekarte from './Pages/Speisekarte/Speisekarte';
import Zeiten from './Pages/Zeiten/Zeiten';
import Header from './Components/Header/Header';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "speisen" element = {<Speisekarte/>}/>
        <Route path = "oeffnungszeiten" element = {<Zeiten/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
