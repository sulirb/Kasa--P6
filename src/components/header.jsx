import Logo from "../assets/logo.png";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav__ul">
          <li>
            <Link to="/" className="header__nav__ul__li__a">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className="header__nav__ul__li__a">
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
