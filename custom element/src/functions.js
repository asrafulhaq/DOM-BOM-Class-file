/**
 * Create Alert
 */
const createAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}
    <button class="btn-close" data-bs-dismiss="alert"></button>
  </p>`;
};

/**
 * Mobile number checking
 */
const isMobile = (mobile) => {
  const pattern = /^(01|\+8801|8801)[0-9]{9}$/;
  return pattern.test(mobile);
};

/**
 * Mobile number checking
 */
const isEmail = (email) => {
  const pattern = /^[a-z0-9\._]*@[a-z0-9]{1,}\.[a-z0-9]{1,9}$/;
  return pattern.test(email);
};
