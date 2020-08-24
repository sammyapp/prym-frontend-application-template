import { createSelector } from "reselect";

const getSignUp = (state) => state.signUp;
const getSignUpData = (state, props) => state.signUp.data;
const getFormSubmitted = (state) => state.signUp.isSubmitted;
const getIsFormValid = (state) => state.signUp.isValid;
const getSignUpErrors = (state) => state.signUp.errors;

const signUpSelector = createSelector([getSignUp], (signUp) => signUp);
const signUpDataSelector = createSelector([getSignUpData], (formData) => formData);
const signUpErrorSelector = createSelector([getSignUpErrors], (errors) => errors);
const makeSignUpDataSelector = () => signUpDataSelector;


export {
  signUpSelector,
  signUpDataSelector,
  signUpErrorSelector,
  makeSignUpDataSelector,
  getFormSubmitted,
  getIsFormValid,
  getSignUpData,
};
