const base = require("./base");
module.exports = {
  NotAuthenticated: class NotAuthenticated extends base {
    constructor(message) {
      super(message, 401);
    }
  },
};
