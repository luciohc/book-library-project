# 📚 Book Library Project

A fullstack application to manage a virtual book library — created as part of the Torc Fullstack Developer Challenge.

## 🗂️ Project Structure



book-library-project/
├── backend/     # ASP.NET Core Web API
└── frontend/    # React.js Client Application





## 🚀 Technologies Used

### Backend
- ASP.NET Core 6.0
- Entity Framework Core
- SQL Server (Express)
- Swagger

### Frontend
- React.js (via Create React App)
- Axios
- HTML/CSS



## ⚙️ How to Run the Project Locally

### 🔧 Prerequisites

- [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
- [SQL Server Express](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)



### 📦 Backend Setup

bash
cd backend
dotnet restore
dotnet ef database update
dotnet run


The API will start on: `https://localhost:5258`



### 🌐 Frontend Setup

bash
cd frontend
npm install
npm start


The React app will run on: `http://localhost:3000`

Make sure the backend is running and CORS is enabled.


## 🔍 Features

* Search books by Title, Author, or ISBN
* Display list of books with availability
* Responsive UI with clean design
* RESTful API integration with database
* Swagger UI for backend testing



## ✅ Status

✔️ MVP completed and working locally
🧪 Fully tested on both backend and frontend
🔒 Public repository for review


📫 Contact

Developed by [Lúcio Costa](https://github.com/luciohc)  
📧 Email: luciohc@gmail.com  
🔗 Project repository: [github.com/luciohc/book-library-project](https://github.com/luciohc/book-library-project)


