import { useSelector, useDispatch } from "react-redux";
import {SET_IS_FORM_SUBMITTED, RESET_SIGNUP_FORM} from "redux/signUp/types";
import { makeSignUpDataSelector, getIsFormValid, getFormSubmitted, signUpErrorSelector } from "redux/signUp/selectors";
import { useMemo } from "react";
// import { validate } from "utils";

const useSignUp = (callback) => {
  const dispatch = useDispatch();
  const signUpData = useMemo(makeSignUpDataSelector, []);
  const formValues = useSelector((state, props) => signUpData(state, props));
  const isValid = useSelector(state => getIsFormValid(state));
  const isSubmitted = useSelector(state => getFormSubmitted(state));
  const formErrors = useSelector(state => signUpErrorSelector(state));
  
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    if (typeof callback === 'function') {
      callback();
    }
    dispatch({type: SET_IS_FORM_SUBMITTED, payload: {isSubmitted: true}});
    alert(`Submitted Data! ${JSON.stringify(formValues)}`);
    dispatch({type: RESET_SIGNUP_FORM});
  };
  return {
    handleSubmit,
    formValues,
    isValid,
    isSubmitted,
    formErrors,
  };
};

export default useSignUp;