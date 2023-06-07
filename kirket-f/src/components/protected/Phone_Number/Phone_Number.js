import React, { useState } from 'react'
import Edit from '../../page2/Edit/Edit'
import "./Phone_Number.css"


function Phone_Number() {

   
const [phone,setphone]=useState(localStorage.getItem("kirket.phone"))
const [name,setName]=useState(localStorage.getItem("kirket.name"))

let phonealert=(p)=>{
  // alert("changeing");
  setphone(p)
}

//Function to change phone state from  child component
  let phone_change=(p)=>{
    setphone(p);
    // alert(phone)
  }
  //Function to change state from child component
  let name_change=(n)=>{
    setName(n);
  }


  return (

   
    //Setting to change phone Number and username
    <div id='ph_outside'>
        <div className='container-fluid '>


        <div className='row am_row stripped-grid'>
                <div className='col-12 col-sm-3'>UserName</div>
                <div className='col-6 col-sm-6'> {localStorage.getItem("kirket.username")}</div>
               
            </div>

            <div className='row am_row stripped-grid'>
                <div className='col col-sm-3'>Phone_Number</div>
                <div className='col-6 col-sm-6'>{ phone}</div>
                <div className='col-6 col-sm-3'> <Edit ty="p" phonechange={phone_change} 
                /></div>
                
            </div>
           

            <div className='row am_row stripped-grid'>
                <div className='col-12 col-sm-3'>Name</div>
                <div className='col-6 col-sm-6'> {name}</div>
                <div className='col-6 col-sm-3'> <Edit ty="n"  namechange={name_change}/></div>
            </div>
           

           
            
        </div>

      
    </div>
  
  )
}

export default Phone_Number