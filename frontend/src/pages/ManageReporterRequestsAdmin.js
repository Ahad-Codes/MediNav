import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../css/ManageReporterRequestsAdmin.css"

export default function ManageReporterRequestsAdmin() {

    return (
        <div className="ManageReporterRequestsAdmin">
            <div className="main_box">
                <div className="updateProfileHeading">
                    <div className="heading_items">
                        <h1>Manage Reporter Requests</h1>
                        <div className="heading_features">
                            <form role="search" >
                                <input className="form-control search_box" type="search" placeholder="Search for Reporter" aria-label="Search" />
                            </form>
                            
                        </div>
                    </div>
                   

                </div>

                <div className="table_box">
                    <table className="table info_table table-borderless table-hover">
                        <thead>
                            <tr >
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">CNIC</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody >
                            {/* 3 different type of buttons, we will identify the type of button by adding a conditional on button variable or giving different class type */}
                            <tr className="table_row">
                                <td className="non_button_item">obj.name</td>
                                <td className="non_button_item">obj.email</td>
                                <td className="non_button_item">obj.cnic</td>
                                <td className="non_button_item">obj.phone_number</td>
                                <td>
                                    <div className="btn-group">
                                        <button  className="btn button_left">Accept</button>
                                        <button  className="btn button_right">Reject</button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="table_row">
                                <td className="non_button_item">obj.name</td>
                                <td className="non_button_item">obj.email</td>
                                <td className="non_button_item">obj.cnic</td>
                                <td className="non_button_item">obj.phone_number</td>
                                <td>
                                    <div className="btn-group">
                                        <button  className="btn button_left">Accept</button>
                                        <button  className="btn button_right">Reject</button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="table_row">
                                <td className="non_button_item">obj.name</td>
                                <td className="non_button_item">obj.email</td>
                                <td className="non_button_item">obj.cnic</td>
                                <td className="non_button_item">obj.phone_number</td>
                                <td>
                                    <div className="btn-group">
                                        <button  className="btn button_left">Accept</button>
                                        <button  className="btn button_right">Reject</button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}