import Logo from "../assets/logo.png";
import "./header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav__ul">
          <li>
            <NavLink
              exact
              to="/"
              className="header__nav_link"
              activeClassName="active"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/about"
              className="header__nav_link"
              activeClassName="active"
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
