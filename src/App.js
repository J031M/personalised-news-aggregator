import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Router from "./routes";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
  <>
  <ToastContainer position='top-center'/>
  <Router />
  </>
  )
}

export default App;
