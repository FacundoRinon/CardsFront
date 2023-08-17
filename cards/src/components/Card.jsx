import "./card.css";
import "atropos/css";
import Atropos from "atropos";
import { useEffect, useRef } from "react";

function Card({ card }) {
  const atroposContainerRef = useRef(null);

  useEffect(() => {
    if (atroposContainerRef.current) {
      const myAtropos = Atropos({
        el: atroposContainerRef.current,
        stretchY: 50,
      });
    }
  }, []);

  console.log(card);

  return (
    <>
      <div className="my-atropos" ref={atroposContainerRef}>
        <div class="atropos-scale">
          <div class="atropos-rotate">
            <div class="atropos-inner">
              <div className="card">
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
                <h5>{card.name}</h5>
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
