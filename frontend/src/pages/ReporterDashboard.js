import { useMemo, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../css/TempDashboard.css";

export default function TempDashboard() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    let navigate = useNavigate();

    useEffect(() => {
        if (!Cookies.get("access_token")) {
            navigate("/");
        } else {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        }
    }, []);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBwZxRqiX2YPGiWI2SyqD8DIdqofz7OACM",
        libraries: ["places"],
    });

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <div className="MainDashboard">
            <div className="main_box">
                <div className="updateProfileHeading">
                    <h2 className="heading">Live Location</h2>
                </div>
                <Map latitude={latitude} longitude={longitude} />
            </div>
        </div>
    );
}

function Map(props) {
    const { latitude, longitude } = props;
    const navigate = useNavigate();

    const onViewBroadcastClick = () => {
        navigate("ViewBroadcasts");
    };

    const onViewHospitalClick = () => {
        navigate("ViewHospitals");
    };

    console.log("Loaded");
    return (
        <div className="table_box">
            <div className="map_box">
                <GoogleMap
                    zoom={14}
                    center={{ lat: latitude, lng: longitude }}
                    mapContainerClassName="map-container1"
                />
            </div>
            <div className="content_box">
                <div className="context_box_heading">
                    <h3>Medinav - Dashboard</h3>
                </div>
                <div className="button_box">
                    <button className="button" onClick={onViewBroadcastClick}>
                        View Broadcasts
                    </button>

                    <button
                        className="button"
                        onClick={() => navigate("ReportAccident")}
                    >
                        Report Incident
                    </button>

                    <button className="button" onClick={onViewHospitalClick}>
                        View Nearest Hospitals
                    </button>
                </div>
            </div>
        </div>
    );
}
