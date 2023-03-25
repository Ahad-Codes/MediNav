import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MediNav
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Report Incident
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  View Broadcasts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  View Report History
                </a>
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
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
            <Link to="LogIn">
              <button className="nav_bar_button ">Log In</button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="main_page">
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
            <div className="col heading_box">
              <h1 id="main_heading">Your Safety,</h1>
              <h1 id="guaranteed">Guaranteed.</h1>
              <button className="button">
                <h1>REPORT INCIDENT</h1>
              </button>
            </div>
            <div className="col">
              <div className="text_box">
                <h1 id="main_text">
                  Delayed Emergency Response Services cause up to 10,000+ deaths
                  around the world each year
                </h1>
              </div>
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

      <div id="mission_statement_box">
        <h1>Mission Statement</h1>
        <p>
          At Medinav, our mission is to revolutionize the way that medical
          assistance is provided to accident victims. We understand that
          accidents can be traumatic, and every second counts in getting the
          necessary medical help to those in need. Our app is designed to
          connect victims of accidents with the nearest hospitals quickly and
          efficiently, ensuring that they receive the care they need as soon as
          possible.
        </p>
        <p>
          Our team at Medinav is dedicated to creating a seamless experience for
          accident victims and medical professionals alike. Our innovative
          technology enables us to accurately route victims to the most
          appropriate hospital, taking into consideration their medical needs
          and the availability of medical resources. By leveraging technology in
          this way, we hope to help bridge the gap between accident victims and
          medical facilities, improving the efficiency and effectiveness of
          emergency medical care.
        </p>
        <p>
          We believe that everyone deserves access to quality medical care,
          regardless of their location or the circumstances of their accident.
          Our app aims to make this a reality by making medical assistance more
          accessible and efficient. Through our dedication to innovation,
          reliability, and compassion, we strive to become a leader in the
          healthcare industry, providing a valuable service that improves the
          lives of those in need.
        </p>
        <p>
          In summary, at Medinav, our mission is to provide timely, efficient,
          and compassionate medical assistance to those who need it most. We are
          committed to using our technology to bridge the gap between accident
          victims and medical facilities, improving the quality and
          accessibility of emergency medical care for all.
        </p>
        <button className="button">
          <h1>Contact Us</h1>
        </button>
      </div>

      {/* <div>
                adisnhda
            </div> */}
    </div>
  );
}
