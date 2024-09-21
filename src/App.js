import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/login';
import AddUser from './Pages/addUser';
import Profile from './Pages/profile';
import Dashboard from './Pages/dashboard';
import Finance from './Pages/finance';
import Users from './Pages/users';
import DeliveryShipment from './Pages/deliveryShipments';

function App() {
  return (
    <div dir="rtl">
      <Router>
        <div className=" p-33px">
          <Routes>
            <Route path="/login" element={<Login/>} exact />
            <Route path="/addUser" element={<AddUser/>} exact />
            <Route path="/profile" element={<Profile/>} exact />
            <Route path="/dashboard" element={<Dashboard/>} exact />
            <Route path="/finance" element={<Finance/>} exact />
            <Route path="/users" element={<Users/>} exact />
            <Route path="/deliveryShipment" element={<DeliveryShipment/>} exact />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
