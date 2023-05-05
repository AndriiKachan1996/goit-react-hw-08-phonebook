import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <li>{contact.name}</li>
      <li>{contact.number}</li>
      <button onClick={() => handleDeleteItem(contact.id)}>DELETE</button>
    </>
  );
};
