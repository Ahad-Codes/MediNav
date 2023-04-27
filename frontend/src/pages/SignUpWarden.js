import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/SignUpReporter.css";
import ReplyIcon from "@mui/icons-material/Reply";
import mediNavLogo from "../images/medinav_logo.png";

export default function SignUpWarden() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        if (name==="" || number==="" || address==="" || password==="" || email==="" ) {
            alert("Please fill in all fields.");
            return;
        }

        if (!/^[a-zA-Z\s]*$/.test(name)) {
            alert("Please enter a valid name.");
            return;
        }
    
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            alert("Password must contain at least 8 characters, including at least one letter and one number.");
            return;
        }

        if (!/^[0-9]{11}$/.test(number)) {
            alert("Please enter a valid primary phone number.");
            return;
        }

        

        try {
            await axios.post(
                "http://medinav-backend-8gvrb.ondigitalocean.app/user/signupWard",
                {
                    name,
                    number,
                    email,
                    address,
                    password,
                }
            );
            navigate("/Login");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="SignUpReporter">
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
                    <form onSubmit={onSubmit}>
                        <div className="mb-3 form_row">
                            <label for="exampleInputEmail1">Full Name</label>
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
                            <label for="exampleInputEmail1">
                                Contact Number
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="03XXXXXXXXX"
                                value={number}
                                onChange={(e) => {
                                    setNumber(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3 form_row">
                            <label for="exampleInputEmail1">
                                Department Address
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
                            <label for="exampleInputEmail1">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
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
                        <Link className="alternate_links" to="/SignUp/Hospital">
                            Sign up
                        </Link>{" "}
                        as Hospital
                    </p>
                    <p className="bring_link_to_center alternate_links_p">
                        <Link className="alternate_links" to="/SignUp/Reporter">
                            Sign up
                        </Link>{" "}
                        as Reporter
                    </p>
                </div>
            </div>
        </div>
    );
}
