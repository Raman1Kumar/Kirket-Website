
import React, { useEffect, useState } from 'react'

import Upcoming_matches_template from './Upcoming_matches_template';
const base_url=process.env.REACT_APP_BASE_URL

 function Upcoming_matches() {

   
    let API=`${base_url}/match_list`;


    const [matches,setMatches]=useState([]);

    //Get Current Matches by hitting a particular route in backend
    const fetchApiData = async (url)=>{

        try{

            const res= await fetch(url);
            const data=await res.json();
            setMatches(data);
        }
        catch(error){
            console.log(error);
        }
    }

    
    useEffect(()=>{
        fetchApiData(API);   
    },[])

  
    console.log(matches)

  return (
    <div>
          {/* <Upcoming_matches_template data={matches}> */}

          {
            matches.map((match)=>{
                return <Upcoming_matches_template data={match}/>
            })
          }
    </div>
  )
}

export default Upcoming_matches