import React from 'react';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts available</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <strong>{contact.name}</strong> -
               {/* {contact.email} -  */}
              {contact.mobileNo}
              <button>Edit</button>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
