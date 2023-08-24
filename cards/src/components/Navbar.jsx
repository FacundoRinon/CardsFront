import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h3 className="tw">
            <Link to={"/editProfile"} className="no-underline text-white">
              Facundo Riñón
            </Link>
          </h3>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/team"}
              >
                Team
              </Link>
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Collection
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/store"}
              >
                Store
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
