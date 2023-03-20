import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../css/updateProfile.css"

export default function SignUpReporter() {

    return (

        
        <div className="UpdateProfile">


            <div className="main_box">

            <div className="mainUpdatebox">
                
                <div className="updateText">Update Profile</div>
                
                
                
                </div>


                <div className="form_box">
                    <Link to="/">back</Link>
                    
                    



                    <form>
                        <div className="mb-3 form_row">
                            <label for="exampleInputEmail1" className="form-label">Display Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter your full name" />
                        </div>
                        <div className="mb-3 form_row">
                            <label for="exampleInputEmail1" className="form-label">Contact Number</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" placeholder="03XXXXXXXXX" />
                        </div>
                   

                        <div className="mb-3 form_row">
                            <label for="exampleInputPassword1" className="form-label">New Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" />
                        </div>

                        <div className="mb-3 form_row">
                            <label for="exampleInputPassword1" className="form-label"> Re-enter New Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Re-enter Your Password" />
                        </div>

                        <div className="mb-3 form_row">
                            <label for="exampleInputPassword1" className="form-label">Old Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Old Password" />
                        </div>


                        

                        <div className="bring_child_to_center">
                            <button type="submit" className="btn btn-primary button">Update Details</button>
                        </div>

                        <div className="bring_child_to_center">
                            <button type="submit" className="btn btn-danger">Cancel</button>
                        </div>


                    </form>




               </div>


            </div>
        </div>
    )
}