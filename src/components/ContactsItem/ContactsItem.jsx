import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/contacts/operations';
import DeleteButton from 'components/DeleteBtn/DeleteBtn';

function ContactsItem({ contact }) {
  const [delId, setDelId] = useState();
  const dispatch = useDispatch();

  const handleDelete = id => {
    setDelId(id);
    dispatch(deleteContact(id));
    return toast.success(`Contact deleted successfully`);
  };

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt={contact.name}
            src={
              contact.name
                ? `https://ui-avatars.com/api/?name=${contact.name[0]}&length=1&background=random&size=262`
                : 'https://ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png'
            }
          ></Avatar>
        </ListItemAvatar>
        <ListItemText primary={contact.name} secondary={contact.number} />
        <DeleteButton
          onClick={() => handleDelete(contact.id)}
          disabled={delId === contact.id}
        ></DeleteButton>
      </ListItem>
      <Divider variant="inset" />
    </>
  );
}
ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactsItem;
