import React, { memo } from "react";
import { Question } from "../../store/questions/type";
import { useDispatch } from "react-redux";
import { AUpdateQuestion } from "../../store/questions/slice";
interface Props {
  question: Question;
  number: number;
}

function QuestionCard(props: Props): React.ReactElement<Props> {
  // Hooks
  const dispatch = useDispatch();
  const change = () => dispatch(AUpdateQuestion(props?.question?.id));
  return (
    <div className="w-full flex items-center">
      <div className=" w-full flex flex-col">
        <h1 className="font-semibold text-md">
          Question {props?.number}. {props?.question.text}
        </h1>
        <p className="text-md text-gray-700 mt-2 capitalize font-medium">
          Answer : {props?.question?.answer}
        </p>
      </div>
      <button className="font-semibold text-sm text-gray-400" onClick={change}>
        Change?
      </button>
    </div>
  );
}

export default memo(QuestionCard);
