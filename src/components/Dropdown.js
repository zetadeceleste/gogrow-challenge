import React from "react";

const Dropdown = ({ name, values, setValue, selected = "" }) => {
  const handleChange = (e) => {
    setValue(e?.target?.value);
  };

  return (
    <select
      className="dropdown"
      name={name}
      value={selected}
      onChange={handleChange}
    >
      {values.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
