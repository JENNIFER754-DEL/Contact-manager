import React from 'react';
import ContactList from './components/ContactList';

function Contacts({contacts}) {
  return (
    <div>
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default Contacts;
