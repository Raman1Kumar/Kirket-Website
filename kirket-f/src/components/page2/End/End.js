import React from 'react'
import "./End.css"

import kirket_img from "./../../images/kirket.png"


function End() {
  return (
    <div>
        <div id="e_outside"></div>
        <div className='container-fluid'>
            <div className='row'>

                <div className='col-12 col-md-4 marginy'>

                    <div className="footer-left">

                    <h3>KIRKET<span><img src={kirket_img} width={80} height={80} id="end_img"/></span></h3>

                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>
                        
                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>
                             
                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name">KIRKET PVT LTD.  © 2023</p>
                    </div>


                </div>
                <div className='col-12 col-md-4 marginy'>

                    <div className="footer-center">

                        <div className='e_center'>
                            <i className="fa fa-map-marker fa-xl"></i>
                            <p><span>Ramanujan Block</span> IIT HYDERABAD, Telangana</p>
                        </div>

                        <div className='e_center'>
                            <i className="fa fa-phone fa-xl"></i>
                            <p>+91 991242</p>
                        </div>

                        <div className='e_center'>
                            <i className="fa fa-envelope fa-xl"></i>
                            <p><a href="mailto:support@company.com">support@kirket.com</a></p>
                        </div>

                    </div>


                </div>
                <div className='col-12 col-md-4 marginy'>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <div id='about_com'>About the company</div>
                            <div id="about_com_text">
                            Kirket Provide real time Cricket Update on WhatsApp
                            </div>
                        </p>

                        <div className="footer-icons" id='e_icons'>

                            <a href="#"><i className="fa fa-facebook fa-xl"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-xl" ></i></a>
                            <a href="#"><i className="fa fa-linkedin fa-xl"></i></a>
                            <a href="#"><i className="fa fa-github fa-xl"></i></a>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default End