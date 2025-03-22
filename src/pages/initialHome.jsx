import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Explore AI-Powered Tree Structures
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Build, visualize, and export dynamic ML-driven trees on an infinite canvas.
        </p>
        <Link
          to="/playground"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Go to Playground
        </Link>
      </div>

      {/* Sign Up / Log In */}
      <div className="mt-10 flex space-x-4">
        <button className="bg-gray-800 hover:bg-gray-700 px-5 py-2 rounded-lg border border-gray-600">
          Sign Up
        </button>
        <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg">
          Log In
        </button>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-500 text-sm">
        Built with ❤️ using React & Tailwind
      </footer>
    </div>
  );
};

export default Home;

