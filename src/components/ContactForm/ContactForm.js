import { Component } from 'react';
import style from '../ContactForm/ContactForm.module.css'

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
        [name]: value,
        });
    };

      findByName = contactName => {
    return this.props.contacts.some(({ name }) => name === contactName);
  };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddContact({ ...this.state });
        this.setState({ name: "", number: "" });
    };
   
    render() {
        return (
            <form className={style.formInner} onSubmit={this.handleSubmit}>
                <label>Name </label>
                <input
                    className='input'
                    type="text"
                    value={this.state.name}
                    name="name"
                    onChange={ this.handleChange }
                />
                <br />
                <label>Number </label>
                <input
                    className='input'
                    type="tel"
                    value={this.state.number}
                    name="number"
                    onChange={ this.handleChange }
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
                <button className='button' type="submit">Add contact</button>
            </form>
        )
    }
}

export default ContactForm;