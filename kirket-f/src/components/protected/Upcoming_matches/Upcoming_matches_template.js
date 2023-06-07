import React from 'react'
import "./Upcoming_matches_template.css"

function Upcoming_matches_template(props) {
  return (
    
        <div id='am_outside'>
            <div className='container-fluid '>
                <div className='row umt_row'>
                    <div className='col '>{props.data.title}</div>
                    <div className='col '> <button className='glow-on-hover' id="upcoming_matches_btn">Subscribe</button></div>
                    
                </div>
                
                
    
                
            </div>
            </div>
  )
}

export default Upcoming_matches_template