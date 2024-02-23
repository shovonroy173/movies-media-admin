import "./App.css";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Failure from "./pages/Failure";
import Email from "./pages/Email";
import Success from "./pages/Success";


function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={!user.currentUser ? <Email /> :<Home/>}
          />
          <Route
            path="/register"
            element={user.currentUser ? <Home /> : <Register />}
          />
          <Route
            path="/login"
            element={user.currentUser ? <Home /> : <Login />}
          />

          <Route path="/users" element={ user.currentUser ? <Users /> : <Email />} />
          <Route path="/upload" element={ user.currentUser ?  <Upload /> : <Email />} />
          <Route path="/failure" element={<Failure/>} />
          <Route path="/success" element={<Success/>} />
        </Routes>
      </Router>
      {/* <Home/> */}
    </>
  );
}

export default App;
