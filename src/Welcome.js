// src/Welcome.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Welcome = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, email, photoURL } = location.state || {};

  // Default Avatar if no photoURL is found
  const defaultAvatar = "https://www.w3schools.com/howto/img_avatar.png";

  // Inline Styles
  const styles = {
    container: {
      textAlign: "center",
      background: "#fff",
      padding: "50px",
      borderRadius: "15px",
      width: "80%",
      margin: "50px auto",
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    },
    heading: {
      fontSize: "30px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    profilePic: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      marginTop: "15px",
    },
    section: {
      background: "#f4f4f4",
      padding: "20px",
      margin: "20px",
      borderRadius: "10px",
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
    },
    button: {
      backgroundColor: "#4285F4",
      color: "white",
      border: "none",
      padding: "10px 15px",
      cursor: "pointer",
      fontSize: "16px",
      borderRadius: "5px",
      marginTop: "10px",
    },
    logoutButton: {
      backgroundColor: "#ff4b5c",
      color: "white",
      border: "none",
      padding: "12px 20px",
      cursor: "pointer",
      fontSize: "18px",
      borderRadius: "8px",
      marginTop: "20px",
    },
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome, {name || email}!</h2>
      <img src={photoURL || defaultAvatar} alt="User Avatar" style={styles.profilePic} />
      
      {/* Find Your Teammates Section */}
      <div style={styles.section}>
        <h3>Find Your Teammates</h3>
        <p>Connect with talented people for hackathons.</p>
        <button style={styles.button} onClick={() => navigate("/find-teammates")}>Go</button>
      </div>

      {/* Connections & Groups Section */}
      <div style={styles.section}>
        <h3>Connections & Groups</h3>
        <p>Manage your connections and create groups.</p>
        <button style={styles.button} onClick={() => navigate("/connections-groups")}>Go</button>
      </div>

      {/* Your Profile Section */}
      <div style={styles.section}>
        <h3>Your Profile</h3>
        <p>View and edit your personal details.</p>
        <button style={styles.button} onClick={() => navigate("/profile")}>Go</button>
      </div>

      <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
