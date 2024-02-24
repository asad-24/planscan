import { NavLink } from "react-router-dom";
import logoPlanscan from "../../assets/Logo (1).png";
const Header = () => {

 
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img src={logoPlanscan} alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <button type="button" className="btn btn-outline-primary mx-2">Sign in</button>
<NavLink to="/request">
              <button type="button" className="btn btn-primary ">Request a demo</button>
              </NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Header;
