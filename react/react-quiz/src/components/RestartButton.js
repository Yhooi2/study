import useQuizContext from "../context/useQuizContext";

function ResetButton() {
  const { dispatch } = useQuizContext();
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Reset quiz
    </button>
  );
}

export default ResetButton;
