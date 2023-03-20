import logo from './logo.svg';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn.';
import UpdateProfile from './pages/update_profile';




function App() {
  return (

    <div className='App'>
      <Router>
        <Routes>

          <Route path="/">
            <Route index element={<LandingPage />}></Route>
          </Route>


          <Route path="/logIn">
            <Route index element={<LogIn />}></Route>
          </Route>

          <Route path="/Update">
            <Route index element={<UpdateProfile />}></Route>
          </Route>


        </Routes>
      </Router>

    </div>
  );
}

export default App;
