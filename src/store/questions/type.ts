export type QuestionType = "boolean" | "number";

export enum NextStepType {
  END = "end",
}

export interface BaseQuestion {
  id: number;
  text: string;
  type: QuestionType;
}

export interface BooleanQuestion extends BaseQuestion {
  type: "boolean";
  next: NextType[];
  answer?: string | number;
}

export interface NumberQuestion extends BaseQuestion {
  type: "number";
  next: (answer: number) => NextStep;
  answer?: string | number;
}

export type NextType = {
  name: string;
  value: NextStep;
};
export type Question = BooleanQuestion | NumberQuestion;
export type NextStep = NextStepType.END | number;

export interface QuestionsState {
  questions: Question[];
  activeQuestionId: NextStep;
  counter: number;
  history: number[];
}
