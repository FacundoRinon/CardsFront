import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setToken } from "../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [firstnameValue, setFirstnameValue] = useState("");
  const [lastnameValue, setLastnameValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [password2Value, setPassword2Value] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user`,
        {
          firstname: firstnameValue,
          lastname: lastnameValue,
          username: usernameValue,
          email: emailValue,
          password: passwordValue,
          confirmedPassword: password2Value,
        }
      );

      console.log(response.data);

      if (response.data.token) {
        dispatch(setToken(response.data));
        navigate("/");
      } else {
        toast.error(
          <div>
            <span className="Toastify__toast--error"></span>
            Username or email already registred <span> </span>
          </div>,
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  }

  return (
    <>
      <div className="d-flex">
        <div className="container">
          <div className="row">
            <div className="col-8 loginWall">
              <img
                src={`${import.meta.env.VITE_IMG_URL}/loginwall.webp`}
                alt=""
              />
            </div>
            <div className="col-4 text-center loginForm">
              <h1 className="title mb-5">Start collecting!</h1>

              <div className="row d-flex justify-content-center">
                <form
                  className="w-75"
                  method="post"
                  action="/"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3">
                    <input
                      type="string"
                      className="form-control"
                      id="firstname"
                      aria-describedby="emailHelp"
                      placeholder="First name"
                      name="firstname"
                      value={firstnameValue}
                      onChange={(event) =>
                        setFirstnameValue(event.target.value)
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="string"
                      className="form-control"
                      id="lastname"
                      aria-describedby="emailHelp"
                      placeholder="Last name"
                      name="lastname"
                      value={lastnameValue}
                      onChange={(event) => setLastnameValue(event.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="string"
                      className="form-control"
                      id="username"
                      aria-describedby="emailHelp"
                      placeholder="Username"
                      name="username"
                      value={usernameValue}
                      onChange={(event) => setUsernameValue(event.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="E-Mail"
                      name="email"
                      value={emailValue}
                      onChange={(event) => setEmailValue(event.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      name="password"
                      value={passwordValue}
                      onChange={(event) => setPasswordValue(event.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmedPassword"
                      placeholder="Confirm password"
                      name="confirmedPassword"
                      value={password2Value}
                      onChange={(event) =>
                        setPassword2Value(event.target.value)
                      }
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                  <ToastContainer />
                </form>
                <p className="mt-3">Already have an account?</p>
                <Link to="/login">Login!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
