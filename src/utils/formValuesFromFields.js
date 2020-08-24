import {getFormFields, getPersistData} from "utils";

const formFieldsArray = getFormFields();
const formValuesFromFields = (clean) => {
  const storedData = getPersistData('formData');
  let values = {};
  if (storedData && !clean) {
    values = JSON.parse(storedData);
    return values;
  }
  formFieldsArray.map(f => values[f.field] = f.type === 'checkbox' ? false : '');
  return values;
};

export default formValuesFromFields;
