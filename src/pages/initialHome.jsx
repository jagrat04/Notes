import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const textArray = [
  "Explore AI-Powered Trees.",
  "Visualize Infinite Structures.",
  "Export Dynamic ML Trees.",
];

const InitialHome = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textArray.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 relative">

      {/* Top-Right Sign Up / Log In */}
      <div style={{ 
      position: 'absolute', 
      top: '0', 
      right: '0',  // Optional: for visibility
      padding: '10px', // Optional: for spacing
    }}>
        <button className="bg-gray-800 hover:bg-gray-700 px-5 py-2 rounded-lg border border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-md">
          Sign Up
        </button>
        <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md" style={{ marginLeft: '10px' }} >
          Log In
        </button>
      </div>

      {/* Centered Hero Text */}
      <div className="text-center max-w-2xl">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4 text-center"
          key={textIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {textArray[textIndex]}
        </motion.h1>
        
        <motion.p
          className="text-lg text-gray-400 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Build, visualize, and export dynamic ML-driven trees on an infinite canvas.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Link
            to="/playground"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Go to Playground
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default InitialHome;
