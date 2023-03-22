import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../css/PendingRequestsHospital.css"

export default function PendingRequestsHospital() {

    return (
        <div className="PendingRequestsHospital">

            <div className="main_box">
                <div>
                    <div className="updateProfileHeading">
                        <h1>Pending Requests</h1>
                    </div>
                    <table class="table info_table">
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
                            <tr>
                                <td>obj.date</td>
                                <td>obj.time</td>
                                <td>obj.name</td>
                                <td>obj.reporter</td>
                                <td>
                                    <button className="table_button Pending">Pending</button>
                                </td>
                            </tr>
                            <tr>
                                <td>obj.date</td>
                                <td>obj.time</td>
                                <td>obj.name</td>
                                <td>obj.reporter</td>
                                <td>
                                    <button className="table_button Rejected">Rejected</button>
                                </td>
                            </tr>
                            <tr>
                                <td>obj.date</td>
                                <td>obj.time</td>
                                <td>obj.name</td>
                                <td>obj.reporter</td>
                                <td>
                                    <button className="table_button Accepted">Accepted</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    )
}