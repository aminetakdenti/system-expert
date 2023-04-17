import { useState, useContext, useEffect } from "react";
import useCntxt from "../context/UseBooksContext";
import FaveBooks from "../components/FaveBooks";
import bks from "../data/books.json";

function sortByRating(books) {
  const bks = [];
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    book.averageRating === undefined ? (book.averageRating = 0) : "";
    bks.push(book);
  }
  bks.sort((a, b) => b.averageRating - a.averageRating);
  console.log(bks);
  return bks;
}

function suggestBooks(categoreis, books) {
  const favBooks = [];
  books.forEach((bk) => {
    for (let i = 0; i < categoreis.length; i++) {
      if (bk.categories.includes(categoreis[i])) favBooks.push(bk);
    }
  });
  return sortByRating(favBooks);
}

function addCate(books, categories) {
  const addCat = [];
  const catLen = {};
  for (let i = 0; i < books.length; i++) {
    if (catLen[books[i].categories] === undefined) {
      catLen[books[i].categories] = 1;
    } else catLen[books[i].categories]++;
  }
  for (const cat in catLen) {
    let test = false;
    if (catLen[cat] >= 3) {
      for (let i = 0; i < categories.length; i++) {
        if (categories[i] === cat) {
          test = true;
          break;
        }
      }
      if (!test) {
        addCat.push(cat);
      }
    }
  }
  console.log(catLen);
  console.log(addCat);
  return addCat;
}

function Suggest() {
  const { state } = useContext(useCntxt);
  const [books, setBooks] = useState([]);

  function handleClick() {
    const categories = [
      ...state.categories,
      ...addCate(state.books, state.categories),
    ];
    setBooks(suggestBooks(categories, bks));
  }

  return (
    <div
      onLoad={() => console.log("loead")}
      className="flex flex-col items-center justify-center py-3"
    >
      <div className="mb-8 flex flex-row items-center justify-center space-x-5 lg:h-64 lg:translate-y-24 ">
        <h1 className="text-lg font-bold">Click the button for suggetiton</h1>
        <button
          onClick={handleClick}
          type="button"
          className={`rounded-lg bg-indigo-500 px-4 py-2 text-lg font-bold text-white  `}
        >
          Click me
        </button>
      </div>
      {books.length > 0 && <FaveBooks books={books} />}
    </div>
  );
}

export default Suggest;
