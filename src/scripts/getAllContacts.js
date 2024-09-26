import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  let allContacts;
  try {
    const data = await readContacts();
    allContacts = data;
    return allContacts;
  } catch (error) {
    return error;
  }
};

console.log(await getAllContacts());
