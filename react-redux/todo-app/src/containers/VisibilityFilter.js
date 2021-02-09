import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions/action";
import { FILTERS } from "../actions/actionTypes";

const VisibilityFilter = ({ activeFilter, setFilter }) => {
  return FILTERS.map((filter, i) => (
    <button
      className={filter === activeFilter ? "active" : ""}
      onClick={() => setFilter(filter)}
      key={`filter-${i}`}
    >
      {filter}
    </button>
  ));
};

const mapState = (state) => ({
  activeFilter: state.visibilityFilter.activeFilter,
});

export default connect(mapState, { setFilter })(VisibilityFilter);
