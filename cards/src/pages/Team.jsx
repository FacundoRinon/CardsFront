import "./team.css";
import Card from "../components/Card";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import ShowTeam from "../components/ShowTeam";

function Team() {
  const user = useSelector((state) => state.user);

  const team = user.team;
  const unlocked = user.unlockedCards;

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
        <div className="row justify-content-center mb-5">
          <ShowTeam slotA={team[0]} slotB={team[1]} slotC={team[2]} />
        </div>

        <div className="row text-center">
          <div className="col-12 col-sm-6 teamInfo">
            <h3>Points per hour</h3>
            <div className="col">
              <p>Physical power: {totalPhysicalPower}</p>
              <p>Intelligence: {totalIntelligence}</p>
              <p>Cursed power: {totalCursedPower}</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 teamInfo">
            <h3>Team members</h3>
            {user.team[0] ? <p>{user.team[0].name}</p> : <p>Slot 1 - Empty</p>}
            {user.team[1] ? <p>{user.team[1].name}</p> : <p>Slot 2 - Empty</p>}
            {user.team[2] ? <p>{user.team[2].name}</p> : <p>Slot 3 - Empty</p>}
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
            <div className="div">
              <h4 className="text-center mt-3">
                Start recruiting in the store!!
              </h4>
              <h6 className="text-center">
                <Link to={"/store"}>Store</Link>
              </h6>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Team;
