const {requestError} = require('../helpers/requestError');

const ValidateBody = schema => {
    const func = (req, res, next) => {
        const {error} = schema.validate(req.body);
        if(error) {
            next(requestError(404, error.message))
        }
        next()
    }
    return func;
}
module.exports = ValidateBody;