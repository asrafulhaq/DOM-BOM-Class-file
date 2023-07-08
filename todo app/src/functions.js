/**
 * Get all data
 */
const getData = (key) => {
  let lsdata = [];
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return lsdata;
  }
};

/**
 * Set Data to LS
 */
const insertData = (key, data) => {
  // check data exists or not
  let lsdata = [];
  if (localStorage.getItem(key)) {
    lsdata = JSON.parse(localStorage.getItem(key));
  }

  // data push
  lsdata.push(data);

  // insert new data
  localStorage.setItem(key, JSON.stringify(lsdata));
};

/**
 * Update Data to LS
 */
const updateData = (key, data) => {
  // insert new data
  localStorage.setItem(key, JSON.stringify(data));
};
