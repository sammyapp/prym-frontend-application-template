const emailPattern = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+''))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const zipCodePattern = /^([0]{1}[1-9]{1}|[1-9]{1}[0-9]{1})[0-9]{3}$/;
const twoNumbersInStringPattern = /(\D*\d){2,}/;


const requiredValidator = (inputName, value) => {
  if (!value) {
    return `${inputName} is required`;
  }
  return null;
};

const emailValidator = (inputName, value) => {
  if (!value) {
    return requiredValidator(inputName, value);
  } else if (value && !emailPattern.test(value)) {
    return `${inputName} is invalid`;
  }
  return null;
};

const zipCodeValidator = (inputName, value) => {
  if (!value) {
    return requiredValidator(inputName, value);
  } else if (value && !zipCodePattern.test(value)) {
    return `${inputName} is invalid`;
  }
  return null;
};

const minLengthValidator = (inputName, value, minLengthVal) => {
  if (!value) {
    return requiredValidator(inputName, value);
  } else if (value && value.length < minLengthVal) {
    return `${inputName} must be at least ${minLengthVal} characters long`;
  }
  return null;
};


const passWordValidator = (inputName, value) => {
  if (!value) {
    return requiredValidator(inputName, value);
  } else if (value && value.length < 6) {
    return minLengthValidator(inputName, value, 6);
  } else if (value && !twoNumbersInStringPattern.test(value)) {
    return `${inputName} must contain at least 2 numbers`;
  }
  return null;
};

const passwordMatchValidator = (firstValue, secondValue) => {
  if (firstValue !== secondValue) {
    return 'Passwords must match';
  }
  return null;
};

const validateField = (fieldName, value, formData) => {
  switch (fieldName) {
    case 'lastname':
      return requiredValidator(fieldName, value) || minLengthValidator(fieldName, value, 2);
    case 'firstname':
      return requiredValidator(fieldName, value) || minLengthValidator(fieldName, value, 2);
    case 'email':
      return emailValidator(fieldName, value);
    case 'street':
      return requiredValidator(fieldName, value) || minLengthValidator(fieldName, value, 4);
    case 'city':
      return requiredValidator(fieldName, value) || minLengthValidator(fieldName, value, 4);
    case 'zip':
      return zipCodeValidator(fieldName, value);
    case 'password':
      return passWordValidator(fieldName, value);
    case 'repeatPassword':
      return passwordMatchValidator(formData.password, value);
    default:
      return null;
  }
};

const validate = values => {
  const errors = {};
  Object.keys(values).map(key => {
    if (validateField(key, values[key], values)) {
      errors[key] = validateField(key, values[key], values);
    }
    return key;
  });
  return errors;
};

export {
  validateField,
  validate
}