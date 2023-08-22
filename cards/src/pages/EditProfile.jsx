import "./editProfile.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setToken } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setFirstnameValue(user && user.firstname);
    setLastnameValue(user && user.lastname);
    setUsernameValue(user && user.username);
  }, [user]);

  const [firstnameValue, setFirstnameValue] = useState("");
  const [lastnameValue, setLastnameValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_API_URL}/user`,
      data: formData,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (response.data === "ExistingUsername") {
      toast.error(
        <div>
          <span className="Toastify__toast--error"></span>
          Username already in use <span> </span>
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    } else {
      const updatedUser = {
        ...user,
        firstname: response.data.firstname,
        lastname: response.data.lastname,
        username: response.data.username,
        avatar: response.data.avatar,
      };
      toast.success(`¡Perfil editado!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      dispatch(setToken(updatedUser));
      navigate("/");
    }
  }

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-2">
            <Link to={"/"}>
              <h5>
                <i className="bi bi-arrow-left"></i>
              </h5>
            </Link>
          </div>
        </div>
        <div className="row mb-3 text-center">
          <h1>Edit your profile</h1>
        </div>
        <div className="row mt-5">
          <div className="col-3">
            <img
              className="editProfilePic"
              src={`${import.meta.env.VITE_IMG_URL}/${user.avatar}`}
              alt=""
            />
          </div>
          <div className="col-9">
            <h2>
              {firstnameValue} {lastnameValue}
            </h2>
            <p>@{usernameValue}</p>
          </div>
        </div>
        {user && (
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6 mb-1">
                <label htmlFor="inputFirstname" className="form-label">
                  First name
                </label>
                <input
                  name="firstname"
                  className="form-control"
                  id="inputFirstname"
                  aria-describedby="firstnameHelp"
                  value={firstnameValue}
                  onChange={(event) => setFirstnameValue(event.target.value)}
                />
              </div>
              <div className="col-6 mb-1">
                <label htmlFor="inputLastname" className="form-label">
                  Last name
                </label>
                <input
                  name="lastname"
                  className="form-control"
                  id="inputLastname"
                  aria-describedby="lastnameHelp"
                  value={lastnameValue}
                  onChange={(event) => setLastnameValue(event.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6 mb-1">
                <label htmlFor="inputUsername" className="form-label">
                  Username
                </label>
                <input
                  name="username"
                  type="username"
                  className="form-control"
                  id="inputUsername"
                  value={usernameValue}
                  onChange={(event) => setUsernameValue(event.target.value)}
                />
              </div>
              <div className="col-6 pb-1">
                <label htmlFor="inputPhoto" className="mb-2">
                  Avatar
                </label>
                <div className="form">
                  <input
                    name="avatar"
                    className="form-control"
                    id="avatar"
                    type="file"
                  />
                </div>
              </div>
            </div>
            <button id="editProfileSaveButton" className="btn rounded-pill">
              Save
            </button>
          </form>
        )}
        <ToastContainer />
      </div>
    </>
  );
}

export default EditProfile;
