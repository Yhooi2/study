import { useEffect } from "react";
import useQuizContext from "../context/useQuizContext";

function Timer() {
  const { dispatch, timer } = useQuizContext();
  const min = Math.floor(timer / 60);
  const sec = timer % 60;
  useEffect(() => {
    const id = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}

export default Timer;
