import React from 'react';
// import style from '../ContactList/ContactList.module.css';
// import {button} from '../ContactForm/ContactForm.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name + " : " + contact.number}
        {
            <button
                className='button'  
                type="button"
                name="delete"
                onClick={() => onRemoveContact(contact.id)}
            >
                Delete
            </button>
        }
      </li>
    ))}
  </ul>
);

export default ContactList;