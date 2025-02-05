import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-6 py-12 relative">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8 relative">
        {/* Close Button */}
        <button 
          type="button" 
          onClick={() => navigate("/")} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h1 className="text-4xl font-bold mb-6 text-center">About BookStore</h1>
        
        <p className="text-gray-700 text-lg">
          Welcome to <strong>BookStore</strong>, your one-stop platform for exploring and discovering amazing books. 
          Whether you are an avid reader or just getting started, we provide curated collections across different genres 
          to help you find your next favorite book.
        </p>
        
        <p className="text-gray-700 text-lg mt-4">
          Our mission is to create a seamless reading experience, allowing users to browse, review, and save books for later. 
          Stay tuned for exciting features, including personalized recommendations and community discussions!
        </p>
        
        <p className="text-gray-700 text-lg mt-4 text-center font-medium">
          Happy Reading! 📚
        </p>
      </div>
    </div>
  );
};

export default About;
