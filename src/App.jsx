import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/Pages/Home'
import Header from './assets/Components/Header'
import Footer from './assets/Components/Footer'
import Parallax from './assets/Components/Parallax'
import Scroll from './assets/Components/Home/Scroll'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path='/'></Route>
        <Route element={<Parallax />} path='/parallax'></Route>
        <Route element={<Scroll />} path='/scroll'></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
