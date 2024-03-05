import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Overview from './Pages/Overview/Overview'
import ProductView from './Pages/ProductView/ProductView'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/overview' element={<Overview/>}/>
          <Route path='/product/:id' element={<ProductView/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
