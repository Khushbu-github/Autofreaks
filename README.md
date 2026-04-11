# 🚗 AutoFreaks - Premium Car Dealership Platform

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8.svg)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47a248.svg)](https://www.mongodb.com/)

**A full-stack (MERN) platform for showcasing, buying, selling, and managing premium pre-owned cars.**

AutoFreaks is a modern, responsive web application designed for a car dealership. It provides a stunning customer-facing catalog and a secure, fully-featured Admin dashboard for inventory management.

---

## 📑 Table of Contents
- [🚀 Features](#-features)
- [🏗️ Architecture & Modules](#️-architecture--modules)
- [🧑‍💻 Tech Stack](#-tech-stack)
- [⚙️ Setup Instructions](#️-setup-instructions)
- [🔌 API Routes](#-api-routes)
- [📂 Project Structure](#-project-structure)

---

## 🚀 Features

### 🛒 Customer Portal
- **Browse Inventory**: View available premium cars with advanced styling and AOS scroll animations.
- **Detailed Listings**: Individual car pages showing comprehensive specifications (engine, torque, KMS, ownership, fuel, etc.) and image galleries.
- **Buy & Sell Workflows**: Dedicated forms and routing for customers looking to buy or sell their vehicles.
- **Gallery**: Media showcase of previous deliveries and premium stock.
- **Contact & Support**: Floating contact action buttons and standard contact forms for lead generation.

### 🔐 Admin Dashboard (Secured via JWT)
- **Inventory Management**: Create, update, and delete car listings instantly.
- **Media Uploads**: Seamless image uploading to Cloudinary (via Multer) for car listings and gallery entries.
- **Gallery Management**: Organize and upload showcase pictures directly from the dashboard.
- **Secure Authentication**: Protected admin routes using bcrypt-hashed passwords and HttpOnly cookies or JWT verification.

---

## 🏗️ Architecture & Modules

### 1. Data Models (Mongoose)
- **`Car`**: Stores vehicle specifications (brand, year, price, transmission, color), array of feature strings, and linked image URLs from Cloudinary.
- **`Gallery`**: Stores images meant for the platform's showcase gallery.
- **`User`**: Secure storage for admin credentials (username, password hash).

### 2. Image Processing & Storage
- Replaced local storage with **Cloudinary** for scalable cloud image CDN.
- Integrated **Multer** middleware in the Express layer for handling `multipart/form-data` streams securely.

### 3. Frontend UI/UX
- Utilizes the brand-new **TailwindCSS v4** with `@tailwindcss/postcss` for lightning-fast styling.
- Rich icon set through **Lucide-React**.
- Deep routing and lazy loading using **React Router DOM v7**.

---

## 🧑‍💻 Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS 4.x, React Router v7, AOS, Axios.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB (via Mongoose 9.x).
- **Authentication:** JSON Web Tokens (JWT) & bcryptjs.
- **Cloud Storage:** Cloudinary & Multer.

---

## ⚙️ Setup Instructions

### 1. Prerequisites
- **Node.js** v18+ 
- **MongoDB** cluster URI (e.g., MongoDB Atlas)
- **Cloudinary** Account (for image hosting)

### 2. Environment Variables

#### Backend (`server/.env`)
Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_cluster_uri
JWT_SECRET=your_super_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

#### Frontend (`client/.env`)
Create a `.env` file in the `client` directory (if configuring proxy):
```env
VITE_API_BASE_URL=http://localhost:5000
```

### 3. Installation & Booting

**Split-terminal execution:**

**Terminal 1: Start Backend**
```bash
cd server
npm install
npm run start
```

**Terminal 2: Start Frontend**
```bash
cd client
npm install
npm run dev
```

---

## 🔌 API Routes

### 🚘 Cars (`/cars`)
- `GET /cars` - Fetch all vehicles
- `GET /cars/:id` - Fetch singular vehicle by ID
- `POST /cars` - (Admin) Create a car listing (Handles Multer image array)
- `DELETE /cars/:id` - (Admin) Delete vehicle

### 🖼️ Gallery (`/gallery`)
- `GET /gallery` - Fetch all gallery images
- `POST /gallery` - (Admin) Upload to gallery

### 🔐 Authentication (`/auth`)
- `POST /auth/login` - Validates credentials and returns JWT token
- `POST /auth/register` - Registers a new admin (Should be disabled in production after initial setup)

---

## 📂 Project Structure
```text
car-dealership/
├── client/
│   ├── src/
│   │   ├── assets/       # Static branding (Logo.png)
│   │   ├── components/   # Reusable UI (Navbar, Footer, ProtectedRoute)
│   │   ├── pages/        # Public views (Home, Cars, About)
│   │   │   └── admin/    # Protected views (Dashboard, AddCar, UploadGallery)
│   │   ├── utils/        # API and utility functions
│   │   ├── App.jsx       # Routing Engine
│   │   └── main.jsx      # React Entry Point
│   ├── index.html
│   ├── package.json
│   └── tailwind.config.js
│
├── server/
│   ├── config/           # Database connections (db.js)
│   ├── controllers/      # Route logic handlers
│   ├── middleware/       # Multer config & JWT authenticators
│   ├── models/           # Mongoose Schemas (Car.js, User.js, Gallery.js)
│   ├── routes/           # Express Route definitions
│   ├── server.js         # Express App Entry Point
│   └── package.json
```
