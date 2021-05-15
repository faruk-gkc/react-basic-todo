import './App.css';
import React from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
      <>
        <Header />
        <AddContact />
        <ContactList />
      </>
  );
}

export default App;
