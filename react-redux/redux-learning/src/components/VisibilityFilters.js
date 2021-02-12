import React from "react";
import cx from "classnames";
import { VISIBILITY_FILTERS } from "../redux/constants";

const VisibilityFilters = ({ activeFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filters-{currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {} /*waiting for setFilter handlers*/}
          ></span>
        );
      })}
    </div>
  );
};
