import PropTypes from "prop-types";
import "../components/equipments.scss";

function Equipment(props) {
  return (
    <div className="equipment">
      <span>{props.equipment}</span>
    </div>
  );
}

Equipment.propTypes = {
  equipment: PropTypes.string.isRequired,
};

export default Equipment;
