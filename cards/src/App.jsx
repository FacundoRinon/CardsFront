import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Team from "./pages/Team";
import Store from "./pages/Store";
import ProtectedRoute from "./components/ProtectedRoute";
import EditProfile from "./pages/EditProfile";
import AboutProject from "./pages/AboutProject";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/project" element={<AboutProject />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="/team" element={<Team />} context={"/team"} />
          <Route path="/store" element={<Store />} context={"/store"} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
