
const { Command } = require("commander");

const contactsOperations = require('./contactsOperations');

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const data = await contactsOperations.listContacts();
            console.table(data);
      break;

    case "get":
      const findContact = await contactsOperations.getContactById(id);
      console.table(findContact);
      break;

    case "add":
      const newContact = await contactsOperations.addContact(name, email, phone);
      console.table(newContact);
      break;

    case "remove":
      await contactsOperations.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);