import './App.css';
import React from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import {Container} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';



function App() {
  const contacts = [
    {
      id: uuidv4(),
      "name":"Faruk",
      "email":"farukgokcegoz34@gmail.com"
    },
    {
      id: uuidv4(),
      "name":"Mehmet",
      "email":"mehmetgokcegoz34@gmail.com"
    }
  ]
  return (
      <Container>
        <Header/>
        <AddContact />
        <ContactList contacts={contacts} />
      </Container>
  );
}

export default App;
