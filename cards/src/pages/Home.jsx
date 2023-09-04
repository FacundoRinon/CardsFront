import "./home.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import RulesModal from "../components/RulesModal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCards } from "../redux/cardsSlice";
import { setToken } from "../redux/userSlice";

function Home() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [trigger, setTrigger] = useState(false);
  const [modalClosed, setModalClosed] = useState(true);

  const handleModalClose = () => {
    setTrigger(false);
    setModalClosed(true);
  };

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
          <div className="div picContain">
            <img
              src={`${import.meta.env.VITE_IMG_URL}/jujutsuWallpaper.jpg`}
              alt=""
              className="wallpaper"
            />
            <div className="div infoLogo">
              <i
                className="bi bi-info-circle-fill"
                onClick={() => {
                  if (modalClosed) {
                    setTrigger(true);
                    setModalClosed(false);
                  }
                }}
              ></i>
            </div>
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
        <RulesModal trigger={trigger} onClose={handleModalClose} />
      </div>
    </>
  );
}

export default Home;
