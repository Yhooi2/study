import useQuizContext from "../context/useQuizContext.js";
import Options from "./Options.js";
function Question() {
  const { questions, index } = useQuizContext();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
