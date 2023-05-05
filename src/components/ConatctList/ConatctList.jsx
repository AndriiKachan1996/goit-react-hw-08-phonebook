import * as React from 'react';
import List from '@mui/material/List';

import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredAndSortedContacts } from 'redux/contacts/selectors';
import { ContactItem } from 'components/ConatctItem/ConatctItem';

// import ContactsItem from 'components/ContactsItem/ContactsItem';

function ContactsList() {
  const filtered = useSelector(selectFilteredAndSortedContacts);

  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 720,
        }}
      >
        {filtered.map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      </List>
    </>
  );
}

export default memo(ContactsList);
