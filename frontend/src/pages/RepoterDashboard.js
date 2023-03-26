import { useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "../css/TempDashboard.css"

export default function TempDashboard() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBwZxRqiX2YPGiWI2SyqD8DIdqofz7OACM", libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (<div className="MainDashboard">
  <div className="main_box">
      <div className="updateProfileHeading">
          <h1>Main Dashboard</h1>
      </div>
      <div className="table_box">
          <Map/>
      </div>
  </div>
</div>
);
}

function Map() {
  
    console.log("Loaded")
  return (
    <GoogleMap zoom={14} center={{ lat:31.465001, lng:74.393663}} mapContainerClassName="map-container"/>
      

  );
}