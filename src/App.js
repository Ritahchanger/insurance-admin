import React from 'react'
import Home from './Pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Authentication/Login/Login'
import Signup from './components/Authentication/Signup/Signup'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
