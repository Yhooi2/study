import Header from "./Header.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import Main from "./Main.js";
import { useReducer } from "react";
import StartScreen from "./StartScreen.js";
import Question from "./Question.js";
import NextButton from "./NextButton.js";
import Progress from "./Progress.js";
import FinishScreen from "./FinishScreen.js";
import RestartButton from "./RestartButton.js";
import Footer from "./Footer.js";
import Timer from "./Timer.js";
import { reducer, initialState } from "../hooks/reducer.js";
import useQuize from "../hooks/useQuize.js";

export default function App() {
  const [
    { questions, status, index, answer, points, highscore, timer },
    dispatch,
  ] = useReducer(reducer, initialState);

  useQuize({ dispatch });
  const numQuestions = questions.length - 1;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "action" && (
          <>
            <Progress
              points={points}
              maxPoints={maxPoints}
              index={index}
              answer={answer}
              numQuestions={numQuestions}
            />
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <Footer>
              <NextButton
                answer={answer}
                dispatch={dispatch}
                index={index}
                numQuestions={numQuestions}
              />
              <Timer dispatch={dispatch} timer={timer} />
            </Footer>
          </>
        )}

        {status === "finish" && (
          <>
            <FinishScreen
              points={points}
              maxPoints={maxPoints}
              highscore={highscore}
            />
            <RestartButton dispatch={dispatch} />
          </>
        )}
      </Main>
    </div>
  );
}
