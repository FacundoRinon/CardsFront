import "./showTeam.css";
import "atropos/css";
import Atropos from "atropos";
import { useEffect } from "react";

function ShowTeam({ slotA, slotB, slotC }) {
  useEffect(() => {
    const myAtropos = Atropos({
      el: ".my-atropos2",
    });
  }, []);

  console.log(slotA);

  return (
    <>
      <div className="atropos my-atropos2">
        <div className="atropos-scale">
          <div className="atropos-rotate">
            <div className="atropos-inner">
              <div className="div text-center">
                <img
                  id="teamBackground"
                  src={`${import.meta.env.VITE_IMG_URL}/jujutsuBackground.jpg`}
                  alt=""
                  data-atropos-offset="-5"
                />
                {slotA && (
                  <img
                    id="slotA"
                    src={slotA.character}
                    alt="slot A"
                    data-atropos-offset="5"
                    // onClick={}
                  />
                )}
                {slotB && (
                  <img
                    id="slotB"
                    src={slotB.character}
                    alt="slot A"
                    data-atropos-offset="10"
                  />
                )}
                {slotC && (
                  <img
                    id="slotC"
                    src={slotC.character}
                    alt="slot A"
                    data-atropos-offset="7"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowTeam;
