import QuizContext from "./QuizContext";
import { useReducer } from "react";
import { reducer, initialState } from "./reducer.js";
import useQuize from "../hooks/useQuize.js";

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, timer },
    dispatch,
  ] = useReducer(reducer, initialState);

  useQuize({ dispatch });
  const numQuestions = questions.length - 1;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        timer,
        numQuestions,
        maxPoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export default QuizProvider;
