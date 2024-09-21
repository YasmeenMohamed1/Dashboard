import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/login';
import AddUser from './Pages/addUser';
import Profile from './Pages/profile';

function App() {
  return (
    <div dir="rtl">
      <Router>
        <div className=" p-33px" style={{ flex: 1 }}>
          <Routes>
            <Route path="/login" element={<Login />} exact />
            <Route path="/addUser" element={<AddUser />} exact />
            <Route path="/profile" element={<Profile />} exact />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
