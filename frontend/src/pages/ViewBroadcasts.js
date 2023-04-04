import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/ViewBroadcasts.css";

export default function ViewBroadcasts() {
  return (
    <div className="ReportHistoryReporter">
      <div className="main_box">
        <div className="updateProfileHeading">
          <h1>View Broadcasts</h1>
        </div>
        <div className="table_box">
          <table className="table info_table table-borderless table-hover">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Incident Location</th>
                <th scope="col">Reported By</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* 3 different type of buttons, we will identify the type of button by adding a conditional on button variable or giving different class type */}
              <tr className="table_row">
                <td className="non_button_item">obj.date</td>
                <td className="non_button_item">obj.time</td>
                <td className="non_button_item">obj.name</td>
                <td className="non_button_item">obj.hospital</td>
                
              </tr>
              <tr className="table_row">
                <td className="non_button_item">obj.date</td>
                <td className="non_button_item">obj.time</td>
                <td className="non_button_item">obj.name</td>
                <td className="non_button_item">obj.hospital</td>
                
              </tr>
              <tr className="table_row">
                <td className="non_button_item">obj.date</td>
                <td className="non_button_item">obj.time</td>
                <td className="non_button_item">obj.name</td>
                <td className="non_button_item">obj.hospital</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
