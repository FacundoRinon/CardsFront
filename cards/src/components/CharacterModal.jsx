import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { addCard, toggleTeam } from "../redux/userSlice";

function CharacterModal({ card, context, trigger, onClose }) {
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);

  const isCardUnlocked = user.unlockedCards.some(
    (cardObj) => cardObj.id === card.id
  );

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  useEffect(() => {
    setShow(trigger);
  }, [trigger]);

  const dispatch = useDispatch();

  const cardInPossesion = user.unlockedCards.some(
    (unlockedCard) => unlockedCard._id === card._id
  );
  const cardInTeam = user.team.some((teamCard) => teamCard._id === card._id);

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
              position: toast.POSITION.TOP_CENTER,
            }
          );
        } else {
          dispatch(toggleTeam({ user: user, card: card }));
          toast.success(
            <div>
              <span className="Toastify__toast--success"></span>
              {card.name} has joined the team
            </div>,
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
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
        } else if (response.data === "insuficentPoints") {
          toast.error(
            <div>
              <span className="Toastify__toast--error"></span>
              You don't have enough points
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
              {card.name} was added to your collection
            </div>,
            {
              position: toast.POSITION.TOP_CENTER,
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
      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header
          className="characterModal"
          closeVariant="white"
          closeButton
        >
          <Modal.Title>{card.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="characterModal">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <img
                  src={`${card.character}`}
                  className="characterModalPic"
                  alt=""
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <h3>Description</h3>
                  <p>{card.description}</p>
                </div>
                <div className="row">
                  {isCardUnlocked ? (
                    <div className="col-6">
                      <h3>Ability</h3>
                      <p>{card.ability}</p>
                    </div>
                  ) : (
                    <div className="col-4">
                      <h3>Ability</h3>
                      <p>{card.ability}</p>
                    </div>
                  )}
                  {!isCardUnlocked && (
                    <div className="col-4">
                      <h3>Cost</h3>

                      <h5>physical power: {card.cost[0]} </h5>
                      <h5>intelligence: {card.cost[1]}</h5>
                      <h5>cursed power: {card.cost[2]}</h5>
                    </div>
                  )}
                  {isCardUnlocked ? (
                    <div className="col-6">
                      <h3>Stats</h3>
                      <h5>physical power: {card.physicalPower}</h5>
                      <h5>intelligence: {card.intelligence}</h5>
                      <h5>cursed power: {card.cursedPower}</h5>
                    </div>
                  ) : (
                    <div className="col-4">
                      <h3>Stats</h3>
                      <h5>physical power: {card.physicalPower}</h5>
                      <h5>intelligence: {card.intelligence}</h5>
                      <h5>cursed power: {card.cursedPower}</h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="characterModal">
          {context === "/team" &&
            (cardInTeam ? (
              <Button variant="danger" onClick={handleCardClick}>
                Remove from team
              </Button>
            ) : (
              <Button variant="success" onClick={handleCardClick}>
                Add to team
              </Button>
            ))}
          {context === "/store" &&
            (cardInPossesion ? (
              <Button variant="secondary" onClick={handleCardClick}>
                Already in posession
              </Button>
            ) : (
              <Button variant="primary" onClick={handleCardClick}>
                Unlock card
              </Button>
            ))}
        </Modal.Footer>
        <ToastContainer />
      </Modal>
    </>
  );
}

export default CharacterModal;
