// eslint-disable-next-line no-unused-vars
import React from "react";
import SingleBook from "./SingleBook";

function BookList({ books }) {
  return (
    <div className="d-flex flex-wrap">
      {books.map((book) => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </div>
  );
}

export default BookList;
