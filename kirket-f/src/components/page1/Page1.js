import React from "react";
import Left from "./left/Left";
import Upper from "./upper/Upper";
import Lower from "./lower/Lower";
import "./Page1.css";
import Login from "../login/Login";
import Nav from "../navbar/navbar";

function Page1() {
  return (
    <>
    <Nav/>
    <div id="outside">

    
    </div>

    {/* <div className="container-fluid align-items-center m-0" id="page1">
      <div className="row fluid total m-0">
        <div className="col-md-5 my-md-5 my-sm-5 left">
          <Left />
        </div>
        <div className="col-md-7 order-sm-first order-md-last  right">
         
            <Login/>
        </div>
      </div>
    </div> */}


    </>
  );
}

export default Page1;
