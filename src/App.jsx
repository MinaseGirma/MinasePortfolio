import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import MiddleBody from './Components/Body/MiddleBody'
import Body from './Components/Body/Body'
import LowerBody from './Components/Body/LowerBody'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
      <Header />
      <Body />
      <MiddleBody />
      <LowerBody />
      <Footer />
    </>
  )
}

export default App
