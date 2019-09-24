import React from "react";
import { Card } from "react-bootstrap";
// import Card from "react-bootstrap/Card";

const ContactItem = ({ contact }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Link>
          <img src={contact.pictureUrl} alt={contact.name} />
        </Card.Link>
        <Card.Title>{contact.popularity}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ContactItem;
