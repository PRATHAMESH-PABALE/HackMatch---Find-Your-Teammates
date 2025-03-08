// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Welcome from "./Welcome";
import FindTeammates from "./FindTeammates";
import ConnectionsGroups from "./ConnectionsGroups";
import Profile from "./Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/find-teammates" element={<FindTeammates />} />
      <Route path="/connections-groups" element={<ConnectionsGroups />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
