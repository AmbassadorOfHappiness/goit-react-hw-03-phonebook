import './App.css';
import { Component } from 'react';
import { v4 as uuid } from 'uuid';

import ContactForm from './components/ContactForm/ContactForm'
import Filter from './components/Filter/Filter'
import ContactList from './components/ContactList/ContactList'

class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

    componentDidMount() {
    const localcontacts = JSON.parse(localStorage.getItem("contacts"));

    if (localcontacts) {
      this.setState({ contacts: localcontacts });
    } 
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevProps.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }
  
  handleInputChange = e => {
    // console.log(e.currentTarget.value);
    this.setState({ filter: e.currentTarget.value });
  }

  addContact = (task) => {
    const searchSameName = this.state.contacts
      .map((cont) => cont.name)
      .includes(task.name);

    if (searchSameName) {
      alert(`${task.name} is already in contacts`);
    } else if (task.name.length === 0) {
      alert("Fields must be filled!");
    } else {
      const contact = {
        ...task,
        id: uuid(),
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2 className="title">Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleInputChange} />
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={this.deleteContact}
        />
      </div>
    )
  }
}

export default App;
