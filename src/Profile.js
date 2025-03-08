// src/Profile.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Your Profile</h2>
      <p>View and edit your personal details.</p>
      <button style={styles.button} onClick={() => navigate("/welcome")}>Back</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  button: { padding: "10px 20px", margin: "10px", background: "#4285F4", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }
};

export default Profile;
