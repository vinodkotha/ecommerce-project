import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  invertColor,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={`${invertColor ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
