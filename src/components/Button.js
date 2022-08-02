import React from "react";

import LoadingSpinner from "./LoadingSpinner";
import Facebook from "../assets/icons/facebook.svg";
import Google from "../assets/icons/google.svg";

const Button = ({ name, icon, disabled, loading, ...props }) => {
  const icons = {
    facebook: Facebook,
    google: Google,
  };

  return (
    <button
      className={`btn ${icon ? "btn--icon" : ""} ${disabled ? "disabled" : ""}`}
      disabled={disabled}
      {...props}
    >
      {icon && <img src={icons[icon]} alt={name} />}
      {name}
      {loading && <LoadingSpinner />}
    </button>
  );
};

export default Button;
