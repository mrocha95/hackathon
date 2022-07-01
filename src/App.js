
import "./App.css";
import React from "react";
import AboutPage from "./components/AboutPage";
import { Routes, Route, Link } from "react-router-dom";
import CreateList from "./components/CreateList";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">To Do List</Link>
        <Link to="/signup">SIGNUP</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/CreateList" element={<CreateList />} />
      </Routes>
    </div>

  );
}

export default App;
