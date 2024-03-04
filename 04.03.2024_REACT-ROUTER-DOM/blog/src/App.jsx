import './App.css'
import Blog from './Pages/Blog/Blog'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
