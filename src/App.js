import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Video from "./pages/video";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
