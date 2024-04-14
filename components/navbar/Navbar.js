"use client";

import React, { useEffect } from "react";
import "@/styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faPlus,
  faBell,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./search-bar/SearchBar";
import Link from "next/link";

const Navbar = () => {
  const userCards = [
    "SOEN 357 Final",
    "SOEN 357 Midterm",
    "SOEN 357 Quiz",
    "SOEN 343 Final",
  ];
  const tools = ["Flashcards", "Quizzes", "Study Guide", "Upload Notes"];

  const handleYourCardsClicked = () => {
    const cardsNavDropdown = document.getElementById("cardsNavDropdown");
    const yourCardsNavItem = document.getElementById("yourCardsNavItem");
    const angleDown = document.getElementById("cardsAngleDown");
    if (cardsNavDropdown.style.display === "none") {
      cardsNavDropdown.style.display = "block";
      yourCardsNavItem.classList.add("clicked");
      angleDown.style.transform = "rotate(180deg)";
    } else {
      cardsNavDropdown.style.display = "none";
      yourCardsNavItem.classList.remove("clicked");
      angleDown.style.transform = "rotate(0deg)";
    }
  };

  const handleToolsClicked = () => {
    const toolsNavDropdown = document.getElementById("toolsNavDropdown");
    const yourToolsNavItem = document.getElementById("yourToolsNavItem");
    const angleDown = document.getElementById("toolsAngleDown");
    if (toolsNavDropdown.style.display === "none") {
      toolsNavDropdown.style.display = "block";
      yourToolsNavItem.classList.add("clicked");
      angleDown.style.transform = "rotate(180deg)";
    } else {
      toolsNavDropdown.style.display = "none";
      yourToolsNavItem.classList.remove("clicked");
      angleDown.style.transform = "rotate(0deg)";
    }
  };

  let liDropdowns;
  useEffect(() => {
    liDropdowns = document.querySelectorAll(".navItemDropdown");
    if (!(liDropdowns.length === 0)) {
      document.body.addEventListener("click", (e) => {
        Array.from(liDropdowns).forEach((liDropdown) => {
          if (liDropdown.classList.contains("clicked")) {
            if (!liDropdown.contains(e.target)) {
              liDropdown.classList.remove("clicked");
              const angleDown = liDropdown.querySelector("svg");
              angleDown.style.transform = "rotate(0deg)";
              const dropdownContent = liDropdown.nextElementSibling;
              dropdownContent.style.display = "none";
            }
          }
        });
      });
    }
  }, []);

  return (
    <>
      <div
        className="flex items-center px-8 py-6"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="flex w-1/6 logoContainer">
          <Link href={"/"}>
            <p style={{ fontSize: "1.25rem", color: "var(--orange)" }}>
              <b>Brainy Cards</b>
            </p>
          </Link>
        </div>
        <ul className="flex items-center justify-between gap-8 navbarMenu w-5/6">
          <div className="flex gap-8">
            <div className="flex gap-4">
              <div>
                <li
                  id="yourCardsNavItem"
                  className={`navItem flex items-center navItemDropdown`}
                  onClick={handleYourCardsClicked}
                >
                  <b>Your Cards</b>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    id="cardsAngleDown"
                    style={{ width: "1rem" }}
                  />
                </li>
                <ul
                  id="cardsNavDropdown"
                  className="dropdownContent"
                  style={{ display: "none" }}
                >
                  {userCards.map((card) => (
                    <li className="cardItem" key={card}>
                      <b>{card}</b>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <li
                  id="yourToolsNavItem"
                  className="navItem flex items-center navItemDropdown"
                  onClick={handleToolsClicked}
                >
                  <b>Tools</b>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    id="toolsAngleDown"
                    style={{ width: "1rem" }}
                  />
                </li>
                <ul
                  id="toolsNavDropdown"
                  className="dropdownContent"
                  style={{ display: "none" }}
                >
                  {tools.map((tool) => (
                    <li className="cardItem" key={tool}>
                      <b>{tool}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <SearchBar />
          </div>
          <div id="rightNav" className="flex gap-8">
            <li className="flex items-center justify-center roundNavItem">
              <FontAwesomeIcon icon={faPlus} />
            </li>
            <li className="flex items-center justify-center roundNavItem">
              <FontAwesomeIcon icon={faBell} />
            </li>
            <li className="flex items-center justify-center roundNavItem">
              <FontAwesomeIcon icon={faPerson} />
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
