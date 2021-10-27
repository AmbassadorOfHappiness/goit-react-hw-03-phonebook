import './App.css';
import { v4 as uuid } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';

import ContactForm from './components/ContactForm/ContactForm'
import Filter from './components/Filter/Filter'
import ContactList from './components/ContactList/ContactList'

// import { useState } from 'react';
// const defContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

function App() {
    const [contacts, setContacts] = useLocalStorage('contacts', []);
    const [filter, setFilter] = useLocalStorage('filter', "");
///////////////////////
const getVisibleContacts = filterName();

    const addContact = (data) => {
    const { name, number } = data;

    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };

    setContacts((prevState) => {
      const elem = [contact, ...prevState];
      return elem;
    });
    };
    
    function filterName() {
      const normalizerForm = filter.toLowerCase();
        return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizerForm)
    );
  }

    // const addContact = ({ name, number }) => {
    //     setContacts(prevState => [...prevState, { id: uuid(), name, number }]);
    // };

    const deleteContact = contactId => {
        setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
    };
    
    // const getVisibleContacts = () => {
    //     const normalizerForm = filter.toLowerCase();
    //         return contacts.filter((el) =>
    //         el.name.toLowerCase().includes(normalizerForm)
    //     );
    // };

    const handleInputChange = e => {
        setFilter(e.currentTarget.value);
    }; 

    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onAddContact={addContact} masContact={contacts}/>
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={handleInputChange} />
        <ContactList
            onChange={handleInputChange}     
            contacts={getVisibleContacts}
            onRemoveContact={deleteContact}
        />
      </div>
    )
}

export default App;