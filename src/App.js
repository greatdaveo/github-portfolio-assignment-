import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GitHubNavbar from "./components/GitHubNavbar";
import Header from "./components/GitHubHeader";
import Home from "./pages/HomePage";
import Error from "./pages/Error";
import RepoInfo from "./pages/RepoInfo";
import GitHubOverview from "./components/GitHubOverview";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <GitHubNavbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos/greatdaveo/:full_name" element={<RepoInfo />} />
          <Route path="/overview" element={<GitHubOverview />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
