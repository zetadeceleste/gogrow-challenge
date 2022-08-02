import React, { useState } from "react";

const InputPassword = ({ label, name, setValue, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (v) => {
    setValue(v?.target?.value);
  };

  const toggleType = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const LockIcon = () => (
    <svg
      width="16"
      height="21"
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM11.1 7H4.9V5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7Z"
        fill="#BEBCBC"
      />
    </svg>
  );

  const LockOpenIcon = () => (
    <svg
      width="16"
      height="21"
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <title>Layer 1</title>
        <path
          id="svg_1"
          fill="#BEBCBC"
          d="m13.9375,7l-1,0l0,-2c0,-2.76 -2.24,-5 -5,-5c-2.76,0 -5,2.24 -5,5l0,2l-1,0c-1.1,0 -2,0.9 -2,2l0,10c0,1.1 0.9,2 2,2l12,0c1.1,0 2,-0.9 2,-2l0,-10c0,-1.1 -0.9,-2 -2,-2zm-6,9c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2zm3.1,-9l-6.2,0l0,-2c0,-1.71 1.39,-3.1 3.1,-3.1c1.71,0 3.1,1.39 3.1,3.1l0,2z"
        />
        <line
          id="svg_5"
          y2="6.50002"
          x2="5.31251"
          y1="6.50002"
          x1="2.56253"
          stroke="#ffffff"
          fill="none"
        />
        <line
          stroke="#ffffff"
          id="svg_6"
          y2="5.68753"
          x2="2.56253"
          y1="5.68753"
          x1="5.06251"
          fill="none"
        />
      </g>
    </svg>
  );

  return (
    <div className="input-field input-password">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input"
        onChange={handleChange}
        name={name}
        type={showPassword ? "text" : "password"}
        autoComplete="new-password"
        {...props}
      />
      <button className="icon" onClick={toggleType} tabIndex="-1">
        {showPassword ? <LockOpenIcon /> : <LockIcon />}
      </button>
    </div>
  );
};

export default InputPassword;
