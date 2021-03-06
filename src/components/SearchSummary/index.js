import React from "react";
import PropTypes from "prop-types";

import styles from "./SearchSummary.module.css";
import { k2c } from "../../utils/temperature";

function SearchSummary({ summary }) {
  if (!summary || !summary.current) {
    return null;
  }

  const { name, timezone, current } = summary;

  return (
    <div aria-label="search-summary" className={styles.container}>
      <h3>{name}</h3>
      <p>
        <strong>Timezone:</strong> {timezone}
      </p>

      <label>
        <img
          src={`http://openweathermap.org/img/w/${current.weather[0].icon}.png`}
          alt="Temp Icon"
        />

        {k2c(current.temp)}
      </label>
    </div>
  );
}

SearchSummary.defaultProps = {
  summary: {},
};

SearchSummary.propTypes = {
  summary: PropTypes.object,
};

export default SearchSummary;
