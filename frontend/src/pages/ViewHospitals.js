import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/LandingPage.css";
import Cookies from "js-cookie";

export default function ViewHospitals() {
    const [hospitals, setHospitals] = useState([]);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (!Cookies.get("access_token")) {
            navigate("/");
        } else {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);

                        setLoading(false)
                        console.log(latitude, longitude); // This will log the previous values of latitude and longitude
                        getHospitals();
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        }
    }, [latitude, longitude]);


    // useEffect(() => {
    //     if (latitude && longitude) {
    //         getHospitals();
    //     }
    // }, [latitude, longitude]);



    const getHospitals = () => {

        if (latitude && longitude) {

            console.log("Fetching hopsitals!")

            axios.post(`http://localhost:3001/report/viewhospitals`, {
                latitude,
                longitude,
            })
                .then((response) => {
                    setHospitals(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });


        };

    };



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
                            {hospitals.map((hospital) => (
                                <tr key={hospital.id} className="table_row">
                                    <td className="non_button_item">
                                        {hospital.name}
                                    </td>
                                    <td className="non_button_item">
                                        {hospital.landline}
                                    </td>
                                    <td className="non_button_item">
                                        {hospital.email}
                                    </td>
                                    <td className="non_button_item">
                                        {hospital.ambulances}
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