"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const handleCloseLoginForm = () => {
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
    const signupForm = document.querySelector("#loginForm");
    signupForm.style.display = "none";
  };

  return (
    <div id="loginForm" className="authForm">
      <form className="flex flex-col p-12 justify-between h-full">
        <div
          className="flex flex-col w-full items-center"
          style={{ color: "var(--orange)" }}
        >
          <p style={{ fontSize: "1.35rem" }}>
            <b>Welcome Back to</b>
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            <b>Brainy Cards!</b>
          </p>
        </div>

        <div className="flex flex-col gap-4" style={{ fontWeight: "600" }}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="authFormInput" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="authFormInput" />
          </div>
        </div>

        <div className="flex">
          <button className="authFormBtn">
            <b>Login</b>
          </button>
        </div>
      </form>
      <div className="cancelAuthForm">
        <button
          className="flex justify-center items-center rounded-full cancelAuthFormBtn"
          onClick={handleCloseLoginForm}
        >
          <FontAwesomeIcon
            icon={faClose}
            style={{ fontSize: "24px", padding: "0.25rem" }}
          />
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
