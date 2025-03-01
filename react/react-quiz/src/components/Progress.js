function Progress({ index, answer, numQuestions, points, maxPoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + (answer !== null)}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions + 1}
      </p>
      <p>
        <strong>{points}</strong> /{maxPoints}
      </p>
    </header>
  );
}

export default Progress;
