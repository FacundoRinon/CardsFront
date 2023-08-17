import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./home.css";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="d-flex">
        <div className="col-2">
          <Sidebar user={user} />
        </div>
        <div className="col-10">
          <img
            src={`${import.meta.env.VITE_IMG_URL}/jujutsuWallpaper.jpg`}
            alt=""
            className="wallpaper"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
