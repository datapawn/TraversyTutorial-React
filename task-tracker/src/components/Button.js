import PropTypes from "prop-types";

// we take in props, but destructure it to { color, text }
// we then put the color in as an inline CSS warping:
//style={{ backgroundColor: color }}
// and we set the button copy to be {text}

const Button = ({ color, text }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
