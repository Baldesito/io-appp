// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function SingleBook({ book }) {
  return (
    <Card className="m-2" style={{ width: "15rem" }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title className="title">{book.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
