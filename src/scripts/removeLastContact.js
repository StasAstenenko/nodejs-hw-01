import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  let allContacts;
  try {
    const data = await readContacts();
    allContacts = data;
    if (!allContacts) return 'List of contacts is empty';
    allContacts.pop();
    return await writeContacts(allContacts);
  } catch (error) {
    return error;
  }
};

removeLastContact();
