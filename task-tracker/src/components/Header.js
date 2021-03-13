import PropTypes from "prop-types";
import Button from "./Button";
// options:
// you could leave props out and have empty () if you don't want to modify the element
// you could put in "props" and then refer to props.whatever by putting whatever="something" in the App.js <Header />
// you could 'destructure' the props by replacing them with { something } and then putting {something} in your <h1></h1>

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button color="black" text="Add" />
    </header>
  );
};

// You can add a default here like so:
Header.defaultProps = {
  title: "Task Tracker",
};

// This defines what you can pass to the Header f()
// you must import PropTypes above (type: impt)
// makes your code more robust and helps prevent errors
// you could add .isRequired after .string to make the prop
// required.
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
