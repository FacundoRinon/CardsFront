import { useDispatch } from "react-redux";
import Card from "../components/card";
import { getCards } from "../redux/cardsSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import axios from "axios";

function Team() {
  const user = useSelector((state) => state.user);
  const cards = useSelector((state) => state.cards);

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

  console.log(cards);

  useEffect(() => {
    gettingCards();
  }, [user]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <p>Volver</p>
          </div>
        </div>
        <div className="row">
          <h1>Pick your team</h1>
        </div>
        <div className="row">
          {cards ? (
            cards.map((card) => {
              return <Card key={card._id} card={card} />;
            })
          ) : (
            <p>No hay cartas</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Team;
