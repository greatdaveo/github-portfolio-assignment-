import "./UserProfile.css";

export default function UserProfile({ data, repositories }) {
  return (
    <div>
      <img src={data.avatar_url} alt="User Profile" />
      <h1>{data.bio}</h1>
      <p>
        <span>Followers:</span> {data.followers} <span>Following:</span>{" "}
        {data.following}
      </p>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank">
              {repo.html_url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
