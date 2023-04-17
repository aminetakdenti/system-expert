import Title from "./Title";
import Button from "./Button";
import { Link } from "react-router-dom";

function Layout({ children, title, path, btnText, state, backBtn=false }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-5 rounded-lg  p-6 shadow-2xl">
        <Title title={title} />
        <div className="container mx-auto mt-5 h-[450px] w-fit overflow-auto">
          <div className="container mx-auto grid w-full grid-cols-1 gap-4 px-3 text-center sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 ">
            {children}
          </div>
        </div>
        <div className="flex flex-row-reverse items-center justify-between px-4">
          <Button text={btnText} state={state} path={path} />
          {
            backBtn && (
              <Link to={"/"}>Go back</Link>
            ) 
          }
        </div>
      </div>
    </div>
  );
}

export default Layout;
