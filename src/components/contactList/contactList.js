import React from "react";
import PropTypes from "prop-types";
import "./contactList.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="contact__list">
    {contacts.map(({ name, number, id }) => (
      <li key={id} className="contact__item">
        <p className="text">
          {name}: {number}
        </p>
        <button
          className="contacts__btn"
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
