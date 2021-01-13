import React from "react";
import "./styles.css";
import { data } from "./books";

export default function App() {
  return (
    <article className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </article>
  );
}

// destrucuring can also be done in the parameter
const Book = ({ img, title, author }) => {
  // destructing the props
  // const { img, title, author } = props;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello world!");
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <section
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </section>
  );
};

// style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }
