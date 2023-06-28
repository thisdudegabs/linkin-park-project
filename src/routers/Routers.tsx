import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Follow from "../pages/Follow";
import Home from "../pages/Home";
import Live from "../pages/Live";
import Members from "../pages/Members";
import Merch from "../pages/Merch";
import Music from "../pages/Music";
import Updates from "../pages/Updates";
import Videos from "../pages/Videos";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/follow" element={<Follow />} />
      <Route path="/live" element={<Live />} />
      <Route path="/members" element={<Members />} />
      <Route path="/merch" element={<Merch />} />
      <Route path="/music" element={<Music />} />
      <Route path="/updates" element={<Updates />} />
      <Route path="/videos" element={<Videos />} />
    </Routes>
  );
};

export default Routers;
