import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/UpdateProfileReporter.css";
import Cookies from "js-cookie";

export default function UpdateProfileReporter() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!Cookies.get("access_token")) {
            navigate("/");
        }
    });

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
                                <label for="exampleInputEmail1">
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
                                <label for="exampleInputEmail1">
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
                                <label for="exampleInputEmail1">
                                    New Password
                                </label>
                                <input
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
