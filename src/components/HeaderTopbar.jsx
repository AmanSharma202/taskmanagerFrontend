import { Link } from "react-router-dom";

const HeaderTopbar = () => {
  return (
    <div className="header">
      <div className="logo">
        Task Manager
      </div>

      <nav className="nav">
        <Link to="/" className="nav-link">All Tasks</Link>
        <Link to="/create" className="nav-link">Create</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </div>
  );
};

export default HeaderTopbar;