function ResetButton({ dispatch }) {
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
