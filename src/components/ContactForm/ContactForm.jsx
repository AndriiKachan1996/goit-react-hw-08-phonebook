import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import {
  isLoadingCreateButton,
  selectContacts,
} from 'redux/contacts/selectors';

import css from './ContactForm.module.css';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { toast } from 'react-toastify';
import { CreateLoaderSpiner } from 'components/LoaderSpiner/LoaderSpiner';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const { items } = useSelector(selectContacts);
  const isLoading = useSelector(isLoadingCreateButton);

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      name,
      number,
    };
    const normalizedName = newContact.name.toLowerCase();
    const contactsIncludes = items.find(
      contact =>
        contact.name.toLowerCase() === normalizedName ||
        contact.number === newContact.number
    );
    if (contactsIncludes) {
      return toast.error(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.title}>
        Hello 🙋‍♂️, this is a custom notebook,
        <br />
        <span>here you can save any contacts</span>
      </div>
      <input
        onChange={handleChange}
        type="text"
        value={name}
        placeholder="Name"
        name="name"
        className={css.input}
      />
      <input
        onChange={handleChange}
        type="tel"
        value={number}
        placeholder="Phone number"
        name="number"
        className={css.input}
      />

      <button className={css.buttonConfirm} type="submit">
        {isLoading ? <CreateLoaderSpiner /> : <p>create contact</p>}
      </button>
      <ContactFilter />
    </form>
  );
};
