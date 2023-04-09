import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../css/LogIn.css";
import mediNavLogo from "../images/medinav_logo.png";
import ReplyIcon from "@mui/icons-material/Reply";

export default function LogIn() {
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");

    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://medinav-backend-8gvrb.ondigitalocean.app/user/login",
                {
                    number,
                    password,
                }
            );
            if (response.data.message) {
                alert(response.data.message);
            } else {
                setCookies("access_token", response.data.token);
                window.localStorage.setItem("userID", response.data.userID);
                window.localStorage.setItem("userType", response.data.type);
                navigate(
                    response.data.type === "Hospital"
                        ? "/Hospital"
                        : response.data.type === "Warden"
                        ? "/Police"
                        : response.data.type === "Admin"
                        ? "/Admin"
                        : "/Reporter"
                );
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="LogIn">
            <div id="bg_video">
                {/* <iframe
          frameborder="0"
          height="100%"
          width="100%"
          src="https://youtube.com/embed/ID?autoplay=1&controls=0&showinfo=0&autohide=1"
        >
        </iframe> */}
                <iframe
                    frameborder="0"
                    height="100%"
                    width="100%"
                    src="https://www.youtube.com/embed/xUmU_mVH_34?controls=0&autoplay=1&mute=1&amp;start=3"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>

            <div className="main_box">
                <div className="form_box">
                    <Link to="/" className="back_link">
                        <ReplyIcon fontSize="small" />
                    </Link>
                    <div className="form_heading">
                        <h3>Login to</h3>
                        <img
                            className="img_logo"
                            src={mediNavLogo}
                            alt="Logo"
                        />
                        <h3 className="logo_text"> Medinav</h3>
                    </div>
                    <form onSubmit={onSubmit}>
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
                                Log In
                            </button>
                        </div>
                    </form>

                    <p className="bring_link_to_center alternate_links_p">
                        Don't have an accout?{" "}
                        <Link className="alternate_links" to="/SignUp/Reporter">
                            Sign Up
                        </Link>
                    </p>
                    <p className="bring_link_to_center alternate_links_p">
                        Forgot Your Password?{" "}
                        <Link className="alternate_links">Click Here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
