const messages = {
    400: "Bad Request",
    401: "Unauthorized",
    402: "Forbbiden",
    403: "Not Found",
    409: "Conflict",
}

const requestError = (status, message = messages[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
}

module.exports = requestError;