import "./card.css";
import "atropos/css";
import Atropos from "atropos";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { setToken, toggleTeam } from "../redux/userSlice";

function Card({ card, context }) {
  const user = useSelector((state) => state.user);
  const atroposContainerRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (atroposContainerRef.current) {
      const myAtropos = Atropos({
        el: atroposContainerRef.current,
        stretchY: 50,
      });
    }
  }, []);

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const response = await axios({
  //         method: "GET",
  //         url: `${import.meta.env.VITE_API_URL}/user/${user.id}`,
  //         headers: {
  //           Authorization: `Bearer ${user.token}`,
  //         },
  //       });
  //       console.log("response.data", response.data);
  //       dispatch(setToken(response.data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // }, [user.team]);

  const handleCardClick = async () => {
    if (context === "/team") {
      try {
        const response = axios({
          method: "PATCH",
          url: `${import.meta.env.VITE_API_URL}/user/${card._id}`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        dispatch(toggleTeam({ user: user, card: card }));
      } catch (error) {
        console.log(error);
      }
    } else if (context === "/store") {
      console.log(card._id);
    }
  };

  return (
    <>
      <div
        className="my-atropos"
        ref={atroposContainerRef}
        onClick={handleCardClick}
      >
        <div className="atropos-scale">
          <div className="atropos-rotate">
            <div className="atropos-inner">
              <div className="">
                <img
                  src={card.background}
                  className="card-img-top"
                  id="background"
                  alt="backGround"
                  data-atropos-offset="-5"
                />
                <img
                  src={card.character}
                  className="card-img-top"
                  id="character"
                  alt="character"
                  data-atropos-offset="10"
                />
                <h5 id="cardName">{card.name}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
