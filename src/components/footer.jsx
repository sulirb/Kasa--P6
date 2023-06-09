import whiteLogo from "../assets/white-logo.png";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={whiteLogo} alt="logo" />
      </div>
      <span className="footer__span">© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;
