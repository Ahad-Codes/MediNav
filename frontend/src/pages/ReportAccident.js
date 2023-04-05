import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/ReportAccident.css";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

function Map(props) {
  const { latitude, longitude } = props;
  return (
    <div>
      <GoogleMap
        zoom={14}
        center={{ lat: latitude, lng: longitude }}
        mapContainerClassName="map-container"
      />
    </div>
  );
}

function ReportAccident() {
  const [accident, setAccident] = useState("");
  const [landmark, setLandmark] = useState("");
  const [victims, setVictims] = useState("");
  const [details, setDetails] = useState("");

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
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
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var userID = window.localStorage.getItem("userID")

    try {
      const response = await axios.post("http://localhost:3001/report", {

        userID,
        accident,
        landmark,
        victims,
        details,
        longitude,
        latitude,
      });
      alert(response.data.longitude);
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBwZxRqiX2YPGiWI2SyqD8DIdqofz7OACM",
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="ReportAccident">
      <div className="content-box">
        <form className="form-box" onSubmit={handleSubmit}>
          <h2>Report An Accident</h2>
          <div className="form-group">
            <label for="accident">Type of Accident</label>
            <input
              type="text"
              id="accident"
              name="accident"
              placeholder="Type of Accident"
              value={accident}
              onChange={(e) => {
                setAccident(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="landmark">Nearest Landmark</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              placeholder="Nearest Landmark"
              value={landmark}
              onChange={(e) => {
                setLandmark(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="numVictims">Number of Affected Victims</label>
            <input
              type="number"
              id="numVictims"
              name="numVictims"
              placeholder="Number of Victims"
              value={victims}
              onChange={(e) => {
                setVictims(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="message">Additional Details</label>
            <input
              type="text"
              id="details"
              name="details"
              placeholder="Additional Details"
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
            />
          </div>
          <button type="submit">REPORT ACCIDENT</button>
        </form>
        <div className="info-box">
          <Map latitude={latitude} longitude={longitude} />
        </div>
      </div>
    </div>
  );
}

export default ReportAccident;
