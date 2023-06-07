import React from 'react'
import Nav from '../navbar/navbar'
import First from './First/First'
import Sec from './Sec/Sec'
import Login from '../login/Login'
import Fa from './Fa/Fa'

import Pricing from './Pricing/Pricing'
import End from './End/End'
import Edit from './Edit/Edit'


function Homepage() {
  return (
    <div>

      
        <Nav/>
        <div>
        <First/>
        </div>
        <div>
          <Sec/>
        </div>
        <div>
          <Login/>
        </div>
        <div>
          <Pricing/>
        </div>
        <div>
          <End/>
        </div>
        
    </div>
  )
}

export default Homepage