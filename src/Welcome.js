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
      width: "60%",  // Increased Width
      margin: "50px auto",
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    },
    heading: {
      fontSize: "30px",  // Bigger Text
      fontWeight: "bold",
      marginBottom: "20px",
    },
    profilePic: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      marginTop: "15px",
    },
    button: {
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
      <br /><br />
      <button style={styles.button} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
