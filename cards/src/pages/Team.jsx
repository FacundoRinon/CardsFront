import "./team.css";
import { useDispatch } from "react-redux";
import Card from "../components/Card";
import { getCards } from "../redux/cardsSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ShowTeam from "../components/ShowTeam";

function Team() {
  const user = useSelector((state) => state.user);
  const cards = useSelector((state) => state.cards);

  const team = user.team;
  const unlocked = user.unlockedCards;

  const dispatch = useDispatch();

  let totalPhysicalPower = 0;
  let totalIntelligence = 0;
  let totalCursedPower = 0;

  user.team.forEach((card) => {
    totalPhysicalPower += card.physicalPower * 6;
  });

  user.team.forEach((card) => {
    totalIntelligence += card.intelligence * 6;
  });

  user.team.forEach((card) => {
    totalCursedPower += card.cursedPower * 6;
  });

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
        <div className="row mb-3 text-center">
          <h1>Your team</h1>
        </div>
        <div className="row">
          <ShowTeam />
        </div>
        <div className="row">
          {team.length >= 1 ? (
            <Card key={team[0]._id} card={team[0]} context={"/team"} />
          ) : (
            <div className="col-8 col-md-6 col-lg-3 col-xl-3 text-center team-member">
              <i className="bi bi-file-plus"></i>
              <p>Team member 1</p>
            </div>
          )}

          {team.length >= 2 ? (
            <Card key={team[1]._id} card={team[1]} context={"/team"} />
          ) : (
            <div className="col-8 col-md-6 col-lg-3 col-xl-3 text-center team-member">
              <i className="bi bi-file-plus"></i>
              <p>Team member 2</p>
            </div>
          )}
          {team.length >= 3 ? (
            <Card key={team[2]._id} card={team[2]} context={"/team"} />
          ) : (
            <div className="col-8 col-md-6 col-lg-3 col-xl-3 text-center team-member">
              <i className="bi bi-file-plus"></i>
              <p>Team member 3</p>
            </div>
          )}
        </div>
        <div className="row d-flex text-center">
          <h3>Points per hour</h3>
          <div className="col">
            <p>Physical power: {totalPhysicalPower}</p>
            <p>Intelligence: {totalIntelligence}</p>
            <p>Cursed power: {totalCursedPower}</p>
          </div>
        </div>
        <div className="row text-center">
          <h2 className="mt-5 mb-3">Available characters</h2>
        </div>
        <div className="row mb-5">
          {unlocked.length > 0 ? (
            unlocked.map((card) => {
              return <Card key={card._id} card={card} context={"/team"} />;
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
