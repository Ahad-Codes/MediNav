import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/ManageActiveReportersAdmin.css";

export default function ManageActiveReportersAdmin() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/user/repList");
        setUserList(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const blockHandler = async (number) => {
    try {
      await axios.post(`http://localhost:3001/user/blockRep`, { number });
      const response = await axios.get("http://localhost:3001/user/repList");
      setUserList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const unblockHandler = async (number) => {
    try {
      await axios.post(`http://localhost:3001/user/approveRep`, { number });
      const response = await axios.get("http://localhost:3001/user/repList");
      setUserList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ManageActiveReportersAdmin">
      <div className="main_box">
        <div className="updateProfileHeading">
          <div className="heading_items">
            <h1>Manage Active Reporters</h1>
            <div className="heading_features">
              <form role="search">
                <input
                  className="form-control search_box"
                  type="search"
                  placeholder="Search for Reporter"
                  aria-label="Search"
                />
              </form>
              <p>
                <button
                  className="btn heading_button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  filter
                </button>
              </p>
            </div>
          </div>
          <div className="collapse" id="collapseExample">
            <div className="card card-body filter_box">
              need to create filter options here
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
              {userList.length > 0 &&
                userList.map((obj) => (
                  <tr key={obj.id} className="table_row">
                    <td className="non_button_item">{obj.name}</td>
                    <td className="non_button_item">{obj.email}</td>
                    <td className="non_button_item">{obj.cnic}</td>
                    <td className="non_button_item">{obj.number}</td>
                    <td>
                      <button
                        className={
                          obj.approved === 5
                            ? "table_button Accepted"
                            : "table_button Rejected"
                        }
                        onClick={() => {
                          obj.approved === 5
                            ? unblockHandler(obj.number)
                            : blockHandler(obj.number);
                        }}
                      >
                        {obj.approved === 5 ? "Unblock" : "Block"}
                      </button>
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
