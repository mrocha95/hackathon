// import "./App.css";
import React from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

import Signup from './components/Signup';

function App() {
  return (
  <div>

    <Routes>
      <Route path="/signup" element={<Signup />} /> 
    </Routes>
  </div>
  );
}

export default App;
