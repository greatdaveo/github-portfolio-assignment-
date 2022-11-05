import React, { useState } from "react";
import "./GitHubHeader.css";
import { Link } from "react-router-dom";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import WidthNormalIcon from "@mui/icons-material/WidthNormal";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

export default function GitHubHeader() {
  return (
    <div className="header">
      <div className="header-overview">
        <WidthNormalIcon className="header-icon" />

        <Link to="/overview">
          <span>Overview</span>
        </Link>
      </div>

      <div className="header-overview">
        <Inventory2Icon className="header-icon" />

        <Link to="/">
          <span>Repository</span>
        </Link>
      </div>

      <div className="header-overview">
        <AutoAwesomeMosaicIcon className="header-icon" />

        <Link to="/">
          <span>Projects</span>
        </Link>
      </div>

      <div className="header-overview">
        <ViewInArIcon className="header__icon" />
        <Link to="/">
          <span>packages</span>
        </Link>
      </div>

      <div className="header-overview">
        <StarOutlineIcon className="header-icon" />
        <Link to="/">
          <span>Star</span>
        </Link>
      </div>
    </div>
  );
}
