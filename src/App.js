import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import AuthProvider from './components/context/AuthProvider/AuthProvider';
import Booking from './Pages/Booking/Booking';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyAppoinment from './Pages/MyAppoinment/MyAppoinment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/*' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/booking/:id' element={<Booking />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/myAppoinment' element={<MyAppoinment />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
