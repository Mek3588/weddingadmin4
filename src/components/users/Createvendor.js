import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const REACT_APP_SERVER_DOMIN = process.env.REACT_APP_SERVER_DOMIN;

const Createvendor = () => {
  const navigate = useNavigate();

const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${REACT_APP_SERVER_DOMIN}/vendors`, formData)
      .then((response) => {
        console.log("Vendor account created successfully:", response.data);
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Error creating vendor account:", error);
      });
  };

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title text-2xl font-semibold">Create Vendor Account</h2>
      </div>
  
      <div className="card mx-auto max-w-md mt-4 p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-600"
              type="text"
              id="firstName"
              name="name"
              placeholder="First Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-600"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-600"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-600"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </section>
  );
  
  
};

export default Createvendor;
