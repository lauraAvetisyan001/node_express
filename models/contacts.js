const fs = require('fs/promises');
const path = require('path')
const ObjectID = require('bson-objectid')

const contactsPath = path.join(__dirname, 'contacts.json')

const listContacts = async () => {
    const result = await fs.readFile(contactsPath)
    return JSON.parse(result)
}

const getContactById = async (id) => {
    const contacts = await listContacts()
    const result = await contacts.find(data => data.id === id) 
    if(!result) {
        return null;
    }
    return result;
}

const removeContact = async (id) => {
    const contacts = await listContacts()
    const result = await contacts.splice(id, 1)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))

    return result;
}

const addContact = async (name, email, phone) => {
    const contacts = await listContacts()
    const newContact = {
        name,
        email,
        phone,
        id: ObjectID()
    };
    contacts.push(newContact)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return newContact
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}