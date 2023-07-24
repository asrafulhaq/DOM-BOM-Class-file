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
