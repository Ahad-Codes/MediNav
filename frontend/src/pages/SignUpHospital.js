import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/SignUpHospital.css";
import ReplyIcon from "@mui/icons-material/Reply";
import mediNavLogo from "../images/medinav_logo.png";

export default function SignUpHospital() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [landline, setLandline] = useState("");
    const [p_number, setPNumber] = useState("");
    const [s_number, setSNumber] = useState("");
    const [doctors, setDoctors] = useState("");
    const [ambulances, setAmbulances] = useState("");
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const navigate = useNavigate();

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
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3001/user/signupHosp",
                {
                    name,
                    address,
                    email,
                    password,
                    landline,
                    p_number,
                    s_number,
                    doctors,
                    ambulances,
                    longitude,
                    latitude,
                }
            );
            alert(response.data.message)

            if (response.data.success == 1) {

                navigate("/Login");
            } 

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="SignUpHospital">
            <div className="main_box">
                <div className="form_box">
                    <Link to="/" className="back_link">
                        <ReplyIcon fontSize="small" />
                    </Link>
                    <div className="form_heading">
                        <h3>Sign up</h3>
                        <img
                            className="img_logo"
                            src={mediNavLogo}
                            alt="Logo"
                        />
                        <h3 className="logo_text"> Medinav</h3>
                    </div>

                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="mb-3 form_row">
                            <label for="exampleInputEmail1">
                                Hospital Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3 form_row">
                            <label for="exampleInputEmail1" clas>
                                Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter your address"
                                value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3 form_row">
                            <label for="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                        <div class="col-md-6 form_row">
                            <label for="inputEmail4">Email</label>
                            <input
                                type="email"
                                class="form-control"
                                id="inputEmail4"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div class="col-md-6 form_row">
                            <label for="inputPassword4">Landline Number</label>
                            <input
                                type="number"
                                class="form-control"
                                id="inputPassword4"
                                value={landline}
                                onChange={(e) => {
                                    setLandline(e.target.value);
                                }}
                            />
                        </div>
                        <div class="col-md-6 form_row">
                            <label for="inputEmail4">
                                Primary Mobile Number
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                id="inputEmail4"
                                value={p_number}
                                onChange={(e) => {
                                    setPNumber(e.target.value);
                                }}
                            />
                        </div>
                        <div class="col-md-6 form_row">
                            <label for="inputPassword4">
                                Secondary Mobile Number
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                id="inputPassword4"
                                value={s_number}
                                onChange={(e) => {
                                    setSNumber(e.target.value);
                                }}
                            />
                        </div>
                        <div class="col-md-6 form_row">
                            <label for="inputEmail4">
                                Number of On Call Doctors
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                id="inputEmail4"
                                value={doctors}
                                onChange={(e) => {
                                    setDoctors(e.target.value);
                                }}
                            />
                        </div>
                        <div class="col-md-6 form_row">
                            <label for="inputPassword4">
                                Number of Operational Ambulances
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                id="inputPassword4"
                                value={ambulances}
                                onChange={(e) => {
                                    setAmbulances(e.target.value);
                                }}
                            />
                        </div>
                        <div className="bring_child_to_center">
                            <button
                                type="submit"
                                className="btn btn-primary button"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>

                    <p className="bring_link_to_center alternate_links_p">
                        Already an account?{" "}
                        <Link className="alternate_links" to="/LogIn">
                            Log In
                        </Link>
                    </p>
                    <p className="bring_link_to_center alternate_links_p">
                        <Link className="alternate_links" to="/SignUp/Reporter">
                            Sign up
                        </Link>{" "}
                        as Reporter
                    </p>
                    <p className="bring_link_to_center alternate_links_p">
                        <Link className="alternate_links" to="/SignUp/Warden">
                            Sign up
                        </Link>{" "}
                        as Warden
                    </p>
                </div>
            </div>
        </div>
    );
}
