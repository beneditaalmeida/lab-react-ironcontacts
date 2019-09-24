import React, { Component } from "react";
import "./App.css";

//This is a JSON file with an array with all the contacts
import contacts from "./contacts";

//This is a component
import ContactList from "./components/ContactList";

import Container from "react-bootstrap/Container";

class App extends Component {
  constructor() {
    super();
    this.state = {
      //This state is saving into a contactList variable, an ARRAY with 5 contacts from the JSON file
      contactList: contacts.slice(0, 5)
    };
  }

  addContact() {
    let addContact = Math.floor(Math.random());
    this.setState();
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addContact}>Random Contact</button>
        <ContactList contacts={this.state.contactList} />
      </div>
    );
  }
}

export default App;
