import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import BookList from "./components/BookList";
import ReservationForm from "./components/ReservationForm";
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class App extends Component {
  state = {
    books: [
      {
        asin: "0399575510",
        title: "Odessa Sea (Dirk Pitt Adventure)",
        img: "https://images-na.ssl-images-amazon.com/images/I/81D2f6zFe9L.jpg",
        price: 17.39,
        category: "horror",
      },
      {
        asin: "0345468260",
        title: "Timeline: A Novel",
        img: "https://images-na.ssl-images-amazon.com/images/I/918vbcZK1vL.jpg",
        price: 13.97,
        category: "horror",
      },
      {
        asin: "1578562953",
        title: "Edge of Eternity",
        img: "https://images-na.ssl-images-amazon.com/images/I/91Ft%2BN5q0sL.jpg",
        price: 15.19,
        category: "horror",
      },
      {
        asin: "0515155691",
        title: "The Assassination Option (A Clandestine Operations Novel)",
        img: "https://images-na.ssl-images-amazon.com/images/I/715AQ8YsMaL.jpg",
        price: 8.99,
        category: "horror",
      },
      {
        asin: "1510701990",
        title: "The Trail Driver: A Western Story",
        img: "https://images-na.ssl-images-amazon.com/images/I/8129Yu2L8zL.jpg",
        price: 13.73,
        category: "horror",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <TopBar />
        <h1 className="text-center my-4">La Mia Collezione di Libri</h1>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={12}>
              <BookList books={this.state.books} />
              <ReservationForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
