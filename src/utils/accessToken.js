const tokens = "access-tocken";

const setAccessTokens = (value) => {
  localStorage.setItem(tokens, value);
};

const getAccessTokens = () => {
  return localStorage.getItem(tokens);
};

const removeAccessTokens = () => {
  localStorage.removeItem(tokens);
};

module.exports = {
  setAccessTokens,
  getAccessTokens,
  removeAccessTokens,
};
