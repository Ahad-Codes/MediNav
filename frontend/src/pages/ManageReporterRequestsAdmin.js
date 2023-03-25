import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../css/ManageReporterRequestsAdmin.css";

export default function ManageReporterRequestsAdmin() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [notApprovedList, setNotApprovedList] = useState([]);

  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("userType");
    navigate("/");
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/user/notApprovedRep"
        );
        setNotApprovedList(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const approveHandler = async (number) => {
    try {
      await axios.post(`http://localhost:3001/user/approveRep`, { number });
      const response = await axios.get(
        "http://localhost:3001/user/notApprovedRep"
      );
      setNotApprovedList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const rejectHandler = async (number) => {
    try {
      await axios.post(`http://localhost:3001/user/rejectRep`, { number });
      const response = await axios.get(
        "http://localhost:3001/user/notApprovedRep"
      );
      setNotApprovedList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ManageReporterRequestsAdmin">
      <button onClick={logout}>Logout</button>
      <div className="main_box">
        <div className="updateProfileHeading">
          <div className="heading_items">
            <h1>Manage Reporter Requests</h1>
            <div className="heading_features">
              <form role="search">
                <input
                  className="form-control search_box"
                  type="search"
                  placeholder="Search for Reporter"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="table_box">
          <table className="table info_table table-borderless table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">CNIC</th>
                <th scope="col">Phone Number</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* 3 different type of buttons, we will identify the type of button by adding a conditional on button variable or giving different class type */}
              {notApprovedList.length > 0 &&
                notApprovedList.map((obj) => (
                  <tr key={obj.id} className="table_row">
                    <td className="non_button_item">{obj.name}</td>
                    <td className="non_button_item">{obj.email}</td>
                    <td className="non_button_item">{obj.cnic}</td>
                    <td className="non_button_item">{obj.number}</td>
                    <td>
                      <div className="btn-group">
                        <button
                          className="btn button_left"
                          onClick={() => approveHandler(obj.number)}
                        >
                          Accept
                        </button>
                        <button
                          className="btn button_right"
                          onClick={() => rejectHandler(obj.number)}
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
