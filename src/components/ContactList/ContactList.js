import PropTypes from "prop-types";

const ContactList = ({ contacts, onRemoveContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
            <li key={id}>
    <p >
      {' '}
      {name}: {number}
    </p>
                <button
                    type="button"
                    className='button'
                    onClick={() => onRemoveContact(id)}
                >
                    Delete
                </button>
            </li>
            ))}
        </ul>       
    )
};

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;