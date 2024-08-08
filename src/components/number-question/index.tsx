import React, {
  ChangeEvent,
  FormEventHandler,
  memo,
  useMemo,
  useState,
} from "react";
import { Question } from "../../store/questions/type";
import { useDispatch } from "react-redux";
import { AUpdateQuestionId } from "../../store/questions/slice";

interface Props {
  Question: Question;
}

function NumberQuestion(props: Props): React.ReactElement<Props> {
  // Hooks
  const [value, setValue] = useState<number>(
    parseInt(`${props?.Question?.answer}`) || 0
  );
  const dispatch = useDispatch();
  const validator = useMemo(() => {
    return "min";
  }, []);
  const handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validate = props?.Question.rules?.find((v) => v.name === validator);
    if (validate?.operator === "lt") {
      const active = value <= validate.value ? 3 : -1;
      return dispatch(
        AUpdateQuestionId({
          Question: props?.Question,
          active,
          answer: value,
        })
      );
    }
  };
  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e?.target.value);
    return setValue(value);
  };
  return (
    <form className="w-full flex flex-col" onSubmit={handler}>
      <input
        onChange={handlerChange}
        value={value}
        type="number"
        className="w-full text-xl focus:outline-none outline-none shadow-none transition-all border-b-2 focus:border-gray-700 pb-3"
        placeholder="Please enter answer"
      />
      <button
        type="submit"
        className="capitalize w-48 mt-5 border-gray-200 hover:bg-gray-100 transition-all border-2 rounded-md py-2 px-6 text-sm font-medium"
      >
        Continue
      </button>
    </form>
  );
}

export default memo(NumberQuestion);
