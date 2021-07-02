import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TextContext } from "../App/App";

const CharacterCount = ({ show }) => {
  const text = useContext(TextContext);

  if (!show) {
    return null;
  }

  return <div>Character Count: {text.length}</div>;
};

CharacterCount.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default CharacterCount;
