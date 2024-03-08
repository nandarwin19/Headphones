import { createContext } from "react";
import { all_headphones } from "../components/constants/constant";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_headphones };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
