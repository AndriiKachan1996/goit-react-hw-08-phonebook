import * as React from 'react';
import List from '@mui/material/List';

import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredAndSortedContacts } from 'redux/contacts/selectors';

import ContactsItem from 'components/ContactsItem/ContactsItem';

const ContactsList = () => {
  const filtered = useSelector(selectFilteredAndSortedContacts);

  return (
    <>
      <List
        sx={{
          width: '100%',
          // maxWidth: 720,
        }}
      >
        {filtered.map(contact => {
          return <ContactsItem key={contact.id} contact={contact} />;
        })}
      </List>
    </>
  );
};

export default memo(ContactsList);

// import { memo } from 'react';
// import { useSelector } from 'react-redux';
// import StyledList from './ContactsList.styled';
// import {
//   // selectError,
//   // selectIsLoading,
//   selectFilteredAndSortedContacts,
// } from 'redux/contacts/selectors';
// // import { fetchContacts } from 'redux/contacts/operations';
// import ContactsItem from 'components/ContactsItem/ContactsItem';

// function ContactsList() {
//   const filtered = useSelector(selectFilteredAndSortedContacts);
//   // const isLoading = useSelector(selectIsLoading);
//   // const error = useSelector(selectError);
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(fetchContacts());
//   // }, [dispatch]);

//   return (
//     <>
//       {/* {isLoading && !error && <h3>Request in progress...</h3>}
//       {error && <p>{error}</p>} */}
//       <StyledList>
//         {filtered.map(contact => {
//           return <ContactsItem key={contact.id} contact={contact} />;
//         })}
//       </StyledList>
//     </>
//   );
// }

// export default memo(ContactsList);
