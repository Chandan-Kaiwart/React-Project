import Jsx, { Greet } from "./container/Jsx";
import DataBinding from "./container/DataBinding";
import Users from "./container/Users";
import { Routes, NavLink, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">
          <li className={"nav-item"}>
            <NavLink className="nav-link" to="/">Jsx</NavLink>
          </li>
          <li className={"nav-item"}>
            <NavLink className="nav-link" to="/binding">DataBinding</NavLink>
          </li>
          <li className={"nav-item"}>
            <NavLink className="nav-link" to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
      <Routes>
        <Route path="/" element={<Jsx />} />
        <Route path="/binding" element={<DataBinding />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;