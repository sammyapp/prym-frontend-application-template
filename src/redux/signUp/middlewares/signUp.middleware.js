import { getSignUpDataFromStore, validate, persistFormDataDebounce } from "utils";

const signUpMiddleware = store => (next) => (action) => {
  if (action.type === 'REMOVE_INPUT_ERROR') {
    const formData = getSignUpDataFromStore(store);
    action.payload.errors = validate(formData);
    if (!Object.keys(action.payload.errors).length) {
      action.payload.isValid = true;
    }
    persistFormDataDebounce(formData);
  }
  if (action.type === 'SET_FORM_ERRORS') {
    const formData = getSignUpDataFromStore(store);
    action.payload.errors = validate(formData);
    action.payload.isValid = false;
    persistFormDataDebounce(formData);
  }
  return next(action);
};

export { signUpMiddleware };
