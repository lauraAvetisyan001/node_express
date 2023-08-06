const contacts = require('../../models/contacts')

const removeContact = async(req, res) => {
    const {id} = req.params;
    const result = await contacts.removeContact(id);
    res.json(result)
}

module.exports = removeContact;