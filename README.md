# Contact List React App

## Overview

This is a contact list web application built using React, Material-UI, and Axios. The app allows users to manage contacts by fetching, adding, updating, and deleting contact information. The contact data includes name, email, and phone number, with phone numbers formatted to exclude any extension information.

## Features

- **Fetch Contacts**: Retrieve a list of contacts from an API.
- **Add Contact**: Add a new contact to the list.
- **Update Contact**: Edit existing contact details.
- **Delete Contact**: Remove a contact from the list.
- **Phone Number Formatting**: Display phone numbers with the extension part removed.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Material-UI**: Library for React components with Material Design.
- **Axios**: Promise-based HTTP client for making API requests.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/contact-list-react-app.git
    cd contact-list-react-app
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Development Server**:
    ```bash
    npm start
    ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## API Endpoints

- **Fetch Contacts**: `GET https://jsonplaceholder.typicode.com/users`
- **Add Contact**: `POST https://jsonplaceholder.typicode.com/users`
- **Update Contact**: `PUT https://jsonplaceholder.typicode.com/users/:id`
- **Delete Contact**: `DELETE https://jsonplaceholder.typicode.com/users/:id`

*Note: The API calls are simulated and will not affect a real database.*

## Usage

- **Add a Contact**: Click the "Add Contact" button to open the dialog, enter the contact details, and save.
- **Edit a Contact**: Click the edit icon next to a contact to modify its details.
- **Delete a Contact**: Click the delete icon next to a contact to remove it from the list.

## Contributing

Feel free to open issues and submit pull requests if you want to contribute to the project. Please make sure to follow the coding standards and test your changes.
