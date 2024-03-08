import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'

// Import des Context
import { LoadingContext } from "./Context/Context";
import Loading from './Components/Loading';
import { useState } from 'react';

function App() {

  const [loading, setLoading] = useState(false);

  return (
    <>
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading ? (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
        ) : (
          <Loading/>
        )}
      </LoadingContext.Provider>
    </>
  )
}

export default App
