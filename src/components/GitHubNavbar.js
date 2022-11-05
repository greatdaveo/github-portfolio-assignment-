import { Link } from "react-router-dom";
import "./GitHubNavbar.css";
import Logo from "../assets/github_logo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BrowserNotSupportedIcon from "@mui/icons-material/BrowserNotSupported";

export default function GitHubNavbar() {
  return (
    <nav className="navbar">
      <div className="left-navbar">
        <img src={Logo} alt="navbar-logo" className="logo-navbar" />
        <div className="input-navbar">
          <input type="text" placeholder="Search" className="input-navbar" />
        </div>
      </div>

      <div className="center-navbar">
        <Link to="/">Pulls</Link>
        <Link to="/">Issues</Link>
        <Link to="/">Market Place </Link>
        <Link to="/">Explore</Link>
      </div>

      <div className="right-navbar">
        <NotificationsNoneIcon className="icon-navbar" />
        <AddIcon className="icon-navbar" />
        <ArrowDropDownIcon className="icon-navbar" />
        <div className="nav__avatar">
          <AccountCircleIcon className="icon-navbar" />
          <ArrowDropDownIcon className="icon-navbar" />
        </div>
      </div>
    </nav>
  );
}
