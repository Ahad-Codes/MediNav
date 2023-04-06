import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/ReportHistoryHospital.css";
import Cookies from "js-cookie";

export default function ReportHistoryHospital() {
    const navigate = useNavigate();

    const [reportData, setReportData] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                console.log("this is working");
                const response = await axios.post(
                    "http://localhost:3001/report/hospitalreportHistory",
                    {
                        hospital_id: "641f364e6ed6bec790c04763",
                    }
                );
                console.log(response);
                setReportData(response.data);
            } catch (error) {
                console.log(error);
            }
        };


        if (!Cookies.get("access_token")) {
            navigate("/");
          } else if (window.localStorage.getItem("userType") !== 'Hospital') {
            navigate("/");
          }
          else {
          fetchReports();
          }


    }, []);

    return (
        <div className="ReportHistoryHospital">
            <div className="main_box">
                <div className="updateProfileHeading">
                    <h1>Report History</h1>
                </div>
                <div className="table_box">
                    <table className="table info_table table-borderless table-hover">
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
                            {reportData.map((report) => (
                                <tr className="table_row" key={report.reportId}>
                                    <td className="non_button_item">
                                        {report.date}
                                    </td>
                                    <td className="non_button_item">
                                        {report.time}
                                    </td>
                                    <td className="non_button_item">
                                        {report.location}
                                    </td>
                                    <td className="non_button_item">
                                        {report.reporter}
                                    </td>
                                    <td>
                                        {report.stat === "open" && (
                                            <button className="table_button Pending">
                                                Pending
                                            </button>
                                        )}
                                        {report.stat === "rejected" && (
                                            <button className="table_button Rejected">
                                                Rejected
                                            </button>
                                        )}
                                        {report.stat === "accepted_police" && (
                                            <button className="table_button Accepted">
                                                Accepted
                                            </button>
                                        )}
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
