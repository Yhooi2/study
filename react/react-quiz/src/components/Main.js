import useQuizContext from "../context/useQuizContext.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";
import Progress from "./Progress.js";
import Question from "./Question.js";
import Footer from "./Footer.js";
import FinishScreen from "./FinishScreen.js";
import RestartButton from "./RestartButton.js";

function Main() {
  const { status } = useQuizContext();
  switch (status) {
    case "loading":
      return <Loader />;
    case "error":
      return <Error />;
    case "ready":
      return <StartScreen />;
    case "action":
      return (
        <>
          <Progress />
          <Question />
          <Footer />
        </>
      );
    case "finish":
      return (
        <>
          <FinishScreen />
          <RestartButton />
        </>
      );
    default:
      throw new Error("Unknown action");
  }
}

export default Main;
