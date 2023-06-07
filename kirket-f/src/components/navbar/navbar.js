import React from "react";
import "./navbar.css"

import {HashLink as Link} from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

import kirkte_img from "./../images/kirket.png"


function Nav() {
  return (

  
      <div id="n_outside">

      
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <nav class="navbar ">
          <div class="container-fluid">
            
            <a class="navbar-brand"  href="#">
            <div id="n_logo">
              <img
                src={kirkte_img}
                alt="Logo"
                width="30"
                height="30"
                class="d-inline-block align-text-top"
              />
              <div id="n_logo_text">

              KIRKET
              </div>
            </div>
            </a>

           
          </div>
        </nav>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pricing
              </a>
              <ul class="dropdown-menu">
                <li>
                  {/* <a class="dropdown-item" href="#Pricing_nav_id">
                    Free
                  </a> */}
                  <Link to='#pr_outside'>
                    Free
                  </Link>
                </li>
                <li>
                  {/* <a class="dropdown-item" href="#Pricing_nav_id">
                    Primier
                  </a> */}
                  <Link to='#pr_outside'>
                    Primier
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  {/* <a class="dropdown-item" href="#Pricing_nav_id">
                   Enterprise
                  </a> */}
                  <Link to='#pr_outside'>
                    Enterprise
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item " id="n_login">
            <Link style={{textDecoration: 'none' }} to='#outside_login'>
                  Login/Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    
  );
}

export default Nav;
