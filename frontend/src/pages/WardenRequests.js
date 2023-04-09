import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/WardenRequests.css";

export default function WardenRequests() {
    const navigate = useNavigate();
    const [reportData, setReportData] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                // const token = 1234 //localStorage.getItem("token");
                const response = await axios.post(
                    "https://medinav-backend-8gvrb.ondigitalocean.app/report/reportHistory",
                    {
                        reporter_id: 9876,
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
        } else if (window.localStorage.getItem("userType") !== "Warden") {
            navigate("/");
        } else {
            fetchRequests();
        }
    }, []);

    return (
        <div className="ReportHistoryReporter">
            <div className="main_box">
                <div className="updateProfileHeading">
                    <h1>Report History</h1>
                </div>
                <div className="table_box">
                    <table className="table info_table table-borderless table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Report ID</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Incident Location</th>
                                <th scope="col">Hospital</th>
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
                                        {report.hospital}
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
