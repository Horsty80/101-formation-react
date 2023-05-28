import { createContext, useState } from "react";

export const PriceContext = createContext({});

export const PriceProvider = ({ children, initialValue = 0 }) => {
  const [price, setPrice] = useState(initialValue);
  return <PriceContext.Provider value={{ price, setPrice }}>{children}</PriceContext.Provider>;
};
