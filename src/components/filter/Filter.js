import React from "react";
import PropTypes from "prop-types";
import "./Filter.css";

const Filter = ({ value, onChange }) => (
  <label className="label__filter">
    Find contacts by name
    <input
      className="input__filter"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
