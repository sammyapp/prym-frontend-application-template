import React from "react";
import {Form, Button} from 'components/atoms';
import {FormField} from 'components/molecules';
import {getFormFields} from 'utils';
import {useSignUp} from 'hooks';

const style = {
  boxShadow: 'rgba(40,45,57,0.1) 0px 5px 12px 0px',
  maxWidth: '650px',
  height: '100%',
  width: '100%',
  borderRadius: '4px',
  padding: '20px 40px',
  backgroundColor: '#fff',
  margin: 'auto',
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    address: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      flexWrap: 'wrap',
    }
  }
};

const allFormFields = getFormFields();
const SignUpForm = () => {
  const {formValues, isValid, isSubmitted, formErrors, handleSubmit} = useSignUp();
  const addressItems = ['street', 'house', 'zip', 'city'];
  
  const renderFormFields = () =>
    allFormFields.map(item =>
      !addressItems.includes(item.field) &&
      item.field !== 'additionalInfo' &&
      (<FormField
        {...item}
        key={`field_${item.field}`}
        isSubmitted={isSubmitted}
        hasError={formErrors[item.field]}
      />));
  
  const renderAddressFields = () =>
    allFormFields.map(item =>
      addressItems.includes(item.field) &&
      item.field !== 'additionalInfo' &&
      (
        <FormField
          {...item}
          styles={{
            flexBasis: '50%',
          }}
          key={`field_${item.field}`}
          isSubmitted={isSubmitted}
          hasError={formErrors[item.field]}
        />
      ));
  
  const renderAdditionalInfoField = () => {
    const adInfoField = allFormFields.find(item => item.field === 'additionalInfo');
    return (
      <FormField
        {...adInfoField}
        isSubmitted={isSubmitted}
        hasError={formErrors[adInfoField.field]}
      />
    )
  };
  
  return (
    <div {...{style}}>
      <Form onSubmit={handleSubmit} noValidate style={style.form}>
        {renderFormFields()}
        {formValues.showAddress && (
          <div style={style.form.address}>{renderAddressFields()}</div>
        )}
        {renderAdditionalInfoField()}
        <Button type="submit" text="Submit" disabled={!isValid}/>
      </Form>
    </div>
  )
};

// const mapDispatch = (dispatch) => ({});
// const makeMapStateToProps = () => {
//   const getSignUpData = makeSignUpDataSelector();
//   return (state, props) => ({
//     signUpData: getSignUpData(state, props),
//     isFormValid: getIsFormValid(state),
//   });
// };

export default SignUpForm;