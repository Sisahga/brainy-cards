import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
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
      <FontAwesomeIcon icon={faSearch} className="searchIcon" />
    </div>
  );
};

export default SearchBar;
