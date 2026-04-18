# 🎥 REELBITE – Reels-Based Food Discovery Platform

## 📌 Overview
REELBITE is a modern food discovery web application that uses short-form video content (reels) to help users explore restaurants in an engaging way. Instead of traditional text-based listings, users can scroll through food videos and directly visit restaurant pages.

This project is inspired by platforms like Instagram Reels and YouTube Shorts, focusing on **visual-first user experience**.

---

## ✨ Features

### 👤 User Features
- User Registration & Login
- Scrollable reels feed (food videos)
- Explore restaurants via reels
- Save favorite reels
- View restaurant/store details

### 🍽️ Food Partner Features
- Food partner registration & login
- Upload food reels/videos
- Manage restaurant profile

### 🎨 UI/UX
- Vertical reels scrolling interface
- Clean and responsive design
- Smooth navigation (Home, Saved, Profile)

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- CSS / Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Tools & Libraries
- Axios
- React Router
- Git & GitHub

---

## 📂 Project Structure


REELBITE-PROJECT/
│
├── frontend/ # React frontend
├── backend/ # Express backend
├── models/ # MongoDB schemas
├── routes/ # API routes
├── controllers/ # Business logic
├── assets/ # Images / videos
└── README.md


---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/priya-dagar/REELBITE-PROJECT.git
cd REELBITE-PROJECT
2️⃣ Backend Setup
cd backend
npm install
npm start
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🔗 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/auth/user/register	Register user
POST	/api/auth/user/login	Login user
GET	/api/reels	Fetch all reels
GET	/api/store/:id	Get restaurant details
