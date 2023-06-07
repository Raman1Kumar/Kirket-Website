import React, { useState } from "react";

import axios from "axios";

import "./Login.css";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import AutohideUpdate from "../Toast/Toast";

const base_url=process.env.REACT_APP_BASE_URL

function Login() {
  //useNavigate to send user to protected route
  let navigate = useNavigate();

  //State for login
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  //State for Register
  const [Phone, setPhone] = useState("");
  const [Email_R, setEmail_R] = useState("");
  const [Password_R, setPassword_R] = useState("");
  const [Name, setName] = useState("");
  //State to toggle between login tab and Register tab
  const [toggleState, setToggleState] = useState(1);
  //State to show pop_up message "failed login /Register successfull etc"
  const [Loginshow, setLoginshow] = useState(0);
  const [Registershow, setRegistershow] = useState(0);

  //Toggle login Register Tab;
  const toggleTab = (index) => {
    setToggleState(index);
    console.log(index);
  };

  //Use to remove pop_up if user click Close button
  const login_fnc = () => {
    setLoginshow(0);
  };
  //Use to remove pop_up if use click close button
  const register_fnc = () => {
    setRegistershow(0);
  };

  //Validate token if ,valid go to protected else got to Homepage
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
        navigate(`/Protected`);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  }, []);

  //onsubmitHandler
  const onsubmitHandler = (e) => {
    e.preventDefault();



    console.log(Email);
    console.log(Password);
    const username = Email;
    const password = Password;
    const phone = Phone;

    //toggleState 1 ,Hit login route ,if login successful go to protected else go to main page
    if (toggleState === 1) {

      console.log("hereasdfasf")
     
      axios
        .post(`${base_url}/login`, { username, password })
        .then((user) => {
          console.log(user);
          localStorage.setItem("token", user.data.token);
          localStorage.setItem("kirket.name", user.data.name);
          localStorage.setItem("kirket.username", user.data.username);
          localStorage.setItem("kirket.phone", user.data.phone);
          localStorage.setItem("kirket.match_link", user.data.match_link);
          localStorage.setItem("kirket.stat", user.data.stat);

          navigate("/Protected");
        })
        .catch((err) => {
          console.log("setting login show");
          console.log(Loginshow);
          setLoginshow(1);
          console.log(Loginshow);
          console.log(err);
        });
    }

    //toggleState 2 ,Hit Register route ,if Register successful go for login .
    if (toggleState === 2) {
      axios
        .post(`${base_url}/register`, {
          Name,
          username: Email_R,
          password: Password_R,
          phone: Phone,
        })
        .then((user) => {
          console.log(user);
          localStorage.setItem("token", user.data.token);
          setRegistershow(2);
        })
        .catch((err) => {
          console.log(err);
          console.log("Trying to register");
          setRegistershow(1);
        });
    }
  };

  //Component
  return (
    <div id="outside_login">
      {/* Sign up /Login Tab */}
      <div id="title">
        <div
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}>
          Login
        </div>

        <div
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}>
          sign up
        </div>
      </div>

      <form id="fm">
        {/* Login */}
        <div
          className={toggleState === 1 ? "content active-content" : "content"}>
          <div id=" user_pass">
            <div id="username">
              <label>
                <p>Username</p>
                <input
                  type="text"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="Email"
                  placeholder="abcd@gmail.com"
                />
              </label>
            </div>

            <div id="password">
              <label>
                <p>Password</p>
                <input
                  type="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="Email"
                  placeholder="*****Type*****"
                />
              </label>
            </div>
          </div>
          <div>
            <button
              className="glow-on-hover"
              type="submit"
              onClick={onsubmitHandler}>
              Login
            </button>
          </div>
        </div>

        {/* Register */}
        <div
          className={toggleState === 2 ? "content active-content" : "content"}>
          <div id="name">
            <label>
              <p>Name</p>
              <input
                type="text"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                id="Name"
                placeholder="Abcd"
              />
            </label>
          </div>

          <div id=" user_pass">
            <div id="username">
              <label>
                <p>Username</p>
                <input
                  type="email"
                  value={Email_R}
                  onChange={(e) => setEmail_R(e.target.value)}
                  id="Email"
                  placeholder="abcd@gmail.com"
                />
              </label>
            </div>

            <div id="password">
              <label>
                <p>Password</p>
                <input
                  type="password"
                  value={Password_R}
                  onChange={(e) => setPassword_R(e.target.value)}
                  id="Email"
                  placeholder="*****Type*****"
                />
              </label>
            </div>

            <div id="name">
              <label>
                <p>Phone Number</p>
                <input
                  type="text"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="Phone"
                  placeholder="90XX12XX41"
                />
              </label>
            </div>
          </div>

          {/* submit */}
          <div>
            <button
              type="submit"
              id="register_btn"
              className="glow-on-hover"
              onClick={onsubmitHandler}>
              Register
            </button>
          </div>
        </div>
      </form>

      {/* pop_up to show status of login and signup */}
      <AutohideUpdate
        login={Loginshow}
        login_fun={login_fnc}
        register={Registershow}
        register_fun={register_fnc}
      />
    </div>
  );
}

export default Login;
