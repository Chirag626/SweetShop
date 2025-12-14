# SweetShop
# Sweet Shop Management System 🍬

A full‑stack web application for managing sweets, categories, users, and orders in a sweet shop.  
This project includes:

- A **Spring Boot backend** with JWT Authentication  
- A **React frontend**  
- Image upload support  
- Role‑based access control (Admin/User)  
- PostgreSQL database integration  

---

## 🚀 Features

### ✅ Backend (Spring Boot)
- JWT-based login & registration  
- Role-based authorization (**USER**, **ROLE_ADMIN**)  
- Upload sweets with image files (`multipart/form-data`)  
- Retrieve and manage sweets  
- Secure REST APIs  

### 🎨 Frontend (React)
- Login/Register forms  
- Sweet upload form with image picker  
- Sweet listing dashboard  
- Admin-only actions  

### 🛢 Database (PostgreSQL)
- User table  
- Sweets table  
- Secure hashed passwords (BCrypt)  

---

# 🏗 Project Setup Guide

## 1️⃣ Backend Setup (Spring Boot)

### **Requirements**
- JDK 17+
- Maven
- PostgreSQL 15+
- VS Code / IntelliJ

### **Steps**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sweetshop.git

2. Open the backend/ folder in your IDE.

3. Update application.properties:
spring.datasource.url=jdbc:postgresql://localhost:5432/sweetshop
spring.datasource.username=postgres
spring.datasource.password=your_db_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.servlet.multipart.enabled=true

4. Run the backend:
mvn spring-boot:run

2️⃣ Frontend Setup (React)
Requirements
Node.js 18+

npm or yarn

Steps
1. Move to frontend folder:
cd frontend

2. Install dependencies:
npm install

3. Run:
npm run dev

Frontend will run at:
http://localhost:5173

Backend will run at:
http://localhost:8080

📷 Screenshots
i will add later.

Example layout:
/screenshots
   ├── login.png
   ├── upload-form.png
   ├── dashboard.png


🧪 Test Report
Your test suite includes:

Test	Status
User Registration	✔️
JWT Authentication	✔️
Sweet Upload + Image	✔️
Purchase Flow	✔️
Search Functionality	✔️
Admin Role Permissions	✔️
Include actual screenshots/output logs if needed.

🤖 My AI Usage (Mandatory Section)
This project was created with assistance from ChatGPT for:

Debugging Spring Security + JWT issues

Designing REST APIs

Writing documentation (README, test report)

Improving code structure

Explaining errors & generating solutions

All final implementation decisions were made by me.

📬 Contact
For questions or issues, feel free to reach out.
chiragchaturvedi197@gmail.com


