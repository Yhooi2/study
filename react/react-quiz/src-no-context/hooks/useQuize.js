import { useEffect } from "react";
function useQuize({ dispatch }) {
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataError" }));
  }, [dispatch]);
}

export default useQuize;
