
export const persistData = (dataKey, dataValue) => {
  localStorage.setItem(dataKey, dataValue);
};

export const getPersistData = dataKey => localStorage.getItem(dataKey);

export const removePersistData = dataKey => localStorage.removeItem(dataKey);