import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import { Input } from "reactstrap";

import styles from "./SearchForm.module.css";

function SearchForm(props) {
  const [query, setQuery] = useState(props.query || "");
  const { onSearch } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceDropDown = useCallback(
    /* istanbul ignore next */
    _.debounce((nextValue) => onSearch(nextValue), 800),
    []
  );

  function handleInputChange(value) {
    setQuery(value);
    debounceDropDown(value);
  }

  return (
    <div className={styles.searchContainer}>
      <h1>Weather Forecast</h1>
      <p>Find the most current and reliable 5 day weather forecasts</p>
      <Input
        aria-label="search-input"
        placeholder="Enter City Name here ..."
        type="text"
        value={query}
        onChange={($event) => handleInputChange($event.target.value)}
      />
    </div>
  );
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
