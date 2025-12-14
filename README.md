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

---

📌 How I Used AI Tools (Detailed Explanation)
I used AI tools in several parts of this project to speed up development and solve issues more efficiently:

1. Debugging & Error Fixing
- I used ChatGPT to understand Spring Security & JWT errors.
- Asked for explanations of POST/GET failures, CORS issues, and HttpMediaTypeNotSupportedException.
- Used AI suggestions to modify controllers, add correct annotations, fix role-based access issues, and enable file uploads properly.

3. Writing and Improving Code
Asked AI to propose better structure for:
- Service layer
- Controller mapping
- DTO structure
- Response formatting
- Used AI recommendations to simplify repetitive logic and clean my code.

4. API Design & Architecture Decisions
Used ChatGPT to brainstorm:
- REST API endpoints
- Role-based access flow
- How to structure Sweet entity + image upload
- How to integrate JWT filters
- AI helped me validate architecture and choose better naming conventions.

5. Documentation & Readability
Asked ChatGPT to help generate:
- README.md layout
- Test report formatting
- Clear installation steps
- Explanation sections
- This made the documentation more professional and complete.

6. React Frontend Improvements
- Consulted AI to debug CORS problems between React (5173) and Spring Boot (8080).
- Got advice on:
- Handling file inputs
- Uploading images as multipart
- Managing auth tokens
- Creating protected admin routes

7. Reflection on AI Usage
- AI tools made the project development:
- Faster, because I didn’t get stuck on errors for long.
- Clearer, as explanations helped me learn concepts.
- More structured, thanks to help with API design and documentation.
  
 But final coding, debugging, configuration, and implementation was done by me, and I ensured I fully understood every change before applying it.

---
# 📬 Contact

For questions or collaboration:  
📧 **chiragchaturvedi197@gmail.com**

---

