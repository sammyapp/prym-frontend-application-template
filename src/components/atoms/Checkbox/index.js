import React from "react";
import "./checkbox.scss";

const Checkbox = ({label, id, ...props}) => (
  <div className="checkbox">
    <input
      type="checkbox"
      {...{...props, id}}
    />
    <label htmlFor={id}>
      {label}
    </label>
  </div>
);

export default Checkbox;