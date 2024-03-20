import "./Navbar.scss";
import Profile from "../../assets/images/profile.webp";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <div className="container flex">
        <div className="logo">
          <a href="#">Athen</a>
        </div>
        <div className="left-side flex">
          <div className="profile flex">
            <img src={Profile} alt="" />
            <p className="small-text">Joy Anelka</p>
          </div>
          <div className="direction-icons flex">
            <p>
              <button
                type="button"
                id="messages"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                <i class="fa-solid fa-message"></i>
              </button>
            </p>
            <p>
              <i class="fa-solid fa-bell"></i>
            </p>
          </div>

          <div className="authentication-btn">
            <Link className="btn" to="/signup">
              LOGOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
