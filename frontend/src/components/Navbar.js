import React from "react";
import { Link, useNavigate } from "react-router-dom";
import mediNavLogo from "../images/medinav_logo.png";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import "../css/Navbar.css";
import { useCookies } from "react-cookie";

function Navbar(props) {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("userType");
    navigate("/");
  };

  const newString = props.myString;
  return (
    <nav className="navbar navbar-expand-lg custom">
      <div className="container-fluid">
        <a className="navbar-brand custom " href="/">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                to={newString === "Reporter" ? "/" + newString : "/"}
                className="nav-link "
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={
                  newString === "Reporter"
                    ? "/" + newString + "/ReportAccident"
                    : "/LogIn"
                }
                className="nav-link "
              >
                Report Incident
              </Link>
            </li>
            <li className="nav-item">
    

            <a className="nav-link" href="/ViewBroadcasts">
            View Broadcasts

            </a>
           
            </li>
            <li className="nav-item">
            <Link
                to={
                  newString === "Reporter"
                    ? "/" + newString + "/ReportHistory"   // change with report history
                    : "/LogIn"
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
          {newString === "Reporter" ? (
            <button className="nav_bar_button " onClick={logout}>
              Log Out
            </button>
          ) : (
            <Link to="LogIn">
              <button className="nav_bar_button ">Log In</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
