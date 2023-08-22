class Utility {
  static isNumber() {
    const pattern = /^[0-9]{6,}$/;
    return pattern.test(num);
  }

  static randomID(length = 30) {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const cryptoObj = window.crypto || window.msCrypto; // For browser compatibility

    if (!cryptoObj || !cryptoObj.getRandomValues) {
      throw new Error(
        "Your browser does not support secure random number generation."
      );
    }

    const randomArray = new Uint32Array(length);
    cryptoObj.getRandomValues(randomArray);

    let result = "";
    for (let i = 0; i < length; i++) {
      result += charset[randomArray[i] % charset.length];
    }

    return result;
  }
}
