import React from "react";

const VisibilityFilter = ({ filters }) => {
  return filters.map((filter, i) => (
    <button key={`filter-${i}`}>{filter}</button>
  ));
};

export default VisibilityFilter;
