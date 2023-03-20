import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../css/Reporter.css"


export default function ReporterPage() {


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MediNav</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Report Incident</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">View Broadcasts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">View Report History</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>
                </div>
            </nav>


            <div className="main_page_2">

                <div className="container text-center">
                    <div className="col heading_box">
                        <h1 id="main_heading_2">Report History</h1>
                    </div>
                </div>

                
                <div class="container text-center partner_boxes_2">
                
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                        
                        {/* <div class="col">Date</div>
                        <div class="col">Time</div>
                        <div class="col">Incident Location</div>
                        <div class="col">Hospital</div> */}

                        <table>
                            <tbody>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Incident Location</th>
                                <th>Hospital</th>
                            </tr>
                            <tr>
                                <td>20-03-2023</td> 
                                <td>8:52</td> 
                                <td>LUMS </td> 
                                <td>National Hospital</td> 

                            </tr>

                            <tr>
                                <td>20-03-2023</td> 
                                <td>9:04</td> 
                                <td>M BLock, DHA Phase 1 </td> 
                                <td>National Hospital</td> 

                            </tr>

                            <tr>
                                <td>20-03-2023</td> 
                                <td>10:11</td> 
                                <td>H BLock, DHA Phase 1 </td> 
                                <td>National Hospital</td> 

                            </tr>

                            </tbody>
                        </table>

                    </div>
                </div>

            </div>


        </div>
    )
}