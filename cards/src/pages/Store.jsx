import Card from "../components/card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCards } from "../redux/cardsSlice";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Store() {
  const user = useSelector((state) => state.user);
  const cards = useSelector((state) => state.cards);

  const [filteredCards, setFilteredCards] = useState(cards);

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

  useEffect(() => {
    gettingCards();
    setFilteredCards(cards);
  }, [user]);

  const possesionCards =
    cards &&
    cards.filter((card) =>
      user.unlockedCards.some((unlockedCard) => unlockedCard._id === card._id)
    );

  const lockedCards =
    cards &&
    cards.filter(
      (card) =>
        !user.unlockedCards.some(
          (unlockedCard) => unlockedCard._id === card._id
        )
    );

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-2">
            <Link to={"/"}>
              <h5>
                <i className="bi bi-arrow-left fs-1"></i>
              </h5>
            </Link>
          </div>
        </div>
        <div className="row text-center mt-3 mb-5">
          <h1>Get new team-mates</h1>
        </div>
        <div className="container">
          <div className="row">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                State
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setFilteredCards(possesionCards)}>
                  Unlocked
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setFilteredCards(lockedCards)}>
                  Locked
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setFilteredCards(cards)}>
                  All
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="row d-flex mb-5">
          {filteredCards ? (
            filteredCards.map((card) => {
              return <Card key={card._id} card={card} context={"/store"} />;
            })
          ) : (
            <p>No hay cartas</p>
          )}
        </div>
      </div>
    </>
  );
}
export default Store;
