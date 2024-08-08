import { Question, NextStepType } from "../store/questions/type";

export const questions: Question[] = [
  {
    id: 1,
    text: "Does your business operate in CA?",
    type: "boolean",
    next: [
      { name: "yes", value: 2 },
      { name: "no", value: NextStepType.END },
    ],
  },
  {
    id: 2,
    text: "How many employees do you have?",
    type: "number",
    next: [
      { name: "min", value: 3 },
      { name: "else", value: 6 },
    ],
    rules: [
      {
        name: "min",
        value: 100,
        operator: "lt",
      },
    ],
  },
  //   type: "number",
  //   next: (answer: number) => (answer > 100 ? NextStepType.END : 3),
  // },
  {
    id: 3,
    text: "Do you serve food?",
    type: "boolean",
    next: [
      { name: "yes", value: 4 },
      { name: "no", value: 6 },
    ],
  },
  {
    id: 4,
    text: "Do you serve hot food?",
    type: "boolean",
    next: [
      { name: "yes", value: 5 },
      { name: "no", value: 5 },
    ],
  },
  {
    id: 5,
    text: "Are you open past midnight?",
    type: "boolean",
    next: [
      { name: "yes", value: 6 },
      { name: "no", value: 6 },
    ],
  },
  {
    id: 6,
    text: "Do you host live music?",
    type: "boolean",
    next: [
      { name: "yes", value: NextStepType.END },
      { name: "no", value: NextStepType.END },
    ],
  },
];
