import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactPage from './components/ContactPage';

const formatPhoneNumber = (phone) => {
  const parts = phone.split(' x');
  return parts[0];
};

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });
  const [editingContactId, setEditingContactId] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setContacts(response.data.map(user => ({
        ...user,
        phone: formatPhoneNumber(user.phone),
      })));
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleOpen = (contact) => {
    setContact(contact);
    setEditingContactId(contact.id);
    setOpen(true);
  };

  const handleClose = () => {
    setContact({ name: '', email: '', phone: '' });
    setEditingContactId(null);
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const addContact = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', contact);
      setContacts([...contacts, { ...response.data, phone: formatPhoneNumber(response.data.phone) }]);
      handleClose();
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const updateContact = async () => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${editingContactId}`, contact);
      setContacts(contacts.map((c) => (c.id === editingContactId ? { ...contact, phone: formatPhoneNumber(contact.phone) } : c)));
      handleClose();
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setContacts(contacts.filter((c) => c.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <ContactPage
      deleteContact={deleteContact}
      handleInputChange={handleInputChange}
      handleOpen={handleOpen}
      updateContact={updateContact}
      addContact={addContact}
      handleClose={handleClose}
      open={open}
      editingContactId={editingContactId}
      contacts={contacts}
      contact={contact} />

  );
};

export default App;
