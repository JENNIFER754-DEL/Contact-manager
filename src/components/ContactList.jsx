import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.mobileNo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
