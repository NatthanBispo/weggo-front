const CURRENT_USER_KEY = 'CA_CURRENT_USER';

export default {

  getCredentials() {
    const item = JSON.parse(window.localStorage.getItem(CURRENT_USER_KEY));
    if (item) {
      return item;
    }
    return null;
  },

  getValueByKey(key) {
    const item = JSON.parse(window.localStorage.getItem(CURRENT_USER_KEY));
    if (item) {
      return item[key];
    }
    return null;
  },

  changeCredentials(data) {
    if (!data) { return; }
    window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(data));
  },

  saveCredentials(data) {
    if (!data) { return; }
    window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(data));
  },

  destroyCredentials() {
    window.localStorage.removeItem(CURRENT_USER_KEY);
  },
};
