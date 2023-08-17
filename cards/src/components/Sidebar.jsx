import { useDispatch } from "react-redux";
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { removeToken } from "../redux/userSlice";
import { removeCards } from "../redux/cardsSlice";

function Sidebar({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogout() {
    dispatch(removeToken());
    dispatch(removeCards());
    navigate("/login");
  }

  return (
    <>
      <div id="sidebar" className="text-center">
        <img
          id="homePic"
          src={`${import.meta.env.VITE_IMG_URL}/${user.avatar}`}
          alt="Foto"
        />
        <h3 className="tw">
          {user.firstname} {user.lastname}
        </h3>
        <Link className="no-underline" to={"/cards"}>
          <h5 className="tw mt-5 sidebarLink">Team</h5>
        </Link>
        <Link className="no-underline" to={"/skills"}>
          <h5 className="tw mt-5 sidebarLink">Colection</h5>
        </Link>
        <Link className="no-underline" to={"/projects"}>
          <h5 className="tw mt-5 sidebarLink">Store</h5>
        </Link>
        <span onClick={handleLogout} className="btn btn-danger sidebarLogout">
          Log Out
        </span>
      </div>
    </>
  );
}

export default Sidebar;
