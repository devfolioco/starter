export const clearStorage = () => localStorage.clear();

export const getItemFromStorage = key => {
  try {
    const item = JSON.parse(localStorage.getItem(key));
    if (item === null) {
      return undefined;
    }
    return item;
  } catch (err) {
    console.error(`Error getting item ${key} from localStorage`, err);
  }
};

export const storeItem = (key, item) => {
  try {
    return localStorage.setItem(key, JSON.stringify(item));
  } catch (err) {
    console.error(`Error storing item ${key} to localStorage`, err);
  }
};

export const removeItemFromStorage = key => {
  try {
    return localStorage.removeItem(key);
  } catch (err) {
    console.error(`Error removing item ${key} from localStorage`, err);
  }
};
