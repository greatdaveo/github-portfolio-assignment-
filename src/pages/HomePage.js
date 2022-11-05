import React from "react";
import "./HomePage.css";
import GitHubUser from "../components/GitHubUser";
import Repository from "../components/Repository";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Repository</title>
        <meta name="description" content="david olowomeye's github profile" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="user-page">
        <GitHubUser />
        <Repository />
      </div>
    </div>
  );
}
