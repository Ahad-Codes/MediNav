import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../css/LogIn.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// import {AiOutlineArrowLeft} from 'react-icons/fa'
export default function LogIn() {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        number,
        password,
      });
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/Reporter");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="LogIn">
      <div className="main_box">
        <div className="form_box">
          {/* <p><i className="fa-solid fa-left"></i></p> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-left" /> */}
          {/* <i className="fa fa-gear"></i> */}
          <Link to="/">back</Link>
          <h3>Login to Medinav</h3>
          <form onSubmit={onSubmit}>
            <div className="mb-3 form_row">
              <label for="exampleInputEmail1" className="form-label">
                Contact Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="03XXXXXXXXX"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
              {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3 form_row">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="bring_child_to_center">
              <button type="submit" className="btn btn-primary button">
                Log In
              </button>
            </div>
          </form>

          {/* <div className="bring_child_to_center">
                    <div>
                        <p>Don't have an accout? <Link>Sign Up</Link></p>
                        
                    </div> 
                    <div>
                        <p>Don't have an accout? <Link>Sign Up</Link></p>
                        
                    </div> 
                </div> */}

          {/* <div className="bring_child_to_center">
                    <p>Don't have an accout?&nbsp; </p><p>Sign Up</p>
                </div> */}

          <p className="bring_link_to_center">
            Don't have an accout?<Link to="/SignUp/Reporter"> Sign Up</Link>
          </p>
          <p className="bring_link_to_center">
            Forget Your Password?<Link>Click Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
