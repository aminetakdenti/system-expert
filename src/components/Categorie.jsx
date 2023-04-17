import { useContext, useState } from "react";
import useCntxt from "../context/UseBooksContext";

function Categorie({ name }) {
  const { state, dispatch } = useContext(useCntxt);
  const [active, setActive] = useState(state.categories.includes(name));
  return (
    <div
      className="mx-auto py-4"
      onClick={() => {
        if (!active) {
          setActive(true);
          dispatch({ type: "ADD_TO_CATEGORIES", payloud: name });
        } else {
          setActive(false);
          dispatch({ type: "REMOVE_FROM_CATEGORIES", payloud: name });
          console.log(state);
        }
      }}
    >
      <p
        className={`flex h-40 w-40 cursor-pointer items-center justify-center rounded-lg   border-2 p-4 text-center font-semibold   shadow-lg transition-colors duration-100 ${
          active
            ? ` border-indigo-500 bg-violet-50`
            : `border-transparent bg-white`
        }`}
      >
        {name}
      </p>
    </div>
  );
}

export default Categorie;
