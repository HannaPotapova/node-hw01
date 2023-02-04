const fs = require('fs/promises');
const filePath = require('./filePath');

const listContacts = async()=> {
    try {
        const data = await fs.readFile(filePath);
        const contactsList = JSON.parse(data);
        return contactsList;
    } catch (error) {
        console.log(error);
    }
}

module.exports = listContacts;