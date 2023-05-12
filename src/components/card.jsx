import PropTypes from "prop-types";
import DefaultPicture from "../assets/rectangle.png";

function Card({ picture, title, href }) {
  return (
    <a href={href}>
      <div>
        <img src={picture} alt="logo" />
        <div>
          <p>{title}</p>
        </div>
      </div>
    </a>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: "",
  picture: DefaultPicture,
  href: "/logement/:ficheNumber",
};

export default Card;
