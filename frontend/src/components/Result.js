import React from "react";

const Result = ({ score, totalQuestions }) => {
  const percentage = (score / totalQuestions) * 100;

  const getMessage = () => {
    if (percentage >= 80) return "🏆 Excellent! You're a quiz master!";
    if (percentage >= 50) return "👏 Good job! Keep practicing!";
    return "😓 Don't worry! Try again and improve!";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800">🎉 Quiz Completed!</h1>
        <p className="text-2xl font-semibold text-blue-500 mt-4">
          Your Score: <span className="text-green-500">{score}</span> / {totalQuestions}
        </p>
        <p className="mt-3 text-lg font-medium text-gray-600">{getMessage()}</p>

        <div className="w-full bg-gray-300 h-4 rounded-lg mt-6 overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              percentage >= 80 ? "bg-green-500" : percentage >= 50 ? "bg-yellow-500" : "bg-red-500"
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md transform hover:scale-105"
        >
          🔄 Try Again
        </button>
      </div>
    </div>
  );
};

export default Result;
