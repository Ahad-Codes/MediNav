import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mediNavLogo from "../images/medinav_logo.png";
import "../css/Navbar.css";
import { useCookies } from "react-cookie";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "js-cookie";

function Navbar(props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const [cookies, setCookies, removeCookie] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const logout = async () => {
        removeCookie("access_token");
        window.localStorage.removeItem("userID");
        window.localStorage.removeItem("userType");
        handleMenuClose();
        navigate("/");
    };

    const newString = props.myString;
    return (
        <nav className="navbar navbar-expand-lg custom">
            <div className="container-fluid">
                <a className="navbar-brand custom" href="/">
                    <img src={mediNavLogo} alt="Logo" />
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
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link
                                to={
                                    window.localStorage.getItem("userType") ===
                                    null
                                        ? "/LogIn"
                                        : "/" +
                                          window.localStorage.getItem(
                                              "userType"
                                          )
                                }
                                className="nav-link "
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={
                                    window.localStorage.getItem("userType") ===
                                    null
                                        ? "/LogIn"
                                        : window.localStorage.getItem(
                                              "userType"
                                          ) === "Reporter"
                                        ? "/Reporter/ReportAccident"
                                        : "/LogIn"
                                }
                                className="nav-link "
                                onClick={() => {
                                    if (
                                        window.localStorage.getItem(
                                            "userType"
                                        ) !== "Reporter"
                                    ) {
                                        logout();
                                    }
                                }}
                            >
                                Report Incident
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ViewBroadcasts" className="nav-link ">
                                View Broadcasts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={
                                    window.localStorage.getItem("userType") ===
                                    null
                                        ? "/LogIn"
                                        : window.localStorage.getItem(
                                              "userType"
                                          ) === "Warden"
                                        ? window.location.pathname
                                        : "/" +
                                          window.localStorage.getItem(
                                              "userType"
                                          ) +
                                          "/ReportHistory"
                                }
                                className="nav-link "
                            >
                                View Report History
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2 search-input"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>
                    <PhoneInTalkIcon />
                    <div className="nav-icon">1122</div>
                    {window.localStorage.getItem("userType") !== null ? (
                        <>
                            <IconButton onClick={handleMenuOpen}>
                                <AccountCircleOutlinedIcon fontSize="large" />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={logout}>Logout</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        handleMenuClose();
                                        navigate(
                                            window.localStorage.getItem(
                                                "userType"
                                            ) === "Reporter"
                                                ? "/Reporter/UpdateProfile"
                                                : window.localStorage.getItem(
                                                      "userType"
                                                  ) === "Hospital"
                                                ? "/Hospital/UpdateProfile"
                                                : window.location.pathname
                                        );
                                    }}
                                >
                                    UpdateProfile
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <Link to="/LogIn">
                            <button className="nav_bar_button ">Log In</button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
