import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/UpdateProfileReporter.css";

export default function UpdateProfileReporter() {
  return (
    <div className="UpdateProfileReporter">
      <div className="main_box">
        <div>
          <div className="updateProfileHeading">
            <h1>Update Profile</h1>
          </div>
          <div className="form_box">
            <form className="row g-3">
              <div className="mb-3 form_row">
                <label for="exampleInputEmail1" className="form-label">
                  Display Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder=""
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
                  placeholder=""
                />
              </div>
              <div className="mb-3 form_row">
                <label for="exampleInputEmail1" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder=""
                />
              </div>
              <div className="mb-3 form_row">
                <label for="exampleInputEmail1" className="form-label">
                  Reenter New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder=""
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
