import { Link } from "react-router-dom";
import { imgExist } from "../pages/Books";

function FaveBooks({ books }) {
  return (
    <div className="min-h-screen w-fit text-center">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {books.length !== undefined &&
          books.map((bk, idx) => (
            <Link to={`/suggestBook/${bk._id}`} key={idx}>
              <div
                className={`flex w-40 cursor-pointer flex-col items-center justify-between  rounded-lg  border p-2 `}
              >
                <img src={imgExist(bk)} alt="" />
                <p className="mt-4 text-[12px] font-bold">{bk.title}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default FaveBooks;
