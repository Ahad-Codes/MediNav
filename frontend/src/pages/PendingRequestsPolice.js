import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../css/PendingRequestsPolice.css";
import Cookies from "js-cookie";

export default function PendingRequestsPolice() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);

  useEffect(() => {

    if (!Cookies.get("access_token")) {
      navigate("/");
    } else if (window.localStorage.getItem("userType") !== 'Warden') {
      navigate("/");
    }
    else {
    fetchReport();
    }

  }, []);

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("userType");
    navigate("/");
  };

  async function fetchReport() {
    try {
      const response = await axios.get(
        `http://localhost:3001/user/policePending`
      );
      setReports(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleAccept = async (reportID) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/user/policePendingAccepted/${reportID}`,
        { status: "accepted" }
      );
      console.log(response.data);
      fetchReport(); // Refresh the report list after accepting
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (reportID) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/user/policePendingRejected/${reportID}`,
        { status: "rejected" }
      );
      console.log(response.data);
      fetchReport(); // Refresh the report list after rejecting
    } catch (error) {
      console.error(error);
    }
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
              {reports.map((report) => (
                <tr key={report._id} className="table_row">
                  <td className="non_button_item">{report.title}</td>
                  <td className="non_button_item">{report.hospital_id}</td>
                  <td className="non_button_item">
                    {report.location[0]}, {report.location[1]}
                  </td>
                  <td className="non_button_item">{report.nearest_landmark}</td>
                  <td className="non_button_item">{report.createdAt}</td>
                  <td>
                    <div className="btn-group">
                      <button
                        onClick={() => handleAccept(report._id)}
                        className="btn button_left"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(report._id)}
                        className="btn button_right"
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
