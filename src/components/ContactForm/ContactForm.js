import { useState } from 'react';
import style from '../ContactForm/ContactForm.module.css'


export default function ContactForm({onAddContact, masContact}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default: return;
        }
    };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     onAddContact(name, number);
    //     setName('');
    //     setNumber('');
    // };

      const handleSubmit = (evt) => {
    evt.preventDefault();

    const accessName = masContact.find((el) => el.name === name);

    if (accessName) {
      alert(`${name} is already in contacts`);
    } else {
      const obg = {
        name: name,
        number: number,
      };
      onAddContact(obg);
    }

    reset();
  };

  function reset() {
    setName("");
    setNumber("");
  }


    return (
        <form className={style.formInner} onSubmit={handleSubmit} >
            <label>Name </label>
            <input
                className='input'
                type="text"
                value={name}
                name="name"
                onChange={ handleChange }
            />
            <br />
            <label>Number </label>
            <input
                className='input'
                type="tel"
                value={number}
                name="number"
                onChange={ handleChange }
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
            />
            <button className='button' type="submit">Add contact</button>
        </form>
    )
}