import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../css/LogIn.css";

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
      if (response.data.message) {
        alert(response.data.message);
      } else {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        window.localStorage.setItem("userType", response.data.type);
        navigate(
          response.data.type === "Hospital"
            ? "/Hospital"
            : response.data.type === "Warden"
            ? "/Police"
            : response.data.type === "Admin"
            ? "/Admin"
            : "/Reporter"
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="LogIn">
      <div className="main_box">
        <div className="form_box">
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
