function FinishScreen({ points, maxPoints, highscore }) {
  const percentage = Math.ceil((points / maxPoints) * 100);
  const emoji =
    percentage === 100
      ? "🥇"
      : percentage > 80
      ? "🥈"
      : percentage > 50
      ? "🥉"
      : percentage > 0
      ? "🧐"
      : "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored {points} out of {maxPoints} (
        {percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  );
}

export default FinishScreen;
