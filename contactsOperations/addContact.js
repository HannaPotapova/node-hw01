const fs = require('fs/promises');
const { v4 } = require('uuid');

const contactsList = require('./listContacts');
const contactsPath = require('./filePath');

async function addContact(name, email, phone) {
    try {
        const newContactsList = {
                id: v4(),
                name: name,
                email: email,
                phone: phone
        }
        const contacts = await contactsList();
        contacts.push(newContactsList);    
        await fs.writeFile(contactsPath, JSON.stringify(contacts));
        return contacts;
    } catch (error) {
        console.log(error);
    }
};

module.exports = addContact;