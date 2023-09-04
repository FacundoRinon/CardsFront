import "./card.css";
import "atropos/css";
import Atropos from "atropos";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CharacterModal from "./CharacterModal";

function Card({ card, context }) {
  const user = useSelector((state) => state.user);
  const atroposContainerRef = useRef(null);

  const [trigger, setTrigger] = useState(false);
  const [modalClosed, setModalClosed] = useState(true);

  const handleModalClose = () => {
    setTrigger(false);
    setModalClosed(true);
  };

  useEffect(() => {
    if (atroposContainerRef.current) {
      const myAtropos = Atropos({
        el: atroposContainerRef.current,
        stretchY: 50,
      });
    }
  }, []);

  const cardInPossesion = user.unlockedCards.some(
    (unlockedCard) => unlockedCard._id === card._id
  );

  const pointToPurchase =
    card.cost[0] <= user.physicalPower &&
    card.cost[1] <= user.intelligencePoints &&
    card.cost[2] <= user.cursedPower;

  console.log("points", pointToPurchase);

  return (
    <>
      <div
        className={`my-atropos ${!cardInPossesion ? "card-disabled" : ""}`}
        ref={atroposContainerRef}
        onClick={() => {
          if (modalClosed) {
            setTrigger(true);
            setModalClosed(false);
          }
        }}
      >
        <div className="atropos-scale">
          <div className="atropos-rotate">
            <div className="atropos-inner">
              <div>
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
                <h5
                  id="cardName"
                  className="text-center"
                  data-atropos-offset="7"
                >
                  {card.name}
                </h5>
                {!cardInPossesion && pointToPurchase ? (
                  <h2 id="recruitText" data-atropos-offset="15">
                    Recruit it
                  </h2>
                ) : !cardInPossesion ? (
                  <h2 id="lockedText" data-atropos-offset="15">
                    Locked
                  </h2>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <CharacterModal
          className="characterModal"
          card={card}
          context={context}
          trigger={trigger}
          onClose={handleModalClose}
        />
      </div>
    </>
  );
}

export default Card;
