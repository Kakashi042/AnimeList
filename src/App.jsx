
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Details from './components/Details'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mal_id' element={<Details />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
