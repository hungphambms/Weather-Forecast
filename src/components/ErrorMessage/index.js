import PropTypes from "prop-types";

import styles from "./ErrorMessage.module.css";

function ErrorMessage({ message }) {
  return (
    <div aria-label="error-message" className={styles.message}>
      {message}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
