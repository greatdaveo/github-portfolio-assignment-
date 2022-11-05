import React from "react";
import "./Searchbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Inventory2Icon from "@mui/icons-material/Inventory2";

export default function Searchbar() {
  return (
    <div className="searchbar">
      <div className="input">
        <input type="text" placeholder="Find a repository..." />
      </div>

      <div className="btns">
        <button className="searchbar-btn">
          <span>Type</span>
          <ArrowDropDownIcon className="navbar-icon" />
        </button>

        <button className="searchbar-btn">
          <span>Language</span>
          <ArrowDropDownIcon className="navbar-icon" />
        </button>

        <button className="searchbar-btn">
          <span>Sort</span>
          <ArrowDropDownIcon className="navbar-icon" />
        </button>

        <button className="special-btn">
          <Inventory2Icon className="navbar-icon" />
          <span>New</span>
        </button>
      </div>
    </div>
  );
}
