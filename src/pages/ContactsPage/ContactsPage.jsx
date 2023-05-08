import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

import { selectToken } from 'redux/auth/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return (
    <>
      <ContactForm />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
