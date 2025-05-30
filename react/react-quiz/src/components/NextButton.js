import useQuizContext from "../context/useQuizContext";

function NextButton() {
  const { answer, dispatch, index, numQuestions } = useQuizContext();

  if (answer === null) return null;
  if (index >= numQuestions) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
