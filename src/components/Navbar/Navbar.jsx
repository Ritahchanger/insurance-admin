import "./Navbar.scss";
import Profile from "../../assets/images/profile.webp";
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
              <i class="fa-solid fa-message"></i>
            </p>
            <p>
              <i class="fa-solid fa-message"></i>
            </p>
            <p>
              <i class="fa-solid fa-bell"></i>
            </p>
          </div>
           
          <div className="authentication" >
            <a href="#" className="btn">LOGOUT</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
