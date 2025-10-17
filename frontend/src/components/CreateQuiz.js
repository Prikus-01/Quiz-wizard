import { useState } from "react";
import { Link } from "react-router-dom";

const CreateQuiz = () => {
  const [quizData, setQuizData] = useState("");
  const [ID, setID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://quiz-wizard-backend.onrender.com/api/quiz/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: quizData,
      });
      const data = await response.json();
      setID(data.quizId);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error creating quiz:", error);
      setIsSuccess(false);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          ✨ Create Your Quiz ✨
        </h2>
        <textarea
          className="w-full h-56 border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          placeholder="Paste your Quiz JSON here..."
          value={quizData}
          onChange={(e) => setQuizData(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-4 transition-all duration-300 ease-in-out shadow-lg"
        >
          {isLoading ? "Submitting..." : "🚀 Submit Quiz"}
        </button>

        {isSuccess && (
          <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg text-center">
            🎉 Quiz Created! Your Quiz ID: <strong className="text-green-700">{ID}</strong>
            <div className="mt-4">
              <Link
                to="/attempt-quiz"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
              >
                🎯 Attempt a Quiz
              </Link>
            </div>
          </div>
        )}

        <div className="mt-8 text-gray-600 text-sm">
          <p className="text-lg font-semibold mb-2">📌 Quiz JSON Format:</p>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto shadow-md">
            {JSON.stringify(
              {
                body: [
                  {
                    question: "Which planet is closest to the Sun?",
                    options: ["Venus", "Mercury", "Earth", "Mars"],
                    correctAnswer: "Mercury",
                    type: "MCQ",
                  },
                  {
                    question: "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
                    correctAnswer: 120,
                    type: "Integer",
                  },
                ],
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
