import logo from './logo.svg';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn.';
import SignUpReporter from './pages/SignUpReporter';
import SignUpHospital from './pages/SignUpHospital';
import UpdateProfileHospital from './pages/UpdateProfileHospital';
import UpdateProfileReporter from './pages/UpdateProfileReporter';
import ReportHistoryReporter from './pages/ReportHistoryReporter';
import ReportHistoryHospital from './pages/ReportHistoryHospital';
import PendingRequestsHospital from './pages/PendingRequestsHospital';
import ReportHistoryAdmin from './pages/ReportHistoryAdmin';
import ManangeActiveReportersAdmin from './pages/ManageActiveReportersAdmin';
// import Khuzaimah  from './pages/Reporter'



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />}></Route>
          </Route>
          <Route path="/LogIn">
            <Route index element={<LogIn />}></Route>
          </Route>
          <Route path="/LogIn">
            <Route index element={<LogIn />}></Route>
          </Route>
          <Route path="/SignUp">
            {/* <Route index element={<LogIn />}></Route> */}
            <Route path="Reporter" element={<SignUpReporter />}></Route>
            <Route path="Hospital" element={<SignUpHospital />}></Route>
          </Route>

          <Route path="/Hospital">
            <Route path="UpdateProfile" element={<UpdateProfileHospital />}></Route>
            <Route path="ReportHistory" element={<ReportHistoryHospital />}></Route>
            <Route path="PendingRequests" element={<PendingRequestsHospital />}></Route>

          </Route>

          <Route path="/Reporter">
            <Route path="UpdateProfile" element={<UpdateProfileReporter />}></Route>
            <Route path="ReportHistory" element={<ReportHistoryReporter />}></Route>

          </Route >

          <Route path="/Admin">
            <Route path="ReportHistory" element={<ReportHistoryAdmin/>}></Route>
            <Route path="ManageActiveReporters" element={<ManangeActiveReportersAdmin/>}></Route>
          </Route>

          {/* <Route path="/khuzaimah">
            <Route index element={<Khuzaimah />}></Route>

          </Route> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
