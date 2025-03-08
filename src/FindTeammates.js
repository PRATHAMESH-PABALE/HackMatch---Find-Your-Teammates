// src/FindTeammates.js
import React from "react";
import { useNavigate } from "react-router-dom";

const FindTeammates = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Find Your Teammates</h2>
      <p>Search and connect with people for hackathons.</p>
      <button style={styles.button} onClick={() => navigate("/welcome")}>Back</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  button: { padding: "10px 20px", margin: "10px", background: "#4285F4", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }
};

export default FindTeammates;
