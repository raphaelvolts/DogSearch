import { NavLink, Link } from "react-router-dom";

export default function Navbar({ dogs }) {
  const dogLinks = dogs.map((dog) => {
    return (
      <li className="nav-item" key={`nav-${dog.name}`}>
        <NavLink className="nav-link" to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>
      </li>
    );
  });
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dogs">
          DogSearch
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" key="home">
              <NavLink className="nav-link" aria-current="page" to="/dogs" end>
                Home
              </NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
}
