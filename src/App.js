import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </article>
  );
}

const Book = () => {
  return (
    <section className="book">
      <Image />
      <Title />
      <Author />
    </section>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/81QJnMbMQAL._AC_UY436_FMwebp_QL65_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h1>The GodFather</h1>;
};
const Author = () => {
  return <h4>Mario puzo</h4>;
};
