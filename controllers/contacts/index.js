const getAll = require('./getAll');
const getContactById = require('./getContactById');
const removeContact = require ('./removeContact');
const addContact = require('./addContact');
const updateById = require('./updateById');
const updateFavoriteById = require('./updateFavoriteById')


module.exports = {
    getAll,
    getContactById,
    removeContact,
    addContact,
    updateById,
    updateFavoriteById
}