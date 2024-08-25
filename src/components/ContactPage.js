import React from 'react';
import {
    Container,
    Typography,
    Button,
    TextField,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ContactPage = ({ contact, handleOpen, handleInputChange, deleteContact, updateContact, addContact, handleClose, open, editingContactId, contacts }) => {

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Contact List
            </Typography>
            <Button variant="contained" color="primary" onClick={() => handleOpen({ name: '', email: '', phone: '' })}>
                Add Contact
            </Button>
            <List>
                {contacts.map((contact) => (
                    <ListItem key={contact.id}>
                        <ListItemText
                            primary={contact.name}
                            secondary={`${contact.email} | ${contact.phone}`}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={() => handleOpen(contact)}>
                                <Edit />
                            </IconButton>
                            <IconButton edge="end" onClick={() => deleteContact(contact.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{editingContactId ? 'Edit Contact' : 'Add Contact'}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={contact.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={contact.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        label="Phone"
                        type="text"
                        fullWidth
                        value={contact.phone}
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={editingContactId ? updateContact : addContact} color="primary">
                        {editingContactId ? 'Update' : 'Add'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default ContactPage;