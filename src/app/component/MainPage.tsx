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

      <div className=''>
      <Home />
      </div>

      <div className=''>
      <WorkManagement />
      </div>

      <div className="">
      <Extension />
      </div>

      <div className="">
      <Customize />
      </div>

      <div className="">
      <Plan />
      </div>

      <div className="">
      <Work />
      </div> 

      <div className="">
      <Data />
      </div>

      <div className="">
      <FoveriteApp />
      </div>

      <div className="">
      <Client />
      </div>

      <div className="">  
      <Footer />
      </div>
    </div>
  )
}

export default MainPage
