# 🎓 Student Record Management System

A full-stack web application to manage student records with features like registration, login, password reset via OTP, role-based dashboards for admins and students, and full CRUD operations.

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT, OTP via Gmail
- **Email Service**: Nodemailer
  

---

## 📂 Folder Structure

student-record/
├── Backend/ # Express backend
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ └── index.js
├── frontend/ # React frontend
│ ├── components/
│ ├── pages/
│ ├── App.jsx
│ └── main.jsx
├── .env # Environment variables
├── package.json # Project scripts


---

## 🔐 Features

### ✅ Authentication
- Register / Login with hashed passwords
- JWT-based session handling
- Role-based access (Admin vs Student)

### 🔄 Password Reset
- Request OTP to email
- Verify OTP
- Reset password securely

### 🧑‍🎓 Student Management (Admin)
- Add, Edit, Delete, View student records
- Role check via middleware

### 🧑‍🏫 Student Dashboard
- Login separately
- View:
  - Assigned Courses
  - Subjects
  - Assignments
  - Profile Info

---

## ⚙️ Setup Instructions

### 1. Clone the Repo
git clone https://github.com/yourusername/student-record.git
cd student-record ;


### 2. Install Dependencies
# Root dependencies
npm install

# Backend
cd Backend
npm install

# Frontend
cd ../frontend
npm install

### 3. Run Project (Frontend + Backend)
From root folder:
npm run dev


