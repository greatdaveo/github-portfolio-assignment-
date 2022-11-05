import React from "react";
import { Link } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function GitHubRepoInfo({ data }) {
  return (
    <div>
      {data &&
        data.map((repo) => (
          <div key={repo.id} className="repositories">
            <div className="left">
              <Link to={`/repos/${repo.full_name}`}>
                <h2 className="my-repository-header">{repo.name}</h2>
              </Link>

              <button className="my-repository-visibiity">
                {repo.visibility}
              </button>
            </div>

            <div className="right">
              <div className="right-btn">
                <StarBorderIcon />
                <p>star</p>
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
