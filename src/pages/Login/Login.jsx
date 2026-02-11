import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/g.png";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";

import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../Firebase/Firebase"; // make sure firebase.js exports auth & db

const provider = new GoogleAuthProvider();

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Save user to Firestore
  const saveUserToDatabase = async (user) => {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        name: user.displayName || name || "",
        photo: user.photoURL || "",
        createdAt: new Date(),
      });
      console.log("User added to Firestore!");
    }
  };

  // Handle Sign In / Sign Up form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (signState === "Sign Up") {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Set display name
        await updateProfile(userCredential.user, {
          displayName: name,
        });

        await saveUserToDatabase(userCredential.user);
        alert("Account created!");
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        await saveUserToDatabase(userCredential.user);
        alert("Login successful!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      await saveUserToDatabase(result.user);
      alert("Google login successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>

        <form onSubmit={handleSubmit}>
          {signState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <a>Need Help?</a>
          </div>
        </form>

        <button
          onClick={handleGoogleLogin}
          style={{ marginTop: "10px", width: "100%" }}
        >
          Sign in with Google
        </button>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Ghibli Mori?
              <span onClick={() => setSignState("Sign Up")}> Sign Up</span>
            </p>
          ) : (
            <p>
              Already have account?
              <span onClick={() => setSignState("Sign In")}> Sign In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
