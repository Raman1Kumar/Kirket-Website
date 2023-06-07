import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../navbar/navbar";
import End from "../page2/End/End";
import AboutMe from "./About_Me/AboutMe";
import Setting from "./Setting/Setting";
import profile_img from "./../images/kirket_profile.png";
const base_url=process.env.REACT_APP_BASE_URL


function Protected() {
  const about = {
    src: profile_img,
    name: localStorage.getItem("kirket.name"),
    id: localStorage.getItem("kirket.username"),
  };

  let navigate = useNavigate();


  //Checks if token is valid then allow else Navigate to main page
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${base_url}/protected`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  }, []);

  return (
    <div>
      <div>
        <Nav />
      </div>

      <div>
        <AboutMe data={about} />
      </div>
      <div>
        <Setting />
      </div>
      <div>
        <End />
      </div>
    </div>
  );
}

export default Protected;
