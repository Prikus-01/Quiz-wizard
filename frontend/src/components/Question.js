import { useState } from "react";
import Timer from "./Timer";
import Result from "./Result";

const Question = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [result, setresult] = useState(false);

  const question = data[index];

  const nextQuestion = () => {
    if (index + 1 < data.length) {
      setIndex(index + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setResetKey((prev) => prev + 1);
    } else {
      setresult(true);
    }
  };

  const checkAnswer = () => {
    if (isAnswered) return; // Prevent multiple submissions

    setIsAnswered(true);

    if (
      selectedAnswer !== null &&
      selectedAnswer.toString().toLowerCase() ===
        question.correctAnswer.toString().toLowerCase()
    ) {
      setScore((prev) => prev + 1);
    }

    setTimeout(nextQuestion, 1000);
  };

  const handleTimeUp = () => {
    if (selectedAnswer !== null) {
      checkAnswer(); // Check answer if selected before time runs out
    } else {
      nextQuestion(); // Skip if no answer selected
    }
  };

  return (
    <>
    {
      result === true ? <Result score={score} totalQuestions={data.length} />
      :
    (<div className="p-6">
      <h2 className="text-xl font-bold">
        {index + 1}. {question.question}
      </h2>

      <Timer duration={30} onTimeUp={handleTimeUp} resetKey={resetKey} />

      {question.type === "MCQ" ? (
        <div className="mt-4">
          {question.options.map((option, i) => (
            <button
              key={i}
              className={`block w-full p-2 mt-2 border rounded-lg ${
                selectedAnswer === option ? "bg-blue-300" : "bg-gray-200"
              }`}
              onClick={() => setSelectedAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <input
          type="number"
          className="border p-2 mt-4 w-full"
          placeholder="Enter your answer"
          value={selectedAnswer || ""}
          onChange={(e) => setSelectedAnswer(e.target.value)}
        />
      )}

      {isAnswered && (
        <p className="mt-4 font-bold text-lg">
          {selectedAnswer?.toString() === question.correctAnswer.toString()
            ? "✅ Correct!"
            : "❌ Incorrect!"}
        </p>
      )}

      <button
        onClick={checkAnswer}
        className="bg-green-500 text-white px-4 py-2 mt-4"
        disabled={isAnswered}
      >
        Submit
      </button>
    </div>)
    }
    </>
  );
};

export default Question;
