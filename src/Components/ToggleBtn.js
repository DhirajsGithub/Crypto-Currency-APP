import React from "react";
import styles from "./ToggleBtn.module.css";

const defaultOptions = {
  invertediconlogic: false,
};

const ReactThemeToggleButton = ({
  isdark,
  onChange,
  invertediconlogic = defaultOptions.invertediconlogic,
}) => (
  <label
    className={styles.container}
    title={isdark ? "Activate light mode" : "Activate dark mode"}
    aria-label={isdark ? "Activate light mode" : "Activate dark mode"}
  >
    <input
      type="checkbox"
      defaultChecked={invertediconlogic ? !isdark : isdark}
      onChange={onChange}
    />
    <div />
  </label>
);

export default ReactThemeToggleButton;
