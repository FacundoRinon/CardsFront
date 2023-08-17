import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DondeHayCartas from "./pages/dondeHayCartas";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Team from "./pages/Team";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
