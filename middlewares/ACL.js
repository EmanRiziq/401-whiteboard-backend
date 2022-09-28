"use strict";

const acl = (capability) => {
  return (req, res, next) => {
    try {
      if (req.user.capabilities.includes(capability)) {
        console.log("cap of the user " +req.user.capabilities)
        next();
      } else {
        next("Access Denied");
      }
    } catch (e) {
      next(e);
    }
  };
};

module.exports = acl;