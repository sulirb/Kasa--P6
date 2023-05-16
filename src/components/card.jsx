import PropTypes from "prop-types";
import "./card.scss";
import { Link } from "react-router-dom";

function Card({ picture, title, href }) {
  return (
    <Link to={href} className="card">
      <div className="card__container">
        <img src={picture} alt="logo" className="card__container__picture" />
        <div className="card__container__title">
          <span className="card__container__title__span">{title}</span>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

Card.defaultProps = {
  href: "/logement/:ficheNumber",
};

export default Card;
