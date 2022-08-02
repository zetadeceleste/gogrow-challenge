// const APP_DATA_KEY = window.btoa("APP_DATA");
const APP_DATA_KEY = "APP_DATA";

const setItem = (key, data) =>
  // sessionStorage.setItem(key, window.btoa(JSON.stringify(data)));
  sessionStorage.setItem(key, JSON.stringify(data));

const getItem = (key) => {
  const item = sessionStorage.getItem(key);
  if (item !== null) {
    // return JSON.parse(window.atob(item));
    return item;
  }
  return null;
};

export const deleteItem = (key) => {
  sessionStorage.removeItem(key);
};

export const isAppData = () => (getItem(APP_DATA_KEY) ? true : false);

export const setAppData = (data) => setItem(APP_DATA_KEY, data);
