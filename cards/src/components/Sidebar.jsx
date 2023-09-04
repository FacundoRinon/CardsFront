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
        <h2 className="pt-3">Jujutsu Cards</h2>
        <Link to={"/editProfile"}>
          <img
            id="homePic"
            src={`${import.meta.env.VITE_IMG_URL}/${user.avatar}`}
            alt="Foto"
          />
        </Link>
        <h3 className="tw">
          {user.firstname} {user.lastname}
        </h3>
        <p>@{user.username}</p>
        <Link className="no-underline" to={"/team"}>
          <h5 className="tw sidebarLink">Team</h5>
        </Link>
        <Link className="no-underline" to={"/store"}>
          <h5 className="tw sidebarLink">Store</h5>
        </Link>
        <Link className="no-underline" to={"/project"}>
          <h5 className="tw sidebarLink">About Project</h5>
        </Link>
        <span onClick={handleLogout} className="btn btn-danger sidebarLogout">
          Log Out
        </span>
      </div>
    </>
  );
}

export default Sidebar;
