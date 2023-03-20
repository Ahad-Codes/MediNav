import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../css/SignUpReporter.css"

export default function SignUpReporter() {

    return (
        <div className="SignUpReporter">
            <div className="main_box">
                <div className="form_box">
                    <Link to="/">back</Link>
                    <h3>Signup to Medinav</h3>
                    <form>
                        <div className="mb-3 form_row">
                            <label for="exampleInputEmail1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter your full name" />
                        </div>
                        <div className="mb-3 form_row">
                            <label for="exampleInputEmail1" className="form-label">Contact Number</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" placeholder="03XXXXXXXXX" />
                        </div>
                        <div className="mb-3 form_row">
                            <label for="exampleInputEmail1" className="form-label">CNIC</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" placeholder="3************" />
                        </div>
                        <div className="mb-3 form_row">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email" />
                        </div>

                        <div className="mb-3 form_row">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" />
                        </div>
                        <div className="bring_child_to_center">
                            <button type="submit" className="btn btn-primary button">Creat Account</button>
                        </div>


                    </form>




                   

                    <p className="bring_link_to_center">Already an account?<Link to="/LogIn">Log In</Link></p>
                    <p className="bring_link_to_center"><Link to="/SignUp/Hospital">Sign Up as Hospital</Link></p>



                </div>


            </div>
        </div>
    )
}