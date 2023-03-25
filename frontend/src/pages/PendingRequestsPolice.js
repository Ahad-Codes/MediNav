import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../css/PendingRequestsPolice.css";

export default function PendingRequestsPolice() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("userType");
    navigate("/");
  };
  return (
    <div className="PendingRequestsPolice">
      <button onClick={logout}>Logout</button>
      <div className="main_box">
        <div className="updateProfileHeading">
          <h1>Route Requests</h1>
        </div>
        <div className="table_box">
          <table className="table info_table table-borderless table-hover">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Hospital</th>
                <th scope="col">Incident Location</th>
                <th scope="col">Nearest Landmark</th>
                <th scope="col">Posted</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* 3 different type of buttons, we will identify the type of button by adding a conditional on button variable or giving different class type */}
              <tr className="table_row">
                <td className="non_button_item">obj.type</td>
                <td className="non_button_item">obj.hospital</td>
                <td className="non_button_item">obj.incident_location</td>
                <td className="non_button_item">obj.nearest_landmark</td>
                <td className="non_button_item">obj.time</td>
                <td>
                  <div className="btn-group">
                    <button className="btn button_left">Accept</button>
                    <button className="btn button_right">Reject</button>
                  </div>
                </td>
              </tr>
              <tr className="table_row">
                <td className="non_button_item">obj.type</td>
                <td className="non_button_item">obj.hospital</td>
                <td className="non_button_item">obj.incident_location</td>
                <td className="non_button_item">obj.nearest_landmark</td>
                <td className="non_button_item">obj.time</td>
                <td>
                  <div className="btn-group">
                    <button className="btn button_left">Accept</button>
                    <button className="btn button_right">Reject</button>
                  </div>
                </td>
              </tr>
              <tr className="table_row">
                <td className="non_button_item">obj.type</td>
                <td className="non_button_item">obj.hospital</td>
                <td className="non_button_item">obj.incident_location</td>
                <td className="non_button_item">obj.nearest_landmark</td>
                <td className="non_button_item">obj.time</td>
                <td>
                  <div className="btn-group">
                    <button className="btn button_left">Accept</button>
                    <button className="btn button_right">Reject</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
