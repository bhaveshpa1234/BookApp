import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
      >
        {/* Close Button */}
        <button 
          type="button" 
          onClick={() => navigate("/")} 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Enter your name" 
            className="w-full p-3 border rounded-lg border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter your email" 
            className="w-full p-3 border rounded-lg  border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Enter your message" 
            className="w-full p-3 border rounded-lg text-gray-900 border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 h-28"
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
