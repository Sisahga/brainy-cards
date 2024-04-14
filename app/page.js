import Navbar from "@/components/navbar/Navbar";
import "../styles/home.css";

export default function Home() {
  return (
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
              >
                <b>Login</b>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
