const {Contact} = require('../../models/contacts');
const requestError = require('../../helpers/requestError');

const updateFavoriteById = async(req, res) => {
    const {id} = req.params; 
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});

    if(!result) {
        throw requestError(404, 'missing field favorite');
    }
    res.status(200).json(result);
}
module.exports = updateFavoriteById;