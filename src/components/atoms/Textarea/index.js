import React from "react";

const style = {
  width: '100%',
  padding: '15px',
  backgroundColor: '#fff',
  border: '1px solid #e3e5e7',
  borderRadius: '8px',
  outline: 'none',
  color: '#000',
};
const Textarea = (props) => (
  <textarea
    {...{...props, style}}
    cols="30"
    rows="10"
  />
);

export default Textarea;