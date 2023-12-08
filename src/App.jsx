import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Header from './container/Header/Header'
import AboutUs from './container/AboutUs/AboutUs'
import SpecialMenu from './container/Menu/SpecialMenu'
import Chef from './container/Chef/Chef'
import Intro from './container/Intro/Intro'
import Laurels from './container/Laurels/Laurels'
import Gallery from './container/Gallery/Gallery'
import FindUs from './container/FindUs/FindUs'
import Footer from './container/Footer/Footer'
import './App.css'
import SpecialEvents from './container/Events/SpecialEvents'
const App = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <SpecialEvents/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  )
}

export default App