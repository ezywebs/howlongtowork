import PropTypes from "prop-types";

const Badge = ({ text }) => {
  return <span className="badge badge-secondary">{text}</span>;
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Badge;
