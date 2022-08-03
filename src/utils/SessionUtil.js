const APP_DATA_KEY = "APP_DATA";

const getItem = (key) => {
  const item = sessionStorage.getItem(key);
  if (item !== null) {
    return item;
  }
  return null;
};

const setItem = (key, data) =>
  sessionStorage.setItem(key, JSON.stringify(data));

export const deleteItem = (key) => sessionStorage.removeItem(key);

export const isAppData = () => (getItem(APP_DATA_KEY) ? true : false);

export const setAppData = (data) => setItem(APP_DATA_KEY, data);
