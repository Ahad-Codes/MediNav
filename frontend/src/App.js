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
import Footer from "./components/Footer";

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
                                    <Footer />
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
                                <Footer />
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
                        <Route
                            index
                            element={
                                <>
                                    <Navbar myString={"Hospital"} />
                                    <PendingRequestsHospital />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path="UpdateProfile"
                            element={
                                <>
                                    <UpdateProfileHospital />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path="ReportHistory"
                            element={
                                <>
                                    <ReportHistoryHospital />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path="PendingRequests"
                            element={
                                <>
                                    <PendingRequestsHospital />
                                    <Footer />
                                </>
                            }
                        />
                    </Route>

                    <Route path="/Reporter">
                        <Route
                            index
                            element={
                                <>
                                    <Navbar myString={"Reporter"} />
                                    <ReporterDashboard />
                                    <Footer />
                                </>
                            }
                        ></Route>
                        <Route
                            index
                            element={
                                <>
                                    <Navbar myString={"Reporter"} />
                                    <ReporterDashboard />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path="UpdateProfile"
                            element={
                                <>
                                    <Navbar myString={"Reporter"} />
                                    <UpdateProfileReporter />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path="ReportHistory"
                            element={
                                <>
                                    <Navbar myString={"Reporter"} />
                                    <ReportHistoryReporter />
                                    <Footer />
                                </>
                            }
                        />

                        <Route
                            path="ViewHospitals"
                            element={
                                <>
                                    <Navbar myString={"Reporter"} />
                                    <ViewHospitals />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path="ReportAccident"
                            element={
                                <>
                                    <Navbar myString={"Reporter"} />
                                    <ReportAccident />
                                    <Footer />
                                </>
                            }
                        />
                    </Route>

                    <Route path="/Admin">
                        <Route
                            index
                            element={
                                <>
                                    <ManageReporterRequestsAdmin />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path="ReportHistory"
                            element={
                                <>
                                    <ReportHistoryAdmin />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path="ManageActiveReporters"
                            element={
                                <>
                                    <ManangeActiveReportersAdmin />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path="ManageReporterRequests"
                            element={
                                <>
                                    <ManageReporterRequestsAdmin />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path="ManageHospitalRequests"
                            element={
                                <>
                                    <ManageHospitalRequestsAdmin />
                                    <Footer />
                                </>
                            }
                        />
                    </Route>

                    <Route path="/Police">
                        <Route
                            index
                            element={
                                <>
                                    <PendingRequestsPolice />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path="PendingRequests"
                            element={
                                <>
                                    <PendingRequestsPolice />
                                    <Footer />
                                </>
                            }
                        />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
