import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          🎯 Interactive Quiz Platform
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Create quizzes, challenge yourself, and test your knowledge!
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            to="/create-quiz"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md transform hover:scale-105"
          >
            ✍️ Create a Quiz
          </Link>
          <Link
            to="/attempt-quiz"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md transform hover:scale-105"
          >
            🚀 Attempt a Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
