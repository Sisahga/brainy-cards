"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { set } from "mongoose";

const SearchBar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      const searchBarInput = document.getElementById("searchBarInput");
      console.log(searchBarInput.value);
    }
  };
  const handleSearchBlur = () => {
    console.log("blur");
    const searchBarInput = document.getElementById("searchBarInput");
    const searchIcon = document.querySelector(".searchIcon");
    if (searchBarInput.value.length > 0) {
      searchIcon.classList.add("hasText");
    } else {
      searchIcon.classList.remove("hasText");
    }
  };

  const handleIconLoad = () => {
    const searchIcon = document.getElementById("searchIcon");
    searchIcon.style.display = "block";
  };

  return (
    <div
      className="searchBarCtn flex items-center"
      style={{ position: "relative" }}
    >
      <input
        id="searchBarInput"
        type="text"
        className="searchBar"
        onKeyDown={handleSearchSubmit}
        onBlur={handleSearchBlur}
        style={{ color: "var(--mid-orange)" }}
        autoComplete="off"
      />
      <FontAwesomeIcon
        id="searchIcon"
        icon={faSearch}
        className="searchIcon"
        size="1x"
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      />
    </div>
  );
};

export default SearchBar;
