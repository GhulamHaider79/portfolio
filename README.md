Ghulam Haider Portfolio

Live Demo

A modern, single-page portfolio website built with React, Tailwind CSS, and Firebase, featuring a full Admin Panel with protected routes for managing projects and messages.

Table of Contents

Features

Technologies Used

Project Structure

Firebase Integration

Admin Panel

Getting Started

Deployment

Screenshots

Author

Features

Single-page responsive portfolio

Hero Section with animated introduction

Skills Section with icons and descriptions

Projects Section displaying portfolio projects dynamically

About Section with personal details and experience

Services Section highlighting offerings

Contact Section with a form storing messages in Firebase

Admin Panel:

Protected routes with Firebase authentication

Add, edit, and delete projects

View and manage messages from visitors

Fully responsive and mobile-friendly design

Technologies Used

Frontend: React, Tailwind CSS, Framer Motion, React Icons

Backend / Database: Firebase Firestore

Authentication: Firebase Auth

Deployment: Vercel

Project Structure
/src
├── components
│   ├── HeroSection.jsx
│   ├── SkillsSection.jsx
│   ├── ProjectsSection.jsx
│   ├── AboutSection.jsx
│   ├── ServicesSection.jsx
│   ├── ContactSection.jsx
│   ├── Navbar.jsx
│   ├── FooterSection.jsx
│   └── ProtectedRoute.jsx
├── pages
│   ├── Home.jsx
│   └── Admin.jsx
├── firebase.js
├── App.jsx
└── main.jsx

Firebase Integration

Firestore for storing projects and contact messages.

Authentication used for admin login and protected routes.

Realtime updates using onSnapshot for live changes in admin panel.

Admin Panel

Protected route ensures only authenticated users can access.

Add, edit, and delete projects.

View contact messages submitted by users.

Local storage backup for development (optional).

Login Route: /admin11201
Vercel Live Link: Portfolio Admin

Getting Started

Clone the repository

git clone https://github.com/GhulamHaider79/portfolio.git
cd portfolio


Install dependencies

npm install


Create a .env file for Firebase config:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id


Run locally

npm run dev

Deployment

The site is deployed on Vercel.

Build Command: npm run build

Output Directory: dist

Live Demo: https://portfolio-nine-fawn-igotbe6v7l.vercel.app/

Screenshots
Hero Section

Skills Section

Projects Section

Admin Panel

Author

Ghulam Haider

Email: ghulamhaider11201@gmail.com

Phone: +92 3422109898

Location: Lahore, Punjab, Pakistan

License

This project is licensed under the MIT License.