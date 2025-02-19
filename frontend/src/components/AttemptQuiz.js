import { useState } from "react";
import Question from "./Question";

const AttemptQuiz = () => {
  const [quizId, setQuizId] = useState("");
  const [quiz, setQuiz] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuiz = async () => {
    if (!quizId.trim()) {
      setError("Please enter a valid Quiz ID.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://quiz-wizard-backend.vercel.app/api/quiz/${quizId}`);
      if (!response.ok) {
        throw new Error("Quiz not found or invalid Quiz ID");
      }

      const data = await response.json();
      setQuiz(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br justify-center from-purple-100 to-blue-200 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        {quiz === null ? (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              🚀 Attempt a Quiz
            </h2>
         <p> TRY : SAMPLE </p>
            <input
              className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Enter Quiz ID"
              value={quizId}
              onChange={(e) => setQuizId(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              onClick={fetchQuiz}
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 transition-all duration-300 shadow-md transform hover:scale-105"
            >
              {loading ? "Loading..." : "🎯 Start Quiz"}
            </button>
          </>
        ) : (
          <Question data={quiz} />
        )}
      </div>
    </div>
  );
};

export default AttemptQuiz;
