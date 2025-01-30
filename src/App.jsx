import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


const App = () => {
  return (
    <>
   
   <div className="min-h-screen flex flex-col">
   <div className="flex-grow">
     <Navbar/> 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
     </Routes>
     </div>
     <footer>
      <Contact/>
     </footer>
   
     </div>

    </>
  )
}

export default App
