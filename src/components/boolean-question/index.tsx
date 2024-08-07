import React, { memo } from "react";
import { NextStep, Question } from "../../store/questions/type";
import { useDispatch } from "react-redux";
import { AUpdateQuestionId } from "../../store/questions/slice";

interface Props {
  label: string;
  value: NextStep;
  Question: Question;
}

function BoolanQuestion(props: Props): React.ReactElement<Props> {
  // Hooks
  const dispatch = useDispatch();
  const handler = () => {
    console.log("props?.value", props?.value);
    return dispatch(
      AUpdateQuestionId({
        Question: props?.Question,
        active: props?.value,
        answer: props?.label,
      })
    );
  };
  return (
    <button
      onClick={handler}
      className={`capitalize border-gray-200 hover:bg-gray-100 transition-all border-2 rounded-md py-2 px-6 text-sm font-medium ${
        props?.Question?.answer === props?.label ? "bg-gray-200" : ""
      }`}
    >
      {props?.label}
    </button>
  );
}

export default memo(BoolanQuestion);
