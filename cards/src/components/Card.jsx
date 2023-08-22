import "./card.css";
import "atropos/css";
import Atropos from "atropos";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import Example from "./CharacterModal";

function Card({ card, context }) {
  const user = useSelector((state) => state.user);
  const atroposContainerRef = useRef(null);

  const [trigger, setTrigger] = useState(false);
  const [modalClosed, setModalClosed] = useState(true);

  const handleModalClose = () => {
    setTrigger(false); // Restablecer trigger a false
    setModalClosed(true); // Indicar que el modal está cerrado
  };

  useEffect(() => {
    if (atroposContainerRef.current) {
      const myAtropos = Atropos({
        el: atroposContainerRef.current,
        stretchY: 50,
      });
    }
  }, []);

  return (
    <>
      <div
        className="my-atropos"
        ref={atroposContainerRef}
        onClick={() => {
          if (modalClosed) {
            setTrigger(true);
            setModalClosed(false); // Indicar que el modal no está cerrado
          }
        }}
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
                <h5 id="cardName" data-atropos-offset="7">
                  {card.name}
                </h5>
                <h5 id="cardName2" data-atropos-offset="5">
                  {card.name}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <Example
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
