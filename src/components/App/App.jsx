import { Layout } from 'components/Layout/Layout';
import { ContactsPage } from 'pages/Contacts/Contacts';
import HomePage from 'pages/HomePage/HomePage';
// import { HomePage } from 'pages/HomePage/HomePage';
import { LoginPage } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
