import getFormFields from "./getFormFields";
import formValuesFromFields from "./formValuesFromFields";
import { persistData, getPersistData, removePersistData } from './dataStorage';
import { validate, validateField } from "./validate";

const getSignUpDataFromStore = (store) => {
  const { getState } = store;
  return getState()?.signUp.data;
};

let dataTimeout = null;
const persistFormDataDebounce = (dataToPersist) => {
  if (dataTimeout) {
    clearTimeout(dataTimeout);
  }
  dataTimeout = setTimeout(() => {
    persistData('formData', JSON.stringify(dataToPersist));
  }, 1000);
};

export {
  getFormFields,
  formValuesFromFields,
  persistData,
  getPersistData,
  validate,
  validateField,
  getSignUpDataFromStore,
  persistFormDataDebounce,
  removePersistData,
}