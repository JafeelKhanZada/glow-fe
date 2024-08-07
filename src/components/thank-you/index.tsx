import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Question } from "../../store/questions/type";
import QuestionCard from "../question-card";

function ThankYou() {
  // Hooks
  const [answered, setAnswered] = useState<Question[]>([]);
  const Question = useSelector((state: RootState) => state.questions.questions);
  console.log("Question", Question);
  // Effects
  useEffect(() => {
    if (Question) setAnswered([...Question?.filter((v) => v?.answer)]);
  }, [Question]);
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl font-semibold">Thank You!</h1>
      <div className="w-full flex flex-col mt-10 space-y-10">
        {answered?.map((v: Question, k: number) => {
          return <QuestionCard question={v} number={k + 1} />;
        })}
      </div>
    </div>
  );
}

export default memo(ThankYou);
