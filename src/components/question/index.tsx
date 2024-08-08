import React, { memo } from "react";
import BooleanQuestion from "../boolean-question";
import { Question, NextType } from "../../store/questions/type";
import NumberQuestion from "../number-question";
interface Props {
  question: Question;
  number: number;
}

function QuestionComponent(props: Props): React.ReactElement<Props> {
  // Hooks
  return (
    <div className=" w-full flex flex-col">
      <h1 className="font-semibold text-3xl">
        {props?.number}. {props?.question.text}
      </h1>
      {props?.question.type === "boolean" ? (
        <div className="items-center justify-start flex mt-5 gap-6">
          {props?.question.next?.map((v: NextType, _i: number) => {
            return (
              <BooleanQuestion
                value={v?.value}
                Question={props?.question}
                label={v?.name}
                key={_i}
              />
            );
          })}
        </div>
      ) : (
        <div className="mt-5">
          <NumberQuestion Question={props?.question} />
        </div>
      )}
    </div>
  );
}

export default memo(QuestionComponent);
