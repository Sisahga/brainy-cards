"use client";

import SignupForm from "@/components/signup-form/SignupForm";
import LoginForm from "@/components/login-form/LoginForm";
import "../styles/home.css";

export default function Home() {
  const handleSignupClick = () => {
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "block";
    const signupForm = document.querySelector("#signupForm");
    signupForm.style.display = "block";
  };
  const handleLoginClick = () => {
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "block";
    const loginForm = document.querySelector("#loginForm");
    loginForm.style.display = "block";
  };

  return (
    <>
      <div className="overlay"></div>
      <SignupForm />
      <LoginForm />
      <div>
        <section
          className="p-8"
          style={{
            minHeight: "calc(100vh - 88px)",
            backgroundColor: "var(--yellow)",
            background: "linear-gradient(to top, var(--yellow), #FFF)",
          }}
        >
          <div className="flex justify-center items-center flex-col gap-24 mt-16">
            <p
              className="mt-8"
              style={{ fontSize: "2.25rem", color: "var(--orange)" }}
            >
              <b>Welcome to Brainy Cards</b>
            </p>
            <div className="flex flex-col gap-8">
              <div className="flex">
                <p style={{ fontSize: "1.35rem", color: "var(--mid-orange)" }}>
                  <b>Login or create an account to start studying better.</b>
                </p>
              </div>
              <div className="flex gap-8" style={{ fontSize: "1.15rem" }}>
                <button
                  className="mainCredentialBtn p-4"
                  style={{
                    backgroundColor: "var(--pale-green)",
                    color: "var(--orange)",
                    backgroundImage:
                      "linear-gradient(to left, var(--pale-green), #FFFFFF)",
                  }}
                  onClick={handleSignupClick}
                >
                  <b>Sign Up</b>
                </button>
                <button
                  className="mainCredentialBtn p-4"
                  style={{
                    backgroundColor: "var(--orange)",
                    color: "white",
                    backgroundImage:
                      "linear-gradient(to right, var(--orange), #FFD1A9)",
                  }}
                  onClick={handleLoginClick}
                >
                  <b>Login</b>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
