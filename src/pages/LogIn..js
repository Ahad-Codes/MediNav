import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../css/LogIn.css"

export default function LandingPage() {

    return (
        <div className="main_box">
            <div className="form_box">
                <h3>Login to Medinav</h3>
                <form>
                    <div className="mb-3 form_row">
                        <label for="exampleInputEmail1" className="form-label">Contact Number</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="03XXXXXXXXX" />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3 form_row">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" />
                    </div>
                    <div className="bring_child_to_center">
                        <button type="submit" className="btn btn-primary button">Submit</button>
                    </div>

                </form>

                <div className="bring_child_to_center">
                    <p>Don't have an accout?&nbsp; </p><p>Sign Up</p>
                </div>
                

            
            </div>

        </div>
    )
}