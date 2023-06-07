import React from 'react'

import Dropdown from '../Dropdown/Dropdown'
import './AboutMe.css'

function AboutMe(props) {
  return (
    <div>
        <div id='a_outside'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6 col-sm-4 order-sm-1'>
                   <img src={props.data.src} alt='Profile pic' width={40} height={40}></img>
                </div>


               


                <div className='col-6 col-sm-5 order-sm-3'>
                   
                    <Dropdown/>
                </div>

                <div className='col-6 col-sm-3 order-sm-2'>
                    <div className='row'>
                        <div className='col'>
                            {props.data.name}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>{props.data.id}</div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutMe