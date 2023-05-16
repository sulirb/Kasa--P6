import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./collapse.scss";
import PropTypes from "prop-types";

function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((open) => !open);
  return (
    <div className="collapse-container">
      <div className="collapse-container__toggle" onClick={toggleOpen}>
        <span>{title}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {open && <p className="collapse-container__toggle_p">{children}</p>}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Collapse;
