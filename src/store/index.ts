import { configureStore } from "@reduxjs/toolkit";
import questions from "./questions/slice";
const store = configureStore({
  reducer: {
    questions,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
