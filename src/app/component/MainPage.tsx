import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import WorkManagement from './Work-management'
import Extension from './Extension'
import Customize from './Customize'
import Plan from './Plan'
import Work from './Work'
import Data from './Data'
import FoveriteApp from './FoveriteApp'
import Client from './Client'
import Footer from './Footer'

function MainPage() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <WorkManagement/>
      <Extension/>
      <Customize/>
      <Plan/>
      <Work/>
      <Data/>
      <FoveriteApp/>
      <Client/>
      <Footer/>
    </div>
  )
}

export default MainPage
