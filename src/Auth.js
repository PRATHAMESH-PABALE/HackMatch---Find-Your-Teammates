// src/Auth.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "./firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Google Sign-In
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider.setCustomParameters({ prompt: "select_account" }));
      const user = result.user;
      navigate("/welcome", { state: { name: user.displayName, email: user.email, photoURL: user.photoURL } });
    } catch (error) {
      setError(error.message);
    }
  };

  // Email/Password Login
  const signInWithEmail = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      navigate("/welcome", { state: { name: user.displayName || user.email, email: user.email, photoURL: user.photoURL } });
    } catch (error) {
      setError(error.message);
    }
  };

  // Email/Password Signup
  const signUpWithEmail = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;
      navigate("/welcome", { state: { name: user.displayName || user.email, email: user.email, photoURL: user.photoURL } });
    } catch (error) {
      setError(error.message);
    }
  };

  // Inline Styles
  const styles = {
    container: {
      textAlign: "center",
      background: "#f5f5f5",
      padding: "30px",
      borderRadius: "10px",
      width: "350px",
      margin: "50px auto",
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    },
    input: {
      width: "90%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    button: {
      width: "90%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      border: "none",
    },
    googleButton: {
      backgroundColor: "#db4437",
      color: "white",
    },
    loginButton: {
      backgroundColor: "#4CAF50",
      color: "white",
    },
    registerButton: {
      backgroundColor: "#007bff",
      color: "white",
    },
    error: {
      color: "red",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Login or Register</h2>

      {/* Google Sign-In */}
      <button style={{ ...styles.button, ...styles.googleButton }} onClick={signInWithGoogle}>
        Sign in with Google
      </button>

      <br /><br />

      {/* Email/Password Authentication */}
      <input type="email" placeholder="Enter Email" style={styles.input} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Enter Password" style={styles.input} onChange={(e) => setPassword(e.target.value)} />

      <button style={{ ...styles.button, ...styles.loginButton }} onClick={signInWithEmail}>
        Login
      </button>
      <button style={{ ...styles.button, ...styles.registerButton }} onClick={signUpWithEmail}>
        Register
      </button>

      {/* Error Message */}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

export default Auth;
