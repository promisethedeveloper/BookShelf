import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article className="booklist">
      <Book />
    </article>
  );
}

const author = "Mario Puzo";
const Book = () => {
  const title = "The GodFather";
  return (
    <section className="book">
      <img
        src="https://m.media-amazon.com/images/I/81QJnMbMQAL._AC_UY436_FMwebp_QL65_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </section>
  );
};

// style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }
