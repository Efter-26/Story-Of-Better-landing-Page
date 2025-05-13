"use client";
import { useState } from "react";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({
    email: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleBlur = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      setFormErrors({ ...formErrors, email: isValid ? "" : "Please enter a valid email address." });
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validateEmail(formData.email)) {
      setFormErrors({ ...formErrors, email: "Please enter a valid email address." });
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setSuccessMessage("✅ Submitted successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setErrorMessage("❌ Failed to send message. Please try again.");
      console.error(err);
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  return (
    <section className="w-full py-16 px-6 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-section_titile">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
          />

          <div className="space-y-1">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your Email"
              required
              className={`w-full border p-3 rounded focus:outline-none ${formErrors.email ? "border-red-500 ring-red-300" : "focus:ring-2 focus:ring-green-300"
                }`}
            />
            {formErrors.email && (
              <p className="text-red-600 text-sm font-medium">{formErrors.email}</p>
            )}
          </div>

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full border p-3 rounded h-40 focus:outline-none focus:ring-2 focus:ring-green-300"
          ></textarea>

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition duration-300"
          >
            Submit
          </button>

          
          {successMessage && (
            <p className="text-green-700 font-medium animate-fade-in">{successMessage}</p>
          )}

          
          {errorMessage && (
            <p className="text-red-600 font-medium animate-fade-in">{errorMessage}</p>
          )}
        </form>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
