const base = require("./base");
module.exports = {
  ValidationError: class ValidationError extends base {
    constructor(message) {
      super(message, 400);
    }
  },
};
