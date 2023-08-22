class Storage {
  // send data to Local Storage
  static sendDataLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // get all data form Local Storage
  static getDataLS(key) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    return [];
  }

  // remove collections
  static removeDataLS(key) {
    localStorage.removeItem(key);
  }
}
