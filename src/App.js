import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/login';

function App() {
  return (
    <div dir="rtl">
      <Router>
        <div className=" p-33px" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Login />} exact />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
