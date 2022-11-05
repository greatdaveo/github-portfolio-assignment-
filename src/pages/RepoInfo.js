import { useParams } from "react-router-dom";
import Details from "../components/UserDetails";
import { useFetch } from "../hooks/useFetch";
import ReadMe from "../components/ReadMe";
import { Helmet } from "react-helmet-async";
import "./RepoInfo.css";

export default function RepoInfo() {
  const { full_name } = useParams();
  const url = "https://api.github.com/repos/greatdaveo/" + full_name;
  const { data, loading, error } = useFetch(url);

  return (
    <div className="repo-info">
      {loading && <div>loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div className="left-repo">
          <h1 className="heading">{full_name}</h1>
        </div>
      )}

      <div className="more">
        <Helmet>
          <title>Repository information</title>
          <meta name="description" content="david olowomeye's github profile" />
          <link rel="canonical" href="/RepoInfo" />
        </Helmet>
        <div className="more-details">
          <div className="public-details">
            <p>Public</p>
            <p>{data.full_name}</p>
            <p>{data.created_at}</p>
          </div>

          <div className="public-details">
            <p>src</p>
            <p>{data.full_name}</p>
            <p>{data.created_at}</p>
          </div>

          <div className="public-details">
            <p>.gitignore</p>
            <p>{data.full_name}</p>
            <p>{data.created_at}</p>
          </div>

          <div className="public-details">
            <p>ReadMe.md</p>
            <p>{data.full_name}</p>
            <p>{data.created_at}</p>
          </div>

          <div className="public-details">
            <p>Package-lock-json</p>
            <p>{data.name}</p>
            <p>{data.created_at}</p>
          </div>

          <div className="public-details">
            <p>Package.json</p>
            <p>{data.name}</p>
            <p>{data.created_at}</p>
          </div>

          <ReadMe />
        </div>
        <Details />
      </div>
    </div>
  );
}
