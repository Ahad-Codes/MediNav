import { useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";

import "../css/TempDashboard.css";

export default function TempDashboard() {
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
        <div className="table_box">
          <Map />
        </div>
      </div>
    </div>
  );
}

function Map() {
  const navigate = useNavigate();

  const onViewBroadcastClick = () => {
    navigate("ViewBroadcasts");
  };

  const onViewHospitalClick = () => {
    navigate("ViewHospitals");
  };

  console.log("Loaded");
  return (
    <div>
      <div>
        <GoogleMap
          zoom={14}
          center={{ lat: 31.465001, lng: 74.393663 }}
          mapContainerClassName="map-container"
        />
      </div>

      <p>
        <button className="button" onClick={onViewBroadcastClick}>
          View Broadcasts
        </button>

        <button className="button" onClick={() => navigate("ReportAccident")}>
          Report Incident
        </button>

        <button className="button" onClick={onViewHospitalClick}>
          View Nearest Hospitals
        </button>
      </p>
    </div>
  );
}
