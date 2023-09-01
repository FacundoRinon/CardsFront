import "./showTeam.css";
import "atropos/css";
import Atropos from "atropos";
import Example from "./CharacterModal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ShowTeam({ slotA, slotB, slotC }) {
  useEffect(() => {
    const myAtropos = Atropos({
      el: ".my-atropos2",
    });
  }, []);

  // const user = useSelector((state) => state.user);

  const [trigger, setTrigger] = useState(false);
  const [modalClosed, setModalClosed] = useState(true);
  const [teamMemberModal, setTeamMemberModal] = useState(null);

  const handleModalClose = () => {
    setTrigger(false);
    setModalClosed(true);
  };

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
                    onClick={() => {
                      if (modalClosed) {
                        setTeamMemberModal(slotA);
                        setTrigger(true);
                        setModalClosed(false);
                      }
                    }}
                  />
                )}
                {slotB && (
                  <img
                    id="slotB"
                    src={slotB.character}
                    alt="slot A"
                    data-atropos-offset="10"
                    onClick={() => {
                      if (modalClosed) {
                        setTeamMemberModal(slotB);
                        setTrigger(true);
                        setModalClosed(false);
                      }
                    }}
                  />
                )}
                {slotC && (
                  <img
                    id="slotC"
                    src={slotC.character}
                    alt="slot A"
                    data-atropos-offset="7"
                    onClick={() => {
                      if (modalClosed) {
                        setTeamMemberModal(slotC);
                        setTrigger(true);
                        setModalClosed(false);
                      }
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {teamMemberModal && (
          <Example
            className="characterModal"
            card={teamMemberModal}
            context={"/team"}
            trigger={trigger}
            onClose={handleModalClose}
          />
        )}
      </div>
    </>
  );
}

export default ShowTeam;
