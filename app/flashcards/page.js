import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faClock } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  const title = "SOEN 357 - Midterm Review";

  return (
    <section
      className="py-16 flex flex-col items-center"
      style={{
        background: "linear-gradient(to top, var(--yellow), #FFF)",
        minHeight: "calc(100vh - 88px)",
      }}
    >
      <div className="flex flex-col gap-2" style={{ width: "80vw" }}>
        <p className="text-orange" style={{ fontSize: "1.35rem" }}>
          <b>{title}</b>
        </p>

        <p className="text-mid-orange" style={{ fontSize: "1.25rem" }}>
          <b>32 cards</b>
        </p>

        <div className="w-full flex items-center justify-center">
          <div className="flashcardContainer">
            <div
              className="flashcardHeader flex justify-between p-4"
              style={{ position: "relative" }}
            >
              <button className="p-2 hintBtn gap-2">
                <FontAwesomeIcon icon={faLightbulb} size={"1x"} />
                <p>Hint</p>
              </button>

              <div
                className="p-2 flashcardTitleCtn gap-2"
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <p style={{ color: "var(--orange)" }}>
                  <b>Spaced Repitition</b>
                </p>
              </div>

              <div
                className="p-2 flex items-center gap-2"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "0.75rem",
                }}
              >
                <p>0:30</p>
                <FontAwesomeIcon icon={faClock} size={"1x"} />
              </div>
            </div>

            <div
              className="flashcardBody flex items-center justify-center"
              style={{ color: "black", minHeight: "50%" }}
            >
              <p style={{ fontSize: "1.35rem" }}>
                What are the 6 pillars of UI Design?
              </p>
            </div>
            <div
              className="flashcardFooter flex justify-center py-3"
              style={{
                backgroundColor: "var(--cream-orange)",
                borderRadius: "0 0 0.5rem 0.5rem",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "var(--orange)" }}>Show Answer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
