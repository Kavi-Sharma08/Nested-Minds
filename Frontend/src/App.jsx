import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Login from './components/Login'
import HomePage from './components/HomePage'
import DashBoard from './components/DashBoard'
import About from './components/About'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/dashboard' element = {<DashBoard/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App