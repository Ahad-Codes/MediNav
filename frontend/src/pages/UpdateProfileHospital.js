import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../css/UpdateProfileHospital.css";

export default function UpdateProfileHospital() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <div className="UpdateProfileHospital">
      <button onClick={logout}>Logout</button>
      <div className="main_box">
        <div>
          <div className="updateProfileHeading">
            <h1>Update Profile</h1>
          </div>
          <div className="form_box">
            {/* <Link to="/">back</Link> */}
            <form className="row g-3">
              <div className="mb-3 form_row">
                <label for="exampleInputEmail1" className="form-label">
                  Change Landline number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder=""
                />
              </div>

              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Primary Mobile Number
                </label>
                <input type="number" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Secondary Mobile Number
                </label>
                <input type="number" class="form-control" id="inputPassword4" />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Number of On Call Doctors
                </label>
                <input type="number" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Number of Operational Ambulances
                </label>
                <input type="number" class="form-control" id="inputPassword4" />
              </div>

              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Enter New Password
                </label>
                <input type="password" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Re-enter New Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                />
              </div>

              <div className="mb-3 form_row">
                <label for="exampleInputEmail1" className="form-label">
                  Enter Old Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder=""
                />
              </div>

              <div className="bring_child_to_center">
                <button type="submit" className="updateButton">
                  Update Profile
                </button>
                <button type="submit" className="cancelButton">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
