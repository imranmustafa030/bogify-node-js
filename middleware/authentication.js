const { validateToken } = require("../services/authentication");

const checkForAuthenticationCookies = (cookieName) => {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      return next();
    }

    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload;
    } catch (error) {}
    return next();
  };
};

module.exports = { checkForAuthenticationCookies };