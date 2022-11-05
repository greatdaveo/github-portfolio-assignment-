import StarOutlineIcon from "@mui/icons-material/StarOutline";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import FlightLandTwoToneIcon from "@mui/icons-material/FlightLandTwoTone";
import "./GitHubUser.css";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

export default function GitHubUser() {
  const [url, setUrl] = useState("https://api.github.com/users/greatdaveo");

  const { data, error, loading } = useFetch(url);
  console.log(data);

  return (
    <div className="user">
      <img src={data.avatar_url} alt="pic" className="user-image" />
      {error && <div>{error}</div>}
      {loading && <div>loading...</div>}
      <h2>{data && data.name}</h2>
      <h4 className="username">{data.login}</h4>
      <h4>{data && data.bio}</h4>
      <button className="user-btn">Edit profile</button>
      <h4>
        {" "}
        Followers: {data && data.followers} Following: {data && data.following}{" "}
      </h4>

      <h4 className="loc">
        <RoomOutlinedIcon />
        {data && data.location}
      </h4>
      <h4 className="loc">
        <FlightLandTwoToneIcon />
        {data && data.twitter_username}
      </h4>
      <hr className="line-break" />
      <h3>Highlights</h3>
      <StarOutlineIcon />

      <hr className="line-break" />
      <h3>Organizations</h3>
      <img src={data.organizations_url} alt="pix" />
    </div>
  );
}
