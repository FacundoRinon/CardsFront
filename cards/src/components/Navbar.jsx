import "./navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCards } from "../redux/cardsSlice";
import { removeToken } from "../redux/userSlice";

function Navbar() {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogout() {
    dispatch(removeToken());
    dispatch(removeCards());
    navigate("/login");
  }

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h3 className="tw">
            <Link to={"/editProfile"} className="no-underline text-white">
              Jujutsu cards
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
                to={"/editProfile"}
              >
                {user.firstname} {user.lastname}
                <img
                  src={`${import.meta.env.VITE_IMG_URL}/${user.avatar}`}
                  alt="Pic"
                  className="navbarPic"
                />
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/team"}
              >
                Team
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/store"}
              >
                Store
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/project"}
              >
                About project
              </Link>
              <span
                onClick={handleLogout}
                className="btn btn-danger sidebarLogout"
              >
                Log Out
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
