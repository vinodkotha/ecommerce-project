import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherProps }) => (
  //for label if label exists we show it otherwise null, also apply shrink effect for any value in field
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />

    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
