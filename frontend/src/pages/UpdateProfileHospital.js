import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/UpdateProfileHospital.css";
import Cookies from "js-cookie";

export default function UpdateProfileHospital() {
    const [hospitalData, setHospitalData] = useState(null);
    const [landline, setLandline] = useState("");
    const [primaryMobileNumber, setPrimaryMobileNumber] = useState("");
    const [secondaryMobileNumber, setSecondaryMobileNumber] = useState("");
    const [numOnCallDoctors, setNumOnCallDoctors] = useState("");
    const [numOperationalAmbulances, setNumOperationalAmbulances] =
        useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const navigate = useNavigate();

    var userID = window.localStorage.getItem("userID");
    console.log(userID);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:3001/user/getHospitalDetails",
                    {
                        userID,
                    }
                );
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };



        if (!Cookies.get("access_token")) {
          navigate("/");
        } else if (window.localStorage.getItem("userType") !== 'Hospital') {
          navigate("/");
        }
        else {
        fetchData();
        }




    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        var hosp_id = window.localStorage.getitem("userID");
        try {
            const updatedHospitalData = {
                hosp_id,
                landline,
                primaryMobileNumber,
                secondaryMobileNumber,
                numOnCallDoctors,
                numOperationalAmbulances,
                newPassword,
                oldPassword,
            };
            const response = await axios.put(
                "http://localhost:3001/user/updateHospital",
                updatedHospitalData
            );
            console.log(response.data);
            navigate("/hospitaldashboard");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="UpdateProfileHospital">
            <div className="main_box">
                <div>
                    <div className="updateProfileHeading">
                        <h1>Update Profile</h1>
                    </div>
                    <div className="form_box">
                        {/* <Link to="/">back</Link> */}
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="mb-3 form_row">
                                <label
                                    for="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Change Landline number
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder={hospitalData.landline}
                                    onChange={(e) =>
                                        setLandline(e.target.value)
                                    }
                                />
                            </div>

                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">
                                    Primary Mobile Number
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="inputEmail4"
                                />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">
                                    Secondary Mobile Number
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="inputPassword4"
                                />
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">
                                    Number of On Call Doctors
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="inputEmail4"
                                />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">
                                    Number of Operational Ambulances
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="inputPassword4"
                                />
                            </div>

                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">
                                    Enter New Password
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="inputEmail4"
                                />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">
                                    Re-enter New Password
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="inputPassword4"
                                />
                            </div>

                            <div className="mb-3 form_row">
                                <label
                                    for="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Enter Old Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder=""
                                />
                            </div>

                            <div className="bring_child_to_center">
                                <button type="submit" className="updateButton">
                                    Update Profile
                                </button>
                                <button type="submit" className="cancelButton">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
