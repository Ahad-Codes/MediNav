import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/SignUpReporter.css";

export default function SignUpReporter() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/user/signup", {
        cnic,
        number,
        name,
        email,
        password,
      });
      navigate("/Login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="SignUpReporter">
      <div className="main_box">
        <div className="form_box">
          <Link to="/">back</Link>
          <h3>Signup to Medinav</h3>
          <form onSubmit={onSubmit}>
            <div className="mb-3 form_row">
              <label for="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
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
              <label for="exampleInputEmail1" className="form-label">
                CNIC
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="3************"
                value={cnic}
                onChange={(e) => {
                  setCnic(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 form_row">
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
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
                Creat Account
              </button>
            </div>
          </form>

          <p className="bring_link_to_center">
            Already an account?<Link to="/LogIn">Log In</Link>
          </p>
          <p className="bring_link_to_center">
            <Link to="/SignUp/Hospital">Sign Up as Hospital</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
