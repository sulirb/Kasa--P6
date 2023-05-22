import "../components/tag.scss";
import PropTypes from "prop-types";

function Tag(props) {
  return (
    <div className="tag">
      <span className="tag_span">{props.tag}</span>
    </div>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
