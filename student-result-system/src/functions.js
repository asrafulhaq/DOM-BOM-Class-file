/**
 * Send Data to LS
 */
const sendDataLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

/**
 * Get Data from LS
 */
const getDataLS = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return [];
};

/**
 * Create Alert
 */
const createAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}
      <button class="btn-close" data-bs-dismiss="alert"></button>
    </p>`;
};

/**
 * Number Check
 */
const isNumber = (num) => {
  const pattern = /^[0-9]{6,}$/;
  return pattern.test(num);
};

/**
 * Time Ago
 */
const timeAgo = (timestamp) => {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  const timeElapsed = Date.now() - timestamp;

  if (timeElapsed < MINUTE) {
    return `${Math.floor(timeElapsed / SECOND)} seconds ago`;
  } else if (timeElapsed < HOUR) {
    return `${Math.floor(timeElapsed / MINUTE)} minutes ago`;
  } else if (timeElapsed < DAY) {
    return `${Math.floor(timeElapsed / HOUR)} hours ago`;
  } else if (timeElapsed < WEEK) {
    return `${Math.floor(timeElapsed / DAY)} days ago`;
  } else if (timeElapsed < MONTH) {
    return `${Math.floor(timeElapsed / WEEK)} weeks ago`;
  } else if (timeElapsed < YEAR) {
    return `${Math.floor(timeElapsed / MONTH)} months ago`;
  } else {
    return `${Math.floor(timeElapsed / YEAR)} years ago`;
  }
};

/**
 * Create a random di
 */
const getRandomUniqueID = (length = 10) => {
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
};

const getGpaGrade = (marks) => {
  let gpa;
  let grade;

  if (marks >= 0 && marks < 33) {
    gpa = 0;
    grade = "F";
  } else if (marks >= 33 && marks < 40) {
    gpa = 1;
    grade = "D";
  } else if (marks >= 40 && marks < 50) {
    gpa = 2;
    grade = "C";
  } else if (marks >= 50 && marks < 60) {
    gpa = 3;
    grade = "B";
  } else if (marks >= 60 && marks < 70) {
    gpa = 3.5;
    grade = "A-";
  } else if (marks >= 70 && marks < 80) {
    gpa = 4;
    grade = "A";
  } else if (marks >= 80 && marks <= 100) {
    gpa = 5;
    grade = "A+";
  }
  return {
    gpa: gpa,
    grade: grade,
  };
};

const getFinalResult = (marks) => {
  let cgpa;
  let result;

  let totalGpa =
    getGpaGrade(marks.bangla).gpa +
    getGpaGrade(marks.english).gpa +
    getGpaGrade(marks.math).gpa +
    getGpaGrade(marks.science).gpa +
    getGpaGrade(marks.social_science).gpa +
    getGpaGrade(marks.religion).gpa;

  cgpa = totalGpa / 6;

  if (
    marks.bangla >= 33 &&
    marks.english >= 33 &&
    marks.math >= 33 &&
    marks.science >= 33 &&
    marks.social_science >= 33 &&
    marks.religion >= 33
  ) {
    if (cgpa >= 1 && cgpa < 2) {
      result = "D";
    } else if (cgpa >= 2 && cgpa < 3) {
      result = "C";
    } else if (cgpa >= 3 && cgpa < 3.5) {
      result = "B";
    } else if (cgpa >= 3.5 && cgpa < 4) {
      result = "A-";
    } else if (cgpa >= 4 && cgpa < 5) {
      result = "A";
    } else if (cgpa >= 5) {
      result = "A+";
    }

    return {
      result: result,
      cgpa: cgpa,
    };
  } else {
    return {
      result: "F",
      cgpa: cgpa,
    };
  }
};
