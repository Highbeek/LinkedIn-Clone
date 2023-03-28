import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "../features/userSlice";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePicture,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.png"
        alt=""
      />
      <form action="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name (required if registering)"
          autoComplete=""
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          autoComplete=""
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          autoComplete=""
        />
        <input
          type="text"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          placeholder="profile pic URL(optional)"
          autoComplete=""
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member? {""}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
