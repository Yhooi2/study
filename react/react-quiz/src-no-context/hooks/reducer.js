const SECS_PER_QUESTION = 20;

export const initialState = {
  questions: [],
  status: "loading", // loading, error, ready, active, finish
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  timer: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        timer: action.payload.length * SECS_PER_QUESTION,
      };
    case "dataError":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "action" };
    case "answer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, answer: null, index: state.index + 1 };
    case "finish":
      return {
        ...state,
        status: "finish",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        highscore: state.highscore,
        status: "ready",
      };
    case "tick":
      if (state.timer === 0) {
        return { ...state, status: "finish" };
      }
      return {
        ...state,
        timer: state.timer - 1,
      };
    default:
      throw new Error("Action unknown");
  }
}
