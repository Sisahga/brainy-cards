import React from "react";
import "../../styles/GenerateFlashcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const GenerateFlashcard = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p style={{ fontSize: "1.35rem", color: "var(--orange)" }}>
          <b>Generate a FlashCard</b>
        </p>
      </div>
      <div className="generateCardContainer p-4 gap-4">
        <p
          style={{
            color: "var(--orange)",
            fontSize: "1.15rem",
          }}
        >
          <b>Add your notes to customize</b>
        </p>
        <p style={{ color: "var(--mid-orange)" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;- class notes, exam notes, ...
        </p>
        <div className="flex w-full justify-end">
          <button className="uploadBtn flex items-center gap-4">
            <b>Upload File</b>
            <FontAwesomeIcon icon={faUpload} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateFlashcard;
