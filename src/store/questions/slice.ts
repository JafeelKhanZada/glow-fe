import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionsState, Question, NextStep } from "./type";

const initialState: QuestionsState = {
  questions: [],
  activeQuestionId: 1,
  counter: 1,
  history: [],
};

const slice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    APopHistory(state) {
      state.history.pop();
    },
    AUpdateQuestions(state, action: PayloadAction<Question[]>) {
      state.questions = action.payload;
    },
    AUpdateQuestion(state, action: PayloadAction<number>) {
      state.activeQuestionId = action.payload;
      state.counter = action.payload;
    },
    AUpdateQuestionId(
      state,
      action: PayloadAction<{
        active: NextStep;
        Question: Question;
        answer: string | number;
      }>
    ) {
      const lastActive = state.activeQuestionId;
      state.history.push(typeof lastActive === "string" ? -1 : lastActive);
      state.activeQuestionId = action.payload.active;
      const questionIndex = state.questions.findIndex(
        (v) => v.id === lastActive
      );
      if (!state.questions[questionIndex].answer)
        state.counter = state.counter + 1;
      const QUESTION = [...state.questions];
      QUESTION[questionIndex] = {
        ...QUESTION[questionIndex],
        answer: action.payload.answer,
      };
      state.questions = [...QUESTION];
    },
  },
});

export const {
  AUpdateQuestions,
  AUpdateQuestionId,
  AUpdateQuestion,
  APopHistory,
} = slice.actions;

export default slice.reducer;
