import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Recents = () => {
  const recents = [
    {
      course: "SOEN 357",
      cards: 32,
    },
    {
      course: "ENGR 371",
      cards: 14,
    },
    {
      course: "SOEN 343",
      cards: 36,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p style={{ color: "var(--orange)", fontSize: "1.35rem" }}>
        <b>Recent Activity</b>
      </p>
      <div
        id="recentsContainer"
        className="flex gap-8"
        style={{ position: "relative" }}
      >
        {recents.map((recent) => (
          <div
            key={recent.course}
            className="flex flex-col containerCard gap-2"
            style={{ position: "relative" }}
          >
            <p style={{ fontSize: "1.15rem", color: "var(--orange)" }}>
              <b>{recent.course}</b>
            </p>
            <p style={{ color: "var(--mid-orange)" }}>{recent.cards} cards</p>
            {/* <div
              style={{
                position: "absolute",
                right: "1rem",
                bottom: "0.5rem",
                transition: "0.15s all ease-in-out",
                color: "var(--mid-orange)",
              }}
            >
              <FontAwesomeIcon icon={faRightLong} />
            </div> */}
            <div
              style={{
                position: "absolute",
                right: "1rem",
                bottom: "0.5rem",
                transition: "0.15s all ease-in-out",
                color: "var(--orange)",
              }}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recents;
