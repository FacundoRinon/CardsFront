import "./card.css";
import "atropos/css";
import Atropos from "atropos";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Example from "./CharacterModal";

import axios from "axios";
import { addCard, toggleTeam } from "../redux/userSlice";

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

  const handleCardClick = async () => {
    if (context === "/team") {
      try {
        const response = await axios({
          method: "PATCH",
          url: `${import.meta.env.VITE_API_URL}/user/${card._id}`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (response.data === "teamComplete") {
          toast.error(
            <div>
              <span className="Toastify__toast--error"></span>
              Your team is full
            </div>,
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
        } else {
          dispatch(toggleTeam({ user: user, card: card }));
        }
      } catch (error) {
        console.log(error);
      }
    } else if (context === "/store") {
      try {
        const response = await axios({
          method: "PUT",
          url: `${import.meta.env.VITE_API_URL}/user/${card._id}`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (response.data === "alreadyUnlocked") {
          toast.error(
            <div>
              <span className="Toastify__toast--error"></span>
              You already have this card
            </div>,
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
        } else {
          dispatch(addCard({ user: user, card: card }));
          toast.success(
            <div>
              <span className="Toastify__toast--success"></span>
              New card added to your collection
            </div>,
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div
        className="my-atropos"
        ref={atroposContainerRef}
        // onClick={handleCardClick}
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
        <Example className="characterModal" card={card} />
        <ToastContainer />
      </div>
    </>
  );
}

export default Card;
