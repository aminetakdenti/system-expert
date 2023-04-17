import { useParams } from "react-router-dom";
import bks from "../data/books.json";
import { useState } from "react";
import { imgExist } from "./Books";
import StarIcon from "@mui/icons-material/Star";

function BookDetails() {
  const prams = useParams();
  const [book, setBook] = useState(handleLoad);

  function handleLoad() {
    var bok = {};
    let test = false;
    for (let i = 0; i < bks.length; i++) {
      const bk = bks[i];
      if (bk._id === prams.book) {
        test = true;
        bok = bk;
        break;
      }
    }
    return bok;
  }

  function renderStars(n) {
    const stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<StarIcon fontSize="small" color="warning" />);
    }
    return stars;
  }

  return (
    <div className="space-y-10 px-10 pt-12 md:mx-10 lg:mx-28 xl:mx-56">
      <div className="flex flex-row   space-x-10 ">
        <div className="flex w-1/3 flex-col md:w-1/4">
          <img
            className="2/3 h-full min-h-[120px] w-full min-w-[120px] object-contain"
            src={imgExist(book)}
          />
        </div>
        <div className="flex flex-shrink-0 flex-col space-y-4 text-sm md:w-3/4 md:text-base">
          <h1 className="text-xl font-bold text-blue-700 md:text-3xl">
            {book.title}
          </h1>
          <p>
            Author{book.authors.length > 1 ? "'s" : ""}
            {": "}
            <span className="font-bold">{book.authors.join(", ")}</span>
          </p>
          <p>
            Categorie{book.categories.length > 1 ? "'s" : ""}
            {": "}
            <span className="font-bold">{book.categories.join(", ")}</span>
          </p>
          {book.pageCount && (
            <p>
              Pages: <span className="font-bold">{book.pageCount}</span>
            </p>
          )}
          <p>
            Language: <span className="font-bold">{book.language}</span>
          </p>
          <div className="space ">
            {book.averageRating && renderStars(book.averageRating)}
          </div>
        </div>
      </div>
      {book.description && (
        <div className="flex flex-col space-y-4 md:space-y-2">
          <h4 className="text-base font-extrabold md:text-xl">
            About The Book:
          </h4>
          <p className="text-[12px] text-gray-800 md:text-sm">
            {book.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default BookDetails;
