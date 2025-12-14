# Sweet Shop Management System 🍬

A full‑stack web application for managing sweets, categories, users, orders, and authentication.  
This system is designed for both **Admin** and **User** roles, enabling sweet uploads, image management, secure login, and more.

---

# 🚀 Features

## ✅ Backend (Spring Boot)
- JWT Authentication & Authorization  
- Secure password hashing using BCrypt  
- Role-based access control (**USER**, **ROLE_ADMIN**)  
- Add sweets with image upload  
- Manage users & sweets  
- PostgreSQL database support  
- Cross-origin API enabled for frontend access  

## 🎨 Frontend (React)
- Login & Register pages  
- Dashboard for viewing sweets  
- Admin panel (only for ROLE_ADMIN)  
- Image upload preview  
- Responsive UI  

## 🛢 Database (PostgreSQL)
- User table  
- Sweets table  
- Orders table (if needed)  
- Auto schema creation with Hibernate  

---

# 🏗 Project Setup Guide

## 1️⃣ Backend Setup (Spring Boot)

### **Requirements**
- JDK 17+
- Maven
- PostgreSQL 15+
- IntelliJ / VS Code

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sweetshop.git
   ```

2. Open the **backend/** folder in your IDE.

3. Configure **application.properties**:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/sweetshop
   spring.datasource.username=postgres
   spring.datasource.password=your_db_password
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   spring.servlet.multipart.enabled=true
   ```

4. Run the backend:
   ```bash
   mvn spring-boot:run
   ```

Backend runs at:  
👉 http://localhost:8080

---

## 2️⃣ Frontend Setup (React)

### **Requirements**
- Node.js 18+
- npm or yarn

### **Steps**
1. Navigate to frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start frontend:
   ```bash
   npm run dev
   ```

Frontend runs at:  
👉 http://localhost:5173

---

# 📷 Screenshots
(Add your actual screenshots later)

Suggested folder:
```
/screenshots
   ├── login.png
   ├── upload-form.png
   ├── dashboard.png
```

---

# 🧪 Test Report

| Test Case | Status |
|----------|--------|
| User Registration | ✔️ |
| JWT Authentication | ✔️ |
| Sweet Upload with Image | ✔️ |
| Purchase Flow | ✔️ |
| Search Functionality | ✔️ |
| Admin Role Permissions | ✔️ |

You may attach:
- Backend logs  
- Postman test collection  
- Frontend screenshots  

---

# 🤖 My AI Usage (Mandatory Section)

This project was developed with assistance from **ChatGPT** for:

- Debugging Spring Security authentication errors  
- Fixing CORS + multipart issues  
- Writing API documentation  
- Improving code logic & folder structure  
- Creating the README.md  
- Creating test report explanations  
- GitHub uploading guidance  

**Reflection:**  
AI significantly improved my debugging speed and understanding of backend security.  
However, all decisions, implementations, and code integration were done by me manually to ensure full learning and correctness.

---

# 📬 Contact

For questions or collaboration:  
📧 **chiragchaturvedi197@gmail.com**

---

