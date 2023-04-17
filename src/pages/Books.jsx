import { useContext } from "react";
import Book from "../components/Book";
import Layout from "../components/Layout";
import books from "../data/books.json";
import useCntxt from "../context/UseBooksContext";

export function imgExist(book) {
  if (book.imageLinks[0] !== undefined) return book.imageLinks[0].thumbnail;
  else return "/src/assets/palceholder.png";
}

function Books() {
  const { state } = useContext(useCntxt);

  return (
    <Layout
      btnText={state.books.length > 0 ? "End" : "Skip"}
      title="For good exprience select books that you love"
      backBtn={true}
      path={"/suggestBook"}
    >
      {books.map((book, indx) => (
        <Book key={indx} book={book} src={imgExist(book)} />
      ))}
    </Layout>
  );
}

export default Books;
