import Sidebar from "../components/Sidebar";
import "./home.css";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { getCards } from "../redux/cardsSlice";
import { setToken } from "../redux/userSlice";

function Home() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const gettingCards = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/cards/`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch(getCards(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch(setToken(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingCards();
  }, [user.team]);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <div className="d-flex">
        <div className="col-2 sidebar">
          <Sidebar user={user} />
        </div>
        <div className="col-12 col-sm-10">
          <div className="d-block d-sm-none">
            <Navbar />
          </div>
          <img
            src={`${import.meta.env.VITE_IMG_URL}/jujutsuWallpaper.jpg`}
            alt=""
            className="wallpaper"
          />
          <div className="pointSpace">
            <small className="homePoints">
              Physical power: {user.physicalPower}
            </small>
            <small className="homePoints">
              Intelligence: {user.intelligencePoints}
            </small>
            <small className="homePoints">
              Cursed power: {user.cursedPower}
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
