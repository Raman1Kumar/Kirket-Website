import React from 'react'
import "./Active_matches.css"

function Active_matches() {



    // let API="/match_list";


    const stat=localStorage.getItem("kirket.stat");

    let status="INACTIVE"

    if(stat==0){
        status="INACTIVE";
    }
    else{
        status="ACTIVE";
    }



  return (
    <div id='am_outside'>
        <div className='container-fluid '>
            <div className='row am_row'>
                <div className='col col-sm-3'>Status</div>
                <div className='col col-sm-9'> {status}</div>
                
            </div>
            <div className='row am_row'>
                <div className='col-4 col-sm-3'>Name</div>
                <div className='col col-sm-9'> CSK vs MI</div>
            </div>
            <div className='row am_row'>
                <div className='col-4 col-sm-3'>Score</div>
                <div className='col col-sm-9'> 112-5</div>
            </div>

            <div className='row am_row'>
               <div className='col'>
                <button className='glow-on-hover'>Stop </button>
               </div>
            </div>

            
        </div>
    </div>
  )
}

export default Active_matches