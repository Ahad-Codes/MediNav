import logo from "./logo.svg";
import "./App.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/LogIn.";
import SignUpReporter from "./pages/SignUpReporter";
import SignUpHospital from "./pages/SignUpHospital";
import UpdateProfileHospital from "./pages/UpdateProfileHospital";
import UpdateProfileReporter from "./pages/UpdateProfileReporter";
import ReportHistoryReporter from "./pages/ReportHistoryReporter";
import ReportHistoryHospital from "./pages/ReportHistoryHospital";
import PendingRequestsHospital from "./pages/PendingRequestsHospital";
import ReportHistoryAdmin from "./pages/ReportHistoryAdmin";
import ManangeActiveReportersAdmin from "./pages/ManageActiveReportersAdmin";
import PendingRequestsPolice from "./pages/PendingRequestsPolice";
import ManageReporterRequestsAdmin from "./pages/ManageReporterRequestsAdmin";
import ManageHospitalRequestsAdmin from "./pages/ManageHospitalRequestsAdmin";
import SignUpWarden from "./pages/SignUpWarden";
import ReporterDashboard from "./pages/ReporterDashboard";
import ViewBroadcasts from "./pages/ViewBroadcasts";
import ViewHospitals from "./pages/ViewHospitals";
import Navbar from "./components/Navbar";
import ReportAccident from "./pages/ReportAccident";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/">
                        <Route
                            index
                            element={
                                <>
                                    <Navbar myString={"Landing"} />
                                    <LandingPage />
                                </>
                            }
                        />
                    </Route>

                    <Route path="/LogIn">
                        <Route index element={<LogIn />}></Route>
                    </Route>

                    <Route
                        path="ViewBroadcasts"
                        element={
                            <>
                                <Navbar myString={"Landing"} />
                                <ViewBroadcasts />
                            </>
                        }
                    />

                    <Route path="/SignUp">
                        <Route index element={<SignUpReporter />}></Route>
                        <Route path="Reporter" element={<SignUpReporter />} />
                        <Route path="Hospital" element={<SignUpHospital />} />
                        <Route path="Warden" element={<SignUpWarden />} />
                    </Route>

                    <Route path="/Hospital">
                        <Route index element={<PendingRequestsHospital />} />
                        <Route
                            path="UpdateProfile"
                            element={<UpdateProfileHospital />}
                        />
                        <Route
                            path="ReportHistory"
                            element={<ReportHistoryHospital />}
                        />
                        <Route
                            path="PendingRequests"
                            element={<PendingRequestsHospital />}
                        />
                    </Route>

                    <Route path="/Reporter">
                        <Route
                            index
                            element={
                                <>
                                    <Navbar myString={"Reporter"} />
                                    <ReporterDashboard />
                                </>
                            }
                        ></Route>
                        <Route
                            index
                            element={
                                <>
                                    <Navbar myString={"Reporter"} />
                                    <ReporterDashboard />
                                </>
                            }
                        />
                        <Route
                            path="UpdateProfile"
                            element={
                                <>
                                    <Navbar myString={"Reporter"} />
                                    <UpdateProfileReporter />
                                </>
                            }
                        />
                        <Route
                            path="ReportHistory"
                            element={
                                <>
                                    <Navbar myString={"Reporter"} />
                                    <ReportHistoryReporter />
                                </>
                            }
                        />

                        <Route
                            path="ViewHospitals"
                            element={
                                <>
                                    <Navbar myString={"Reporter"} />
                                    <ViewHospitals />
                                </>
                            }
                        />
                        <Route
                            path="ReportAccident"
                            element={
                                <>
                                    <Navbar myString={"Reporter"} />
                                    <ReportAccident />
                                </>
                            }
                        />
                    </Route>

                    <Route path="/Admin">
                        <Route
                            index
                            element={<ManageReporterRequestsAdmin />}
                        />
                        <Route
                            path="ReportHistory"
                            element={<ReportHistoryAdmin />}
                        />
                        <Route
                            path="ManageActiveReporters"
                            element={<ManangeActiveReportersAdmin />}
                        />
                        <Route
                            path="ManageReporterRequests"
                            element={<ManageReporterRequestsAdmin />}
                        />
                        <Route
                            path="ManageHospitalRequests"
                            element={<ManageHospitalRequestsAdmin />}
                        />
                    </Route>

                    <Route path="/Police">
                        <Route index element={<PendingRequestsPolice />} />
                        <Route
                            path="PendingRequests"
                            element={<PendingRequestsPolice />}
                        />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
