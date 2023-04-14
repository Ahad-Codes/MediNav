import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/UpdateProfileReporter.css";
import Cookies from "js-cookie";

export default function UpdateProfileReporter() {
    const navigate = useNavigate();

    const [displayName, setDisplayName] = useState("")
    const [number, setNumber] = useState("")
    const [newPassword, setNewPassword] = useState("")

    useEffect(() => {
        if (!Cookies.get("access_token")) {
            navigate("/");
        } else if (window.localStorage.getItem("userType") !== "Reporter") {
            navigate("/");
        }
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        var user_id = window.localStorage.getitem("userID");
        try {
            const updatedReporterData = {
                user_id,
                displayName,
                number,
                newPassword
            };
            const response = await axios.put(
                "https://medinav-backend-8gvrb.ondigitalocean.app/user/updateReporters",
                updatedReporterData
            );
            console.log(response.data);
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="UpdateProfileReporter">
            <div className="main_box">
                <div>
                    <div className="updateProfileHeading">
                        <h1>Update Profile</h1>
                    </div>
                    <div className="form_box">
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="mb-3 form_row">
                                <label for="exampleInputEmail1">
                                    Display Name
                                </label>
                                <input onChange={(e) => {setDisplayName(e.target.value)}}
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder=""
                                />
                            </div>
                            <div className="mb-3 form_row">
                                <label for="exampleInputEmail1">
                                    Contact Number
                                </label>
                                <input onChange={(e) => {setNumber(e.target.value)}}
                                    type="number"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder=""
                                />
                            </div>
                            <div className="mb-3 form_row">
                                <label for="exampleInputEmail1">
                                    New Password
                                </label>
                                <input onChange={(e) => {setNewPassword(e.target.value)}}
                                    type="password"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Enter New Password"
                                />
                            </div>
                            <div className="mb-3 form_row">
                                <label for="exampleInputEmail1">
                                    Re-enter New Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Re-enter New Password"
                                />
                            </div>
                            <div className="mb-3 form_row">
                                <label for="exampleInputEmail1">
                                    Enter Old Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Enter Old Password"
                                />
                            </div>

                            <div className="bring_child_to_center">
                                <div>
                                    <button
                                        type="submit"
                                        className="btn updateButton"
                                    >
                                        Update Profile
                                    </button>
                                </div>
                                <div>
                                    <button 
                                        type="submit"
                                        className="btn cancelButton"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
