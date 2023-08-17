// import "./App.css";
import Card from "../components/card";

function DondeHayCartas() {
  const Spiderman = {
    background: `${import.meta.env.VITE_IMG_URL}/buildings.jpg`,
    character: `${import.meta.env.VITE_IMG_URL}/tobeySpiderMan.png`,
    logo: `${import.meta.env.VITE_IMG_URL}/Spiderman-Logo-1996.png`,
  };

  const Quicksilver = {
    background: `${import.meta.env.VITE_IMG_URL}/streetBg.jpeg`,
    character: `${import.meta.env.VITE_IMG_URL}/QuicksilverChar.png`,
    logo: `${import.meta.env.VITE_IMG_URL}/qsLogo.webp`,
  };

  const DoctorStrange = {
    background: `${import.meta.env.VITE_IMG_URL}/StreetNight.jpg`,
    character: `${import.meta.env.VITE_IMG_URL}/DocStrChar.png`,
    logo: `${import.meta.env.VITE_IMG_URL}/DocStrLogo.png`,
  };

  const IronMan = {
    background: `${import.meta.env.VITE_IMG_URL}/sokovia.webp`,
    character: `${import.meta.env.VITE_IMG_URL}/Iron-Man.png`,
    logo: `${import.meta.env.VITE_IMG_URL}/IronManLogo.png`,
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <Card heroe={Spiderman} />
          <Card heroe={Quicksilver} />
          <Card heroe={DoctorStrange} />
          <Card heroe={IronMan} />
        </div>
      </div>
    </>
  );
}

export default DondeHayCartas;
