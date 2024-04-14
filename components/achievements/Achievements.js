import React from "react";
import "../../styles/Achievements.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faStar } from "@fortawesome/free-solid-svg-icons";

const Achievements = () => {
  return (
    <div className="flex flex-col gap-4">
      <p style={{ fontSize: "1.35rem", color: "var(--orange)" }}>
        <b>Your Achievements</b>
      </p>
      <div className="flex gap-12" style={{ minHeight: "10rem" }}>
        <div
          className="flex w-1/2 achievementTab"
          style={{ backgroundColor: "white" }}
        >
          <div className="w-1/2 flex items-center justify-center">
            <div className="flex flex-col gap-2">
              <p style={{ fontSize: "1.15rem", color: "var(--mid-orange)" }}>
                <b>Total Tokens earned</b>
              </p>
              <p style={{ fontSize: "1rem", color: "#228B22" }}>
                100% Complete!
              </p>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <div
              className="p-4 flex items-center justify-center"
              style={{
                border: "4px solid #ffbf00",
                borderRadius: "100%",
                width: "100px",
              }}
            >
              <FontAwesomeIcon icon={faAward} size="4x" color="#ffbf00" />
            </div>
          </div>
        </div>
        <div
          className="flex w-1/2 achievementTab"
          style={{ backgroundColor: "white" }}
        >
          <div
            className="flex flex-col items-center w-full gap-4"
            style={{ position: "relative" }}
          >
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--mid-orange)",
                transform: "translateX(-50%)",
              }}
            >
              <b>You have completed</b>
            </p>
            <p style={{ fontSize: "2rem", color: "var(--orange)" }}>
              <b>52</b>
            </p>
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--mid-orange)",
                transform: "translateX(100%)",
              }}
            >
              <b>cards today!</b>
            </p>
            <FontAwesomeIcon
              icon={faStar}
              size="2x"
              color="#ffbf00"
              style={{ position: "absolute", right: "0.5rem", top: "0" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
