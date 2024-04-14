import React from "react";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import Recents from "@/components/recents/Recents";
import GenerateFlashcard from "@/components/generate-flashcard/GenerateFlashcard";
import Achievements from "@/components/achievements/Achievements";

const Dashboard = () => {
  return (
    <section
      className="py-16 flex flex-col items-center"
      style={{
        background: "linear-gradient(to top, var(--yellow), #FFF)",
        minHeight: "calc(100vh - 88px)",
      }}
    >
      <div className="flex flex-col gap-8" style={{ width: "80vw" }}>
        <Recents />
        <GenerateFlashcard />
        <Achievements />
      </div>
    </section>
  );
};

export default Dashboard;
