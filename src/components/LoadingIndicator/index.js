import PropTypes from "prop-types";

import styles from "./LoadingIndicator.module.css";

import imgLoader from "./loader.gif";

function LoadingIndicator({ isLoading, children }) {
  return isLoading ? (
    <div className={styles.loading}>
      <img src={imgLoader} alt="loader" />
      Loading
    </div>
  ) : (
    children
  );
}

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};

export default LoadingIndicator;
