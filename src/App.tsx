import React from 'react';
import Support from './pages/support'
import Card from './pages/cardDetails'
import Payment from './pages/payment'
import Successpay from './pages/successPay'
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";



function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Support/>} />
    <Route path="/payment" element={<Payment/>} />
    <Route path="/card" element={<Card/>} />
    <Route path="/successpay" element={<Successpay/>} />
    </Routes>
    </BrowserRouter>
    );
}

export default App;
