import React from "react";
import {Input, Textarea, Checkbox, Label} from 'components/atoms';
import { useInput } from 'hooks';

const renderFieldType = ({type, field, label, value, inputHandler}) => {
  switch (type) {
    case 'text':
      return (
        <Input
          type={type}
          name={field}
          placeholder={label}
          value={value}
          onChange={inputHandler}
        />
      );
    case 'email':
      return (
        <Input
          type={type}
          name={field}
          placeholder={label}
          value={value}
          onChange={inputHandler}
        />
      );
    case 'number':
      return (
        <Input
          type="text"
          name={field}
          placeholder={label}
          value={value}
          onChange={inputHandler}
        />
      );
    case 'password':
      return (
        <Input
          type={type}
          name={field}
          placeholder={label}
          value={value}
          onChange={inputHandler}
        />
      );
    case 'checkbox':
      return (
        <Checkbox
          name={field}
          id={`chbx${field}`}
          label={label}
          checked={value}
          onChange={inputHandler}
        />
      );
    case 'textarea':
      return (
        <Textarea
          name={field}
          placeholder={label}
          value={value}
          onChange={inputHandler}
        />
      );
    default:
      return null;
  }
};

const style = (customStylesObj = {}) => ({
  display: 'flex',
  flexDirection:'column',
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  ...customStylesObj,
});


const FormField = props => {
  const { handleInputChange, value } = useInput(props);
  const {type, hasError, label, validation } = props;
  return (
    <div style={style(props.styles)}>
      <div style={{display: 'flex'}}>
        <Label text={type === 'checkbox' ? '' : label} />
        {validation.required && (<span style={{color: 'red', marginTop: '-3px'}}>&nbsp;*</span>)}
      </div>
      {renderFieldType(
        {
          inputHandler: handleInputChange, value, ...props
        })
      }
      {hasError && (<span style={{color: 'red', fontSize: '12px'}}>{hasError}</span>)}
    </div>
  )
};


export default FormField;