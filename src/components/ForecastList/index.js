// import React from "react";
import PropTypes from "prop-types";

import ForecastItem from "../ForecastItem";

import styles from "./ForecastList.module.css";

function ForecastList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <ForecastItem key={item.dt} item={item} />
      ))}
    </div>
  );
}

ForecastList.defaultProps = {
  items: [],
};

ForecastList.propTypes = {
  items: PropTypes.array,
};

export default ForecastList;
