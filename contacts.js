const fs = require('fs');
const path = require('path');

// // TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(path.resolve('./db/contacts.json'), 'utf8', (error, data) => {
    if (error) {
        console.error(error);
    }
    console.log(data);
})
}

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

module.exports = {
    // addContact,
    // removeContact,
    // getContactById,
    listContacts
}