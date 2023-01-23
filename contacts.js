const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, '.', 'db', 'contacts.json');

async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath, 'utf8');
        const contactsList = JSON.parse(data);
        console.table(contactsList);
    } catch (error) {
        console.log(error);
    }
}

async function getContactById(contactId) {
    try {
        const data = await fs.readFile(contactsPath, 'utf8');
        const contactsList = JSON.parse(data);
        const findContact = contactsList.find((contact) => contact.id === String(contactId));
        console.log(findContact);
    } catch (error) {
        console.log(error);
    }
}

async function removeContact(contactId) {
    try {
        const data = await fs.readFile(contactsPath, 'utf8');
        const contactsList = JSON.parse(data);
        const index = contactsList.findIndex(contact => contact.id === contactId);

        const removeContact = contactsList[index];
        if(index !== -1) {
            contactsList.splice(index, 1);
            await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 4));
            console.log(contactsList);
        }
        return removeContact ? removeContact : null;
    } catch (error) {
        console.log(error);
    }    
}

async function addContact(name, email, phone) {
    try {
        const newContactsList = {
                id: uuidv4(),
                name: name,
                email: email,
                phone: phone
        }
        const data = await fs.readFile(contactsPath, 'utf8');
        const contactsList = JSON.parse(data);
        contactsList.push(newContactsList);    
        await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 4));
        console.log(contactsList);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addContact,
    removeContact,
    getContactById,
    listContacts
}