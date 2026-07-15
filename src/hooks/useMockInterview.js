import { useMemo, useState } from "react";
import { mockInterviewQuestions } from "../data/mockInterviewQuestions";

const useMockInterview = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState(
    mockInterviewQuestions.map((question, index) => ({
      ...question,
      answer: "",
      visited: index === 0,
    }))
  );

  const question = answers[currentQuestion];

  const answeredCount = useMemo(() => {
    return answers.filter(
      (item) => item.answer.trim() !== ""
    ).length;
  }, [answers]);

  const progress = Math.round(
    (answeredCount / answers.length) * 100
  );

  const updateAnswer = (value) => {
    setAnswers((prev) =>
      prev.map((item, index) =>
        index === currentQuestion
          ? { ...item, answer: value }
          : item
      )
    );
  };

  const nextQuestion = () => {
    if (currentQuestion >= answers.length - 1) return;

    const nextIndex = currentQuestion + 1;

    setAnswers((prev) =>
      prev.map((item, index) =>
        index === nextIndex
          ? { ...item, visited: true }
          : item
      )
    );

    setCurrentQuestion(nextIndex);
  };

  const previousQuestion = () => {
    if (currentQuestion <= 0) return;

    const previousIndex = currentQuestion - 1;

    setAnswers((prev) =>
      prev.map((item, index) =>
        index === previousIndex
          ? { ...item, visited: true }
          : item
      )
    );

    setCurrentQuestion(previousIndex);
  };

  const goToQuestion = (index) => {
    setAnswers((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, visited: true }
          : item
      )
    );

    setCurrentQuestion(index);
  };

  return {
    answers,
    question,
    currentQuestion,

    answeredCount,
    progress,

    updateAnswer,
    nextQuestion,
    previousQuestion,
    goToQuestion,
  };
};

export default useMockInterview;