import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../css/ReportHistoryAdmin.css"

export default function ReportHistoryAdmin() {

    return (
        <div className="ReportHistoryAdmin">
            <div className="main_box">
                <div className="updateProfileHeading">
                    <div className="heading_items">
                        <h1>Report History</h1>
                        <div className="heading_features">
                            <form  role="search" >
                                <input className="form-control search_box" type="search" placeholder="Search for Reporter" aria-label="Search"/>
                            </form>
                            <p>
                                <button className="btn heading_button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
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
                            <tr >
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Incident Location</th>
                                <th scope="col">Reported By</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody >
                            {/* 3 different type of buttons, we will identify the type of button by adding a conditional on button variable or giving different class type */}
                            <tr className="table_row">
                                <td className="non_button_item">obj.date</td>
                                <td className="non_button_item">obj.time</td>
                                <td className="non_button_item">obj.name</td>
                                <td className="non_button_item">obj.hospital</td>
                                <td>
                                    <button className="table_button Pending">Pending</button>
                                </td>
                            </tr>
                            <tr className="table_row">
                                <td className="non_button_item">obj.date</td>
                                <td className="non_button_item">obj.time</td>
                                <td className="non_button_item">obj.name</td>
                                <td className="non_button_item">obj.hospital</td>
                                <td>
                                    <button className="table_button Rejected">Rejected</button>
                                </td>
                            </tr>
                            <tr className="table_row">
                                <td className="non_button_item">obj.date</td>
                                <td className="non_button_item">obj.time</td>
                                <td className="non_button_item">obj.name</td>
                                <td className="non_button_item">obj.hospital</td>
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