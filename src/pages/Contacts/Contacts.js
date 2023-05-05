import { useEffect } from 'react';
import ConatctList from 'components/ConatctList/ConatctList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export const ContactsPage = () => {
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
      <ConatctList />
    </>
  );
};
