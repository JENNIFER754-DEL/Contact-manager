import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list-container">
      {contacts.length ? (
        <ul className="contact-list">
          {contacts.map((contact) => (
            <li key={contact.id} className="contact-card">
              <h3 className="contact-name">{contact.name}</h3>
              <p className="contact-info">{contact.email}</p>
              <p className="contact-info">{contact.mobileNo}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default ContactList;
