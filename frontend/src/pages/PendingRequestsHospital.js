import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/PendingRequestsHospital.css";

export default function PendingRequestsHospital() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await axios.get("http://localhost:3001/user/hospitalPending");
      setRequests(res.data);
    };
    fetchRequests();
  }, []);

  const acceptRequest = async (id) => {
    try {
      const res = await axios.put(`http://localhost:3001/user/hospitalPendingAccepted/${id}`);
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request._id !== id)
      );
     
    } catch (error) {
      console.error(error);
    
    }
  };

  const rejectRequest = async (id) => {
    try {
      const res = await axios.put(`http://localhost:3001/user/hospitalPendingRejected/${id}`);
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request._id !== id)
      );
     
    } catch (error) {
      console.error(error);
     
    }
  };

  const setDateFormat = (today) =>  {

    var today = new Date(today)
    console.log(today)

    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' -' + time;


    return dateTime

  }


  return (
    <div className="PendingRequestsHospital">
      <div className="main_box">
        <div className="updateProfileHeading">
          <h1>Pending Requests</h1>
        </div>
        <div className="table_box">
          <table className="table info_table table-borderless table-hover">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Victims</th>
                <th scope="col">Nearest Landmark</th>
                <th scope="col">Additional Details</th>
                <th scope="col">Posted</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request._id} className="table_row">
                  <td className="non_button_item">{request.title}</td>
                  <td className="non_button_item">{request.numVictims}</td>
                  <td className="non_button_item">{request.nearest_landmark}</td>
                  <td className="non_button_item">{request.description}</td>
                  <td className="non_button_item">{setDateFormat(request.createdAt)}</td>
                  <td>
                    <div className="btn-group">
                      <button className="btn button_left" onClick={() => acceptRequest(request._id)}>Accept</button>
                      <button className="btn button_right" onClick={() => rejectRequest(request._id)}>Reject</button>
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
