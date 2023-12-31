import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setToken } from "../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/user/login`,
        data: { username: usernameValue, password: passwordValue },
      });
      if (response.data.token) {
        dispatch(setToken(response.data));
        navigate("/");
      } else {
        toast.error(
          <div>
            <span className="Toastify__toast--error"></span>
            Invalid credentials <span> </span>
          </div>,
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  async function handleInvited(event) {
    event.preventDefault();
    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/user/login`,
      data: { username: "InvitedUser", password: "jeje" },
    });
    if (response.data.token) {
      dispatch(setToken(response.data));
      navigate("/");
    } else {
      toast.error(
        <div>
          <span className="Toastify__toast--error"></span>
          Invalid credentials <span> </span>
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    }
  }

  return (
    <>
      <div className="d-flex">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 loginWall">
              <img
                src={`${import.meta.env.VITE_IMG_URL}/loginwall.webp`}
                alt=""
              />
            </div>
            <div className="col-12 col-sm-4 text-center loginForm">
              <h1 className="title mb-5">Welcome sorcerer!</h1>
              <form
                className="w-75"
                method="post"
                action="/login"
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <input
                    type="string"
                    className="form-control"
                    id="username"
                    aria-describedby="emailHelp"
                    placeholder="Username or email"
                    name="username"
                    value={usernameValue}
                    onChange={(event) => setUsernameValue(event.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder="Password"
                    name="Password"
                    value={passwordValue}
                    onChange={(event) => setPasswordValue(event.target.value)}
                  />
                </div>
                <div className="row justify-content-center">
                  <h6
                    className="btn btn-secondary mt-2 mb-2 w-75"
                    onClick={handleInvited}
                  >
                    Login as invited
                  </h6>

                  <button
                    type="submit"
                    className="btn btn-primary mt-2 mb-2 w-75"
                  >
                    Login
                  </button>
                  <p>Dont have an account?</p>
                  <Link to={"/signUp"}>SignUp</Link>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
