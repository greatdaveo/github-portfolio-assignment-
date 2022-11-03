import { useState } from "react";
import GitHuB from "../asset/github_logo.png";
// import { NavLink } from "react-router-dom";
import "./NavBar.css";
import UserProfile from "./UserProfile";

export default function NavBar() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);

  function handleChange(e) {
    setUsername(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    setLoading(false);
    console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
        setData(profileJson)
        setRepositories(repoJson)
    }
  };

  return (
    <>
      <nav>
        <img src={GitHuB} className="github-logo" alt="GitHub Logo" />

        <input
          type="text"
          value={username}
          onChange={handleChange}
          className="search"
          placeholder="Search"
        />
        <button type="submit" onClick={handleSubmit} className="search-button">
          {loading ? "Search..." : "Search"}
        </button>

        {/* For the Instgram Icons */}
        <div className="nav-links">{/* <NavLink to=""></NavLink> */}</div>
      </nav>

      <UserProfile data={data} repositories={repositories}/>
    </>
  );
}
