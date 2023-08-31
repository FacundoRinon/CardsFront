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
    console.log("Actualiza data de cartas");
  }, [user.team]);

  useEffect(() => {
    getUserInfo();
    console.log("Actualiza data de user");
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
          <p className="pointSpace1">Physical power: {user.physicalPower}</p>
          <p className="pointSpace2">Intelligence: {user.intelligencePoints}</p>
          <p className="pointSpace3">Cursed power: {user.cursedPower}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
