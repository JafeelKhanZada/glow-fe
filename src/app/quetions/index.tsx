import React, { memo, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  AUpdateQuestions,
  APopHistory,
  AUpdateQuestion,
} from "../../store/questions/slice";
import { questions } from "../../mock/data";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Question } from "../../store/questions/type";
import QuestionComponent from "../../components/question";
import ThankYou from "../../components/thank-you";
function Questions() {
  // Hooks
  const dispatch = useDispatch();
  const [activeQuestionId, setActiveQuestionId] = useState<number>(1);
  const [questionNo, setQuestionNo] = useState<number>(1);
  const [activeQuestion, setActiveQuestion] = useState<
    Question | null | undefined
  >(null);
  const [mounted, setMounted] = useState<boolean>(false);
  const counter = useSelector((state: RootState) => state.questions.counter);
  const Question = useSelector((state: RootState) => state.questions.questions);
  const active = useSelector(
    (state: RootState) => state.questions.activeQuestionId
  );
  const history = useSelector((state: RootState) => state.questions.history);
  console.log(":history", history);
  // Functions
  const getQuestions = useCallback(() => {
    return dispatch(AUpdateQuestions(questions));
  }, [mounted]);
  const filterActiveQuestion = useCallback(
    (id: number) => {
      if (Question) return Question.find((v: Question) => v.id === id);
      return null;
    },
    [Question]
  );
  const navigate = () => {
    dispatch(AUpdateQuestion(history.slice(-1)[0]));
    dispatch(APopHistory());
  };
  // Effects
  useEffect(() => {
    if (!mounted) setMounted(true);
    return () => setMounted(false);
  }, []);
  useEffect(() => {
    if (mounted) getQuestions();
  }, [mounted]);
  useEffect(() => {
    if (activeQuestionId)
      if (Question) setActiveQuestion(filterActiveQuestion(activeQuestionId));
  }, [activeQuestionId, Question]);
  useEffect(() => {
    setActiveQuestionId(typeof active === "number" ? active : -1);
  }, [active]);
  useEffect(() => {
    if (counter) setQuestionNo(counter);
  }, [counter]);
  return (
    <>
      <nav className="max-w-7xl w-full py-5 flex items-center mx-auto h-[75px]">
        {activeQuestionId !== 1 && (
          <button onClick={navigate}>
            <img src="/back.svg" className="w-8 h-8" alt="" />
          </button>
        )}
      </nav>
      <div className="w-full flex items-center justify-center h-[calc(100vh_-_75px)]">
        <div className="max-w-7xl w-full">
          {activeQuestionId === -1 ? (
            <ThankYou />
          ) : (
            activeQuestion && (
              <QuestionComponent
                question={activeQuestion}
                number={questionNo}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default memo(Questions);
