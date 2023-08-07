const {Contact} = require('../../models/contacts');
const requestError = require('../../helpers/requestError');


const updateById = async(req, res) => {
    const {id} = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});

    if(!result) {
        throw requestError(404);
    }
    res.status(201).json(result);
}

module.exports = updateById;