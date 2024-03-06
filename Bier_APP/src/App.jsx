import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import RandomProduct from './Pages/RandomProduct/RandomProduct'
import ProductView from './Pages/ProductView/ProductView'
import Overview from './Pages/Overview/Overview'
import Home from './Pages/Home/Home'
import '@fontsource-variable/inter';
import Header from './Components/Header/Header'

function App() {
  return (
    <>
      <BrowserRouter> 
      <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/overview' element={<Overview/>}/>
            <Route path='/product/:id' element={<ProductView/>}/>
            <Route path='/beer/random' element={<RandomProduct/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
