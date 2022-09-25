import './App.css';
import React from 'react';
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from './screens/SignupScreen'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/HomeScreen';

export default function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/signin" element={<SigninScreen />}></Route>
        <Route path="/signup" element={<SignupScreen />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>

    </BrowserRouter>

  );
}
