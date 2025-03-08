// src/ConnectionsGroups.js
import React from "react";
import { useNavigate } from "react-router-dom";

const ConnectionsGroups = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Connections & Groups</h2>
      <p>Manage your connections and form groups.</p>
      <button style={styles.button} onClick={() => navigate("/welcome")}>Back</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  button: { padding: "10px 20px", margin: "10px", background: "#4285F4", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }
};

export default ConnectionsGroups;
