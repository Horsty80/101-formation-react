import { useContext } from "react";
import { PriceContext } from "../contexts/PriceContext";

export function usePrice() {
  return useContext(PriceContext);
}
