import React from "react";

const Input = ({ label, name, setValue, ...props }) => {
  const handleChange = (v) => {
    setValue(v?.target?.value);
  };

  return (
    <div className="input-field">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input"
        onChange={handleChange}
        name={name}
        {...props}
      />
    </div>
  );
};

export default Input;
