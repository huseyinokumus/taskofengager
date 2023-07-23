const ERRORS = {
  NOT_AUTHORIZED: "not_authorized",
  VALIDATION_ERROR: "validation_error",
};
const errorHandlers = {
  not_authorized: require("./not_authorized"),
  validation_error: require("./validation_error"),
};

module.exports = {
  ERRORS,
  sendError: (res, error, message) => {
    const errorHandler = errorHandlers[error];
    const status = errorHandler ? errorHandler.status : 500;
    message = message || errorHandler.message;
    res.status(status).json({ message });
  },
};
