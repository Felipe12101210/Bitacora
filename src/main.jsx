import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Timeline from "./pages/Timeline.jsx";
import Retos from "./pages/Retos.jsx";
import HappyCanvas from "./pages/HappyCanvas.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Bitacora">
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="retos" element={<Retos />} />
        <Route path="happy-canvas" element={<HappyCanvas />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
