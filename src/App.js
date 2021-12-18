import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import AllAppoinment from './components/AllAppoinment/AllAppoinment';
import AuthProvider from './components/context/AuthProvider/AuthProvider';
import AdminRoute from './components/PrivateRoute/AdminRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashBoardHome from './Pages/Dashboard/DashBoardHome';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyAppoinment from './Pages/MyAppoinment/MyAppoinment';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/*' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/booking/:id' element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            } />
            <Route path='/dashboard' element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>}>
              <Route path='/dashboard/all-appoinments' element={
                <AdminRoute>
                  <AllAppoinment />
                </AdminRoute>
              } />
              <Route path='/dashboard/by-date' element={
                <AdminRoute>
                  <DashBoardHome />
                </AdminRoute>
              } />
            </Route>
            <Route path='/myAppoinment' element={
              <PrivateRoute>
                <MyAppoinment />
              </PrivateRoute>
            } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
