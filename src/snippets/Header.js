import { NavLink, Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            BRILLIANT
          </a>
          <ul className="navbar-nav">
            <NavLink className="nav-link" to="/Today">
              TODAY
            </NavLink>
            <NavLink className="nav-link" to="/Courses">
              COURSES
            </NavLink>
            <NavLink className="nav-link" to="/Practice">
              PRACTICE
            </NavLink>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#NavbarMenu"
            aria-controls="NavbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="NavbarMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link">
                  <button className="btn btn-outline-primary" type="button">
                    Log in
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <button className="btn btn-primary" type="button">
                    Sign up
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
