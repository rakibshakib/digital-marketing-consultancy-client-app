import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/*' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/booking/:id' element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
