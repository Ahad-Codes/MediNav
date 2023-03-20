import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../css/LogIn.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// import {AiOutlineArrowLeft} from 'react-icons/fa'
export default function LogIn() {

    return (
        <div className="LogIn">
            <div className="main_box">
                
                <div className="form_box">
                    {/* <p><i className="fa-solid fa-left"></i></p> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-left" /> */}
                    {/* <i className="fa fa-gear"></i> */}
                    <Link to="/">back</Link>
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
                            <button type="submit" className="btn btn-primary button">Log In</button>
                        </div>


                    </form>




                    {/* <div className="bring_child_to_center">
                    <div>
                        <p>Don't have an accout? <Link>Sign Up</Link></p>
                        
                    </div> 
                    <div>
                        <p>Don't have an accout? <Link>Sign Up</Link></p>
                        
                    </div> 
                </div> */}

                    {/* <div className="bring_child_to_center">
                    <p>Don't have an accout?&nbsp; </p><p>Sign Up</p>
                </div> */}

                    <p className="bring_link_to_center">Don't have an accout?<Link to="/SignUp/Reporter"> Sign Up</Link></p>
                    <p className="bring_link_to_center">Forget Your Password?<Link>Click Here</Link></p>



                </div>


            </div>
        </div>
    )
}