const {Contact} = require('../../models/contacts')
const { requestError } = require('../../helpers');


const removeContact = async(req, res) => {
    const {id} = req.params;
    const result = await Contact.findByIdAndRemove(id);

    if(!result) {
        throw requestError(404);
    }
    res.status(204).json(result)
}

module.exports = removeContact;