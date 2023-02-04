const contactsList = require('./listContacts');

async function getContactById(contactId) {
    try {
        const contacts = await contactsList();
        const result = contacts.find((item) => item.id === String(contactId));
        if(!result){
            return null;
        }
        console.table(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getContactById;