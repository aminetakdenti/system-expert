import { Link } from "react-router-dom";

function Button({ text, state, path }) {
  return (
    <button
      className={`rounded-lg bg-indigo-500 px-4 py-2 text-lg font-bold text-white  disabled:cursor-not-allowed disabled:bg-gray-400`}
      disabled={state}
      type="button"
    >
      {state ? text : <Link to={path}>{text}</Link>}
    </button>
  );
}

export default Button;
