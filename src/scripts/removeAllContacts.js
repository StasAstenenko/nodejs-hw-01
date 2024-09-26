import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  let removeContacts = [];
  try {
    return await writeContacts(removeContacts);
  } catch (error) {
    return error;
  }
};

removeAllContacts();
