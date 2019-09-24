import React, { Component } from "react";

import ContactItem from "./ContactItem";

export default class ComptactList extends Component {
  render() {
    const contacts = this.props.contacts;
    return (
      <div>
        {contacts.map(contact => (
          <ContactItem contact={contact} />
        ))}
      </div>
    );
  }
}
