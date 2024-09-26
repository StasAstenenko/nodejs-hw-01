import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const newData = fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, undefined, 2),
    );
    return newData;
  } catch (error) {
    return error;
  }
};
