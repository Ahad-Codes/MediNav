import React, { useState } from "react";
import "../css/Footer.css";
import mediNavLogo from "../images/medinav_logo.png";
import CopyrightIcon from '@mui/icons-material/Copyright';



const Footer = () => {

    return (
        <footer>
            <div className="footer_logo">
                <img src={mediNavLogo} alt="Logo" />
                <p>MediNav</p>
            </div>
            <div className="copyright_box">
                <p className="copyright_text">Copyright 2023</p> <p className="copyright_mark"><CopyrightIcon fontSize="smaller"/></p>
            </div>

        </footer>
    )
}

export default Footer;