// import React from "react";
import PropTypes from "prop-types";

import Moment from "react-moment";
import { k2c } from "../../utils/temperature";

import styles from "./ForecastItem.module.css";

import imgMin from "./images/min.png";
import imgMax from "./images/max.png";

function ForecastItem({ item }) {
  return (
    <div aria-label="item" className={styles.item}>
      <h3>
        <Moment date={item.dt * 1000} format="dddd" />
      </h3>

      <p>
        <Moment date={item.dt * 1000} format="MMM DD, YYYY" />
      </p>

      <p>
        <img src={imgMin} alt="min icon" />
        <strong>Min</strong> {k2c(item.temp.min)}
        <span className={styles.divider}></span>
        <img src={imgMax} alt="max icon" />
        <strong>Max</strong> {k2c(item.temp.max)}
      </p>

      <label>
        <img
          src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
          alt="Temp Icon"
        />

        {k2c(item.temp.day)}
      </label>
    </div>
  );
}

ForecastItem.defaultProps = {
  item: {},
};

ForecastItem.propTypes = {
  item: PropTypes.object,
};

export default ForecastItem;
