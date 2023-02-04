const fs = require('fs/promises');
const contactsList = require('./listContacts');
const contactsPath = require('./filePath');

async function removeContact(contactId) {
    try {
        
        const contacts = await contactsList();
        const index = contacts.findIndex(contact => contact.id === contactId);

        const removeContact = contacts[index];
        if(index !== -1) {
            contacts.splice(index, 1);
            await fs.writeFile(contactsPath, JSON.stringify(contacts));
            console.table(contacts);
        }
        return removeContact ? removeContact : null;
    } catch (error) {
        console.log(error);
    }    
}

module.exports = removeContact;