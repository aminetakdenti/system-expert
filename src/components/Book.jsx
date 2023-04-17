import { useState, useContext } from "react";
import useCntxt from "../context/UseBooksContext";

function Book({ book, src }) {
  const [active, setActive] = useState(false);
  const { state, dispatch } = useContext(useCntxt);

  return (
    <div
      className={`flex w-40 cursor-pointer flex-col items-center  justify-between rounded-lg  border-2 p-2 shadow-lg transition-colors duration-100 ${
        active
          ? ` border-indigo-500 bg-violet-50`
          : `border-transparent bg-white`
      }`}
      onClick={() => {
        if (!active) {
          setActive(true);
          dispatch({ type: "ADD_TO_BOOKS", payloud: book });
        } else {
          setActive(false);
          dispatch({ type: "REMOVE_FROM_BOOKS", payloud: book });
          console.log(state);
        }
      }}
    >
      <img src={src} alt="" />
      <p className="text-[12px] font-bold">{book.title}</p>
    </div>
  );
}

export default Book;
