import { useContext } from "react";
import { CitiesContext } from "./createContext";

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export default useCities;
