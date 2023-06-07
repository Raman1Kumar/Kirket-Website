import React from 'react';

import Card from '../Card/Card';
import "./Pricing.css"

const Free={

    src:"",
    alt:"",
    title:"Free",
    para:"Free tier offer basics falcilities",
    l0:"Upto 1000 messages",
    l1:"cover 2 matches per day",
    l2:"IPL not included",
    link:"#",

}


const Premier={

    src:"",
    alt:"",
    title:"Primier",
    para:"Primier tier offer upgraded falcilities",
    l0:"Upto 10,000 messages",
    l1:"cover 3 matches per day",
    l2:"IPL included",
    link:"#",

}


const Enterprise={

    src:"",
    alt:"",
    title:"Enterprise",
    para:"Enterprise tier offer all the  falcilities",
    l0:"Unlimited messages",
    l1:"Unlimited matches per day",
    l2:"IPL included",
    link:"#",

}

function Pricing() {
  return (
    <>

        <div>
            <div id='pr_outside'>

                <div id='pr_text'>
                    <h1>

                    Pricing and Details
                    </h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col"><Card data={Free}/></div>
                        <div className="col"><Card data={Premier}/></div>
                        <div className="col"><Card data={Enterprise}/></div>
                        
                    </div>
                </div>

            </div>
        </div>


     
    </>
  );
}

export default Pricing;
