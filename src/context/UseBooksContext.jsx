import { createContext, useReducer } from "react";
import reduce, { initData } from "../reducer";

const useCntxt = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initData);

  return (
    <useCntxt.Provider value={{ state, dispatch }}>
      {children}
    </useCntxt.Provider>
  );
};

export default useCntxt;
