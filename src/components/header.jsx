import Logo from "../assets/logo.png";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav__ul">
          <li>
            <a className="header__nav__ul__li__a" href="/">
              Accueil
            </a>
          </li>
          <li>
            <a className="header__nav__ul__li__a" href="/about">
              À propos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
