import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/ViewBroadcasts.css";

export default function ViewBroadcasts() {
    const [broadcasts, setBroadcasts] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://medinav-backend-8gvrb.ondigitalocean.app/report/brooadcastList"
            )
            .then((response) => {
                console.log(response.data);
                setBroadcasts(response.data);
                console.log();
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="ReportHistoryReporter">
            <div className="main_box">
                <div className="updateProfileHeading">
                    <h1>View Broadcasts</h1>
                </div>
                <div className="table_box">
                    <table className="table info_table table-borderless table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Incident Location</th>
                                <th scope="col">Title</th>
                                <th scope="col">Affected</th>
                                <th scope="col">Reported By</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {broadcasts.map((broadcast) => (
                                <tr key={broadcast._id} className="table_row">
                                    <td className="non_button_item">
                                        {broadcast.date}
                                    </td>
                                    <td className="non_button_item">
                                        {broadcast.time}
                                    </td>
                                    <td className="non_button_item">
                                        {broadcast.location}
                                    </td>
                                    <td className="non_button_item">
                                        {broadcast.title}
                                    </td>
                                    <td className="non_button_item">
                                        {broadcast.numVictims}
                                    </td>
                                    <td className="non_button_item">
                                        {broadcast.title}
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
