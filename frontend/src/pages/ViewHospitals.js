import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/LandingPage.css";

export default function ViewHospitals() {
  return (
    <div className="LandingPage">
      

      <div className="main_page">
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
            <div className="col heading_box">
              <h1 id="main_heading">Viewing Hospitals</h1>              
            </div>
          </div>
        </div>

        <div class="container text-center partner_boxes">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>

    </div>
  );
}
