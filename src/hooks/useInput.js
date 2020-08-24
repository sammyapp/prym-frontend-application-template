import { useMemo } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {FORM_INPUT_CHANGE, REMOVE_INPUT_ERROR, SET_FORM_ERRORS} from "redux/signUp/types";
import { makeSignUpDataSelector} from "redux/signUp/selectors";
import { validateField } from 'utils';

const useInput = ({field}) => {
  const dispatch = useDispatch();
  const signUpField = useMemo(makeSignUpDataSelector, []);
  const formValues = useSelector(state => signUpField(state, {field}));
  return {
    value: formValues[field],
    handleInputChange: event => {
      const target = event.target;
      const name = target.name;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      dispatch({type: FORM_INPUT_CHANGE, payload: {name, value}});
      const hasError = validateField(name, value, formValues);
      if (hasError) {
        dispatch({type: SET_FORM_ERRORS, payload: {[name]: hasError}});
      } else {
        dispatch({type: REMOVE_INPUT_ERROR, payload: {name}});
      }
    }
  };
};

export default useInput