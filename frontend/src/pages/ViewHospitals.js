import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/LandingPage.css";
import Cookies from "js-cookie";

export default function ViewHospitals() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!Cookies.get("access_token")) {
            navigate("/");
        }
    }, []);

    return (
        <div className="ReportHistoryReporter">
            <div className="main_box">
                <div className="updateProfileHeading">
                    <h1>View Hospitals</h1>
                </div>
                <div className="table_box">
                    <table className="table info_table table-borderless table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Contact landline</th>
                                <th scope="col">Contact email</th>
                                <th scope="col">Ambulances</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* 3 different type of buttons, we will identify the type of button by adding a conditional on button variable or giving different class type */}
                            <tr className="table_row">
                                <td className="non_button_item">obj.name</td>
                                <td className="non_button_item">
                                    obj.landline
                                </td>
                                <td className="non_button_item">obj.email</td>
                                <td className="non_button_item">
                                    obj.ambulances
                                </td>
                            </tr>
                            <tr className="table_row">
                                <td className="non_button_item">obj.name</td>
                                <td className="non_button_item">
                                    obj.landline
                                </td>
                                <td className="non_button_item">obj.email</td>
                                <td className="non_button_item">
                                    obj.ambulances
                                </td>
                            </tr>
                            <tr className="table_row">
                                <td className="non_button_item">obj.name</td>
                                <td className="non_button_item">
                                    obj.landline
                                </td>
                                <td className="non_button_item">obj.email</td>
                                <td className="non_button_item">
                                    obj.ambulances
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
