import {formValuesFromFields, removePersistData} from 'utils';
import {
  FORM_INPUT_CHANGE,
  SET_IS_FORM_SUBMITTED,
  SET_IS_FORM_VALID,
  REMOVE_INPUT_ERROR,
  SET_FORM_ERRORS,
  RESET_SIGNUP_FORM,
} from "redux/signUp/types";

const initState = {
  data: formValuesFromFields(),
  isSubmitted: false,
  isValid: false,
  errors: {}
};

const signUpReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case FORM_INPUT_CHANGE:
      return {
        ...state,
        data: {...state.data, [payload?.name]: payload?.value}
      };
    case SET_IS_FORM_SUBMITTED:
      return {
        ...state,
        isSubmitted: payload?.isSubmitted,
      };
    case SET_IS_FORM_VALID:
      return {
        ...state,
        isValid: payload?.isValid,
      };
    case SET_FORM_ERRORS:
      return {
        ...state,
        errors: payload?.errors,
        isValid: payload?.isValid,
      };
    case REMOVE_INPUT_ERROR:
      return {
        ...state,
        errors: payload?.errors,
        isValid: payload?.isValid,
      };
    case RESET_SIGNUP_FORM:
      removePersistData('formData');
      return {
        ...initState,
        data: formValuesFromFields(true),
      };
    default:
      return state;
  }
};
export { signUpReducer };
