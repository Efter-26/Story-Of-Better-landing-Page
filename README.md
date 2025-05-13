# 🌱 Better - Simple Web Page

Welcome to **Better**, a sleek and responsive simple page for a fictional built using **Next.js**, **Tailwind CSS**, and **MongoDB**. The app integrates a custom backend API to manage founder profiles and contact messages.

🔗 **Live Site**: [https://ornate-kringle-858b0e.netlify.app](https://ornate-kringle-858b0e.netlify.app)

---

## 📌 Overview

The goal of this project is to create a **fully functional Web page** that:
- Dynamically loads founder data from a MongoDB database
- Displays content using smooth animations
- Allows users to submit a **Contact Us** form, which stores messages in a database
- Is fully responsive and production-ready

---

## ✨ Features

- 🔍 Dynamic **Founder section** populated from a MongoDB collection
- 📨 **Contact Form** with validation and live feedback (success/error)
- ✅ Email input with blur-based regex validation (no premature validation nagging)
- 💫 Smooth animations using **Framer Motion**
- 💾 Backend data handling via **custom REST API**
- 🎨 Fully responsive design using Tailwind CSS
- 🚀 Deployed frontend on Netlify and backend on Vercel

---

## 🛠️ Tech Stack

### Frontend:
- **Next.js 14+**
- **Tailwind CSS**
- **Framer Motion**
- **Axios** for API calls

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** (accessed using MongoDB Compass)
- **CORS**, **body-parser**, **dotenv** for middleware and configs

---

## 🗃️ Folder Structure
```
BETTEREMART/
├── aboutbetter/ # Frontend (Next.js)
│ ├── app/ # App Router & Pages
│ ├── components/ # UI Components like Navbar, ContactPage, etc.
│ ├── public/ # Static assets like images
│ ├── styles/ # CSS/Tailwind styles
│ └── ...
├── better-api/ # Backend (Express + MongoDB)
│ ├── server.js # Main server file
│ ├── routes/ # API route handlers (e.g., /get-founders, /contact)
│ ├── models/ # Mongoose models (e.g., Founder.js, Contact.js)
│ ├── utils/ # Database connection and utilities
│ ├── .env # Environment variables (DO NOT PUSH)
│ └── ...
├── README.md # Project documentation
└── .gitignore # Files to ignore in Git
```

