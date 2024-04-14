"use client";

import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faClock,
  faBan,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const page = () => {
  const title = "SOEN 357 - Midterm Review";
  const options = ["Consistency", "Flexibility", "Learnability", "Efficiency"];

  const [activeIndex, setActiveIndex] = useState(-1);
  const [optionClicked, setOptionClicked] = useState(false);

  const handleOptionClick = (index) => () => {
    console.log("Option clicked", index);
    setActiveIndex(index);
    if (!optionClicked) setOptionClicked(true);
  };

  return (
    <section
      className="py-8 flex flex-col items-center"
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
              <div className="flashcardQuestion flex flex-col gap-4">
                <p style={{ fontSize: "1.15rem", color: "var(--mid-orange)" }}>
                  <b>
                    Which of the following is not one of the 6 pillars of UI
                    Design?
                  </b>
                </p>
                <ul className="flex flex-col gap-2">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      className={`px-4 py-1 flashcardOption ${
                        index === activeIndex ? "activeOption" : ""
                      }`}
                      onClick={handleOptionClick(index)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
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

        <div className="w-full flex justify-center mt-6 gap-8">
          <div
            className="flex items-center justify-center rounded-full skipBtn"
            style={{
              backgroundColor: "var(--cream-orange)",
              width: "3.25rem",
              height: "3.25rem",
              border: "2px solid #FFF",
            }}
            title="Skip this flashcard"
          >
            <FontAwesomeIcon
              icon={faBan}
              size={"2x"}
              style={{ color: "#FFF" }}
              className="p-2"
            />
          </div>
          {optionClicked && (
            <div
              className="flex rounded-full items-center justify-center skipBtn"
              style={{
                backgroundColor: "#FFF",
                width: "3.25rem",
                height: "3.25rem",
                border: "2px solid var(--orange)",
              }}
              title="Submit your answer"
            >
              <FontAwesomeIcon
                icon={faCheck}
                size={"2x"}
                style={{ color: "var(--orange)" }}
                className="p-2"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
